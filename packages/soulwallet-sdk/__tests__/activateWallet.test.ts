import { TypedDataDomain, TypedDataField, ethers } from 'ethers';
import {
    SoulWallet,
    UserOperation,
    PackedUserOperation,
    UserOpUtils,
    UserOpErrors,
    UserOpErrorCodes,
    // L1KeyStore,
    Ok, Err, Result,
    UserOpReceipt,
    UserOpDetail,
    UserOpGas,
    Bundler,
    Transaction,
    // KeyStoreInfo,
    GuardianSignature,
    // KeyStoreTypedDataType,
    InitialKey,
    ECCPoint,
    SignkeyType,
    P256Lib,
    WebAuthN,
    Base64Url,
    WalletFactory
} from '..';
import { describe, expect, test } from '@jest/globals';
import { webcrypto } from 'node:crypto';
import { Hex } from '../src/tools/hex';
import {
    randomBytes
} from 'crypto';

describe('ActivateWallet', () => {
    test('Activate', async () => {
        const RPC = "https://optimism-rpc.publicnode.com";
        const BunlderAPIKEY = "";
        const pimlicoAPIKEY = ""
        if (BunlderAPIKEY == "" || pimlicoAPIKEY == "") {
            return;
        }
        const BundlerRPC = `https://api.pimlico.io/v2/optimism/rpc?apikey=${BunlderAPIKEY}`;
        const pimlicoSponsorRPC = `https://api.pimlico.io/v2/optimism/rpc?apikey=${pimlicoAPIKEY}`;

        const SoulWalletDefaultValidator = '0x82621ac52648b738fEdd381a3678851933505762';
        const SoulwalletFactory = '0xD49A10281cD035a4219428D53a08DbC1e97bd741';
        const DefaultCallbackHandler = '0x880c6eb80583795625935B08AA28EB37F16732C7';

        const Web3RPC = new ethers.JsonRpcProvider(RPC);

        const soulWallet = new SoulWallet(
            Web3RPC,
            BundlerRPC,
            SoulwalletFactory,
            DefaultCallbackHandler,
            undefined
        );

        // new EOASigner  
        const signer = ethers.Wallet.createRandom();
        //const signer = new ethers.Wallet('0x0000000000000000000000000000000000000000000000000000000000000001');

        const index: number = 0;
        const initialKeys: InitialKey[] = [signer.address];
        const initialGuardianHash: string = "0x";

        const _walletAddress = await soulWallet.calcWalletAddress(
            index,
            initialKeys,
            initialGuardianHash
        );
        expect(_walletAddress.isOk()).toBe(true);
        const walletAddress = _walletAddress.OK;
        console.log('walletAddress', walletAddress);

        const calldata = "0x";
        const _userOp = await soulWallet.createUnsignedDeployWalletUserOp(
            index,
            initialKeys,
            initialGuardianHash,
            calldata
        );

        expect(_userOp.isOk()).toBe(true);
        const userOp = _userOp.OK;

        {

            // get gas price
            const gasPrice = await Web3RPC.getFeeData();
            expect(gasPrice).not.toBeNull();
            expect(gasPrice.maxFeePerGas).not.toBeNull();
            expect(gasPrice.maxPriorityFeePerGas).not.toBeNull();
            userOp.maxFeePerGas = gasPrice.maxFeePerGas!;
            userOp.maxPriorityFeePerGas = gasPrice.maxPriorityFeePerGas!;
        }

        {
            const re = await soulWallet.estimateUserOperationGas(SoulWalletDefaultValidator, userOp, SignkeyType.EOA);
            if (userOp.callData === '0x') {
                userOp.callGasLimit = 1;
            }
            expect(re.isOk()).toBe(true);
        }

        let usePaymaster = true;
        if (usePaymaster) {
            const entryPoint = (await soulWallet.entryPoint()).OK;
            const chainId = '0x' + ((await Web3RPC.getNetwork()).chainId).toString(16);
            userOp.paymaster = "";
            userOp.paymasterVerificationGasLimit = 0;
            userOp.paymasterPostOpGasLimit = 0;
            userOp.paymasterData = "0x";
            userOp.signature = (await soulWallet.getSemiValidSignature(SoulWalletDefaultValidator, userOp, SignkeyType.EOA)).OK;
            const usePimlico = true;
            if (usePimlico) {
                const SponsorRPC = new ethers.JsonRpcProvider(
                    pimlicoSponsorRPC, undefined, { batchMaxCount: 1 }
                );

                const json = await SponsorRPC.send(
                    "pm_sponsorUserOperation", [
                    JSON.parse(UserOpUtils.userOperationToJSON(userOp)),
                    entryPoint,
                    {
                        sponsorshipPolicyId: "sp_slow_vivisector"
                    }
                ]);
                if (
                    typeof json === 'object' &&
                    typeof json.callGasLimit === 'string' &&
                    typeof json.paymaster === 'string' &&
                    typeof json.paymasterData === 'string' &&
                    typeof json.paymasterPostOpGasLimit === 'string' &&
                    typeof json.paymasterVerificationGasLimit === 'string' &&
                    typeof json.verificationGasLimit === 'string'
                ) {
                    userOp.callGasLimit = BigInt(json.callGasLimit);
                    userOp.paymaster = json.paymaster;
                    userOp.paymasterData = json.paymasterData;
                    userOp.paymasterPostOpGasLimit = BigInt(json.paymasterPostOpGasLimit);
                    userOp.paymasterVerificationGasLimit = BigInt(json.paymasterVerificationGasLimit);
                    userOp.preVerificationGas = BigInt(json.preVerificationGas);
                    userOp.verificationGasLimit = BigInt(json.verificationGasLimit);
                } else {
                    throw new Error('sponsor failed');
                }
                console.log('json', json);
            } else {
                const sponsorUrl = "https://api.stable.cash/alpha1/appapi/sponsor/sponsor-op";
                const sponsorData = {
                    chainId: chainId,
                    entryPoint: entryPoint,
                    op: JSON.parse(UserOpUtils.userOperationToJSON(userOp))
                };
                const re = await fetch(sponsorUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sponsorData),
                });
                const json = await re.json();
                if (
                    typeof json === 'object' &&
                    typeof json.msg === 'string' &&
                    json.msg === "success" &&
                    typeof json.data === 'object' &&
                    typeof json.data.callGasLimit === 'string' &&
                    typeof json.data.paymaster === 'string' &&
                    typeof json.data.paymasterData === 'string' &&
                    typeof json.data.paymasterPostOpGasLimit === 'string' &&
                    typeof json.data.paymasterVerificationGasLimit === 'string' &&
                    typeof json.data.verificationGasLimit === 'string'
                ) {
                    userOp.callGasLimit = BigInt(json.data.callGasLimit);
                    userOp.paymaster = json.data.paymaster;
                    userOp.paymasterData = json.data.paymasterData;
                    userOp.paymasterPostOpGasLimit = BigInt(json.data.paymasterPostOpGasLimit);
                    userOp.paymasterVerificationGasLimit = BigInt(json.data.paymasterVerificationGasLimit);
                    userOp.preVerificationGas = BigInt(json.data.preVerificationGas);
                    userOp.verificationGasLimit = BigInt(json.data.verificationGasLimit);
                } else {
                    throw new Error('sponsor failed');
                }
                console.log('json', json);
            }



        } else {
            const preFund = await soulWallet.preFund(userOp);
            expect(preFund.isOk()).toBe(true);
            // get balance
            const _balance = await Web3RPC.getBalance(walletAddress);
            const missfund = BigInt(preFund.OK.missfund);
            expect(_balance >= missfund).toBe(true);
        }

        {
            const _userOpHash = await soulWallet.userOpHash(userOp);
            expect(_userOpHash.isOk()).toBe(true);
            const userOpHash = _userOpHash.OK;
            const dateNow = Math.floor(new Date().getTime() / 1000);
            const _re = await soulWallet.packRawHash(userOpHash, dateNow - 1000 * 60 * 60, dateNow + 1000 * 60 * 60);
            expect(_re.isOk()).toBe(true);
            const packedHash: string = _re.OK.packedHash;
            const validationData: string = _re.OK.validationData;

            const _signature = signer.signMessageSync(ethers.getBytes(packedHash));

            const signature = await soulWallet.packUserOpEOASignature(SoulWalletDefaultValidator, _signature, validationData);
            expect(signature.isOk()).toBe(true);
            userOp.signature = signature.OK;
        }
        {
            const packedUserOp = UserOpUtils.packUserOp(userOp);
            const packedUserOpJson = UserOpUtils.packedUserOperationToJSON(packedUserOp);
            const tupleStr = UserOpUtils.packedUserOperationToTuple(packedUserOp);
            console.log('packedUserOp', packedUserOp);
            const re = await soulWallet.sendUserOperation(userOp);
            if (re.isErr()) {
                debugger;
                console.log('error', re.ERR.toString());
            }
            expect(re.isOk()).toBe(true);
        }










    }, 1000 * 60);
});

