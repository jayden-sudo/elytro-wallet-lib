import { ethers } from "ethers";
import { UserOperation } from "./UserOperation.js";
import { UserOpErrors } from "./IUserOpErrors.js";
import { Result } from '@soulwallet_test/result';


/**
 *
 *
 * @export
 * @interface UserOpGas
 */
export interface UserOpGas {
    callGasLimit: string;
    preVerificationGas: string;
    validAfter: string;
    validUntil: string;
    verificationGasLimit: string;
}

/**
 *
 *
 * @export
 * @interface UserOpDetail
 * @extends {UserOperation}
 */
export interface UserOpDetail extends UserOperation {
    entryPoint: string;
    blockNumber: number;
    blockHash: string;
    transactionHash: string;
}

/**
 *
 *
 * @export
 * @interface UserOpReceipt
 * @extends {UserOperation}
 */
export interface UserOpReceipt extends UserOperation {
    /* 
    userOpHash the request hash
    entryPoint
    sender
    nonce
    paymaster the paymaster used for this userOp (or empty)
    actualGasCost - actual amount paid (by account or paymaster) for this UserOperation
    actualGasUsed - total gas used by this UserOperation (including preVerification, creation, validation and execution)
    success boolean - did this execution completed without revert
    reason in case of revert, this is the revert reason
    logs the logs generated by this UserOperation (not including logs of other UserOperations in the same bundle)
    receipt the TransactionReceipt object. Note that the returned TransactionReceipt is for the entire bundle, not only for this UserOperation.
    */
    userOpHash: string;
    entryPoint: string;
    sender: string;
    nonce: string;
    paymaster: string;
    actualGasCost: string;
    actualGasUsed: string;
    success: boolean;
    reason: string;
    logs: ethers.Log[];
    receipt: ethers.TransactionReceipt;
}



/**
 *
 *
 * @export
 * @abstract
 * @class IBundler
 */
export abstract class IBundler {

    /**
     *
     *
     * @abstract 
     * @param {string} entryPoint
     * @param {UserOperation} userOp
     * @return {*}  {Promise<Result<string, UserOpErrors>>}
     * @memberof IBundler
     */
    abstract eth_sendUserOperation(entryPoint: string, userOp: UserOperation): Promise<Result<string, UserOpErrors>>;

    /**
     *
     *
     * @abstract 
     * @param {string} entryPoint
     * @param {UserOperation} userOp
     * @return {*}  {Promise<Result<UserOpGas, UserOpErrors>>}
     * @memberof IBundler
     */
    abstract eth_estimateUserOperationGas(entryPoint: string, userOp: UserOperation): Promise<Result<UserOpGas, UserOpErrors>>;

    /**
     *
     *
     * @abstract 
     * @param {string} userOpHash
     * @return {*}  {(Promise<Result<null | UserOpDetail, string>>)}
     * @memberof IBundler
     */
    abstract eth_getUserOperationByHash(userOpHash: string): Promise<Result<null | UserOpDetail, Error>>;

    /**
     *
     *
     * @abstract 
     * @param {string} userOpHash
     * @return {*}  {(Promise<Result<null | UserOpReceipt, string>>)}
     * @memberof IBundler
     */
    abstract eth_getUserOperationReceipt(userOpHash: string): Promise<Result<null | UserOpReceipt, Error>>;

    /**
     *
     *
     * @abstract 
     * @return {*}  {Promise<Result<string[], string>>}
     * @memberof IBundler
     */
    abstract eth_supportedEntryPoints(): Promise<Result<string[], Error>>;

    /**
     *
     *
     * @abstract 
     * @return {*}  {Promise<Result<number, string>>}
     * @memberof IBundler
     */
    abstract eth_chainId(): Promise<Result<number, Error>>;
}