[@elytro/sdk](../README.md) / [Modules](../modules.md) / SoulWallet

# Class: SoulWallet

main class of the SDK.

**`Export`**

SoulWallet

**`Implements`**

## Implements

- `ISoulWallet`

## Table of contents

### Constructors

- [constructor](SoulWallet.md#constructor)

### Properties

- [Bundler](SoulWallet.md#bundler)
- [\_entryPointContract](SoulWallet.md#_entrypointcontract)
- [\_onChainConfig](SoulWallet.md#_onchainconfig)
- [bundler](SoulWallet.md#bundler-1)
- [defalutCallbackHandlerAddress](SoulWallet.md#defalutcallbackhandleraddress)
- [preVerificationGasDeploy](SoulWallet.md#preverificationgasdeploy)
- [provider](SoulWallet.md#provider)
- [socialRecoveryModuleAddress](SoulWallet.md#socialrecoverymoduleaddress)
- [soulWalletFactoryAddress](SoulWallet.md#soulwalletfactoryaddress)

### Methods

- [calcWalletAddress](SoulWallet.md#calcwalletaddress)
- [createUnsignedDeployWalletUserOp](SoulWallet.md#createunsigneddeploywalletuserop)
- [entryPoint](SoulWallet.md#entrypoint)
- [estimateUserOperationGas](SoulWallet.md#estimateuseroperationgas)
- [fromTransaction](SoulWallet.md#fromtransaction)
- [getEIP1271TypedData](SoulWallet.md#geteip1271typeddata)
- [getEntryPointContract](SoulWallet.md#getentrypointcontract)
- [getNonce](SoulWallet.md#getnonce)
- [getOnChainConfig](SoulWallet.md#getonchainconfig)
- [getSemiValidSignature](SoulWallet.md#getsemivalidsignature)
- [guardHookList](SoulWallet.md#guardhooklist)
- [initializeData](SoulWallet.md#initializedata)
- [packRawHash](SoulWallet.md#packrawhash)
- [packUserOpEOASignature](SoulWallet.md#packuseropeoasignature)
- [packUserOpHash](SoulWallet.md#packuserophash)
- [packUserOpP256Signature](SoulWallet.md#packuseropp256signature)
- [packUserOpRS256Signature](SoulWallet.md#packuseroprs256signature)
- [preFund](SoulWallet.md#prefund)
- [prePackUserOpSignature](SoulWallet.md#prepackuseropsignature)
- [sendUserOperation](SoulWallet.md#senduseroperation)
- [userOpHash](SoulWallet.md#userophash)
- [walletDeployed](SoulWallet.md#walletdeployed)
- [initializeData](SoulWallet.md#initializedata-1)

## Constructors

### constructor

• **new SoulWallet**(`_provider`, `_bundler`, `_soulWalletFactoryAddress`, `_defalutCallbackHandlerAddress?`, `_socialRecoveryModuleAddress?`, `_config?`): [`SoulWallet`](SoulWallet.md)

Creates an instance of SoulWallet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_provider` | `string` \| `JsonRpcProvider` | ethreum client rpc url |
| `_bundler` | `string` \| `JsonRpcProvider` | eip-4337 bundler rpc url |
| `_soulWalletFactoryAddress` | `string` | soulWalletFactory contract address |
| `_defalutCallbackHandlerAddress?` | `string` | default callback handler contract address |
| `_socialRecoveryModuleAddress?` | `string` | social recovery module contract address |
| `_config?` | `onChainConfig` | if provided, skip onchain config check |

#### Returns

[`SoulWallet`](SoulWallet.md)

**`Memberof`**

SoulWallet

#### Defined in

packages/sdk/src/soulWallet.ts:54

## Properties

### Bundler

• `Readonly` **Bundler**: [`Bundler`](Bundler.md)

#### Defined in

packages/sdk/src/soulWallet.ts:41

___

### \_entryPointContract

• `Private` **\_entryPointContract**: `undefined` \| `Contract`

#### Defined in

packages/sdk/src/soulWallet.ts:184

___

### \_onChainConfig

• `Private` **\_onChainConfig**: `undefined` \| `onChainConfig` = `undefined`

#### Defined in

packages/sdk/src/soulWallet.ts:42

___

### bundler

• `Readonly` **bundler**: `JsonRpcProvider`

#### Defined in

packages/sdk/src/soulWallet.ts:36

___

### defalutCallbackHandlerAddress

• `Optional` `Readonly` **defalutCallbackHandlerAddress**: `string`

#### Defined in

packages/sdk/src/soulWallet.ts:38

___

### preVerificationGasDeploy

• `Readonly` **preVerificationGasDeploy**: `number` = `10000000`

#### Defined in

packages/sdk/src/soulWallet.ts:40

___

### provider

• `Readonly` **provider**: `JsonRpcProvider`

#### Defined in

packages/sdk/src/soulWallet.ts:35

___

### socialRecoveryModuleAddress

• `Optional` `Readonly` **socialRecoveryModuleAddress**: `string`

#### Defined in

packages/sdk/src/soulWallet.ts:39

___

### soulWalletFactoryAddress

• `Readonly` **soulWalletFactoryAddress**: `string`

#### Defined in

packages/sdk/src/soulWallet.ts:37

## Methods

### calcWalletAddress

▸ **calcWalletAddress**(`index`, `initialKeys`, `initialGuardianHash`, `initialGuardianSafePeriod?`, `chainId?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

get wallet address by index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | readable index |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | initial keys |
| `initialGuardianHash` | `string` | initial guardian hash |
| `initialGuardianSafePeriod?` | `number` | initial guardian safe period |
| `chainId?` | `string` \| `number` | number or hex string(must start with 0x) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Implementation of

ISoulWallet.calcWalletAddress

#### Defined in

packages/sdk/src/soulWallet.ts:272

___

### createUnsignedDeployWalletUserOp

▸ **createUnsignedDeployWalletUserOp**(`index`, `initialKeys`, `initialGuardianHash`, `callData?`, `initialGuardianSafePeriod?`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | `undefined` |
| `initialGuardianHash` | `string` | `undefined` |
| `callData` | `string` | `"0x"` |
| `initialGuardianSafePeriod?` | `number` | `undefined` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Implementation of

ISoulWallet.createUnsignedDeployWalletUserOp

#### Defined in

packages/sdk/src/soulWallet.ts:352

___

### entryPoint

▸ **entryPoint**(): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.entryPoint

#### Defined in

packages/sdk/src/soulWallet.ts:197

___

### estimateUserOperationGas

▸ **estimateUserOperationGas**(`validatorAddress`, `userOp`, `stateOverride?`, `signkeyType?`, `semiValidGuardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validatorAddress` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `stateOverride?` | `Record`\<`string`, `StateOverride`\> |
| `signkeyType?` | [`SignkeyType`](../enums/SignkeyType.md) |
| `semiValidGuardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOpGas`](../interfaces/UserOpGas.md), [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

ISoulWallet.estimateUserOperationGas

#### Defined in

packages/sdk/src/soulWallet.ts:631

___

### fromTransaction

▸ **fromTransaction**(`maxFeePerGas`, `maxPriorityFeePerGas`, `from`, `txs`, `nonce?`): `Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxFeePerGas` | `string` |
| `maxPriorityFeePerGas` | `string` |
| `from` | `string` |
| `txs` | [`Transaction`](../interfaces/Transaction.md)[] |
| `nonce?` | `Object` |
| `nonce.nonceKey?` | `string` |
| `nonce.nonceValue?` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`UserOperation`](../modules.md#useroperation), `Error`\>\>

#### Implementation of

ISoulWallet.fromTransaction

#### Defined in

packages/sdk/src/soulWallet.ts:758

___

### getEIP1271TypedData

▸ **getEIP1271TypedData**(`walletAddr`, `message`): `Promise`\<[`Result`](../modules.md#result)\<\{ `domain`: `TypedDataDomain` ; `typedMessage`: `string` ; `types`: `Record`\<`string`, `TypedDataField`[]\> ; `value`: `Record`\<`string`, `any`\>  }, `Error`\>\>

get TypedData from EIP1271.

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |
| `message` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `domain`: `TypedDataDomain` ; `typedMessage`: `string` ; `types`: `Record`\<`string`, `TypedDataField`[]\> ; `value`: `Record`\<`string`, `any`\>  }, `Error`\>\>

{Promise<Result<{
        domain: TypedDataDomain,
        types: Record<string, Array<TypedDataField>>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value: Record<string, any>,
        typedMessage: string
    }, Error>>}

**`Abstract`**

**`Memberof`**

ISoulWallet

#### Implementation of

ISoulWallet.getEIP1271TypedData

#### Defined in

packages/sdk/src/soulWallet.ts:905

___

### getEntryPointContract

▸ **getEntryPointContract**(): `Promise`\<[`Result`](../modules.md#result)\<`Contract`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`Contract`, `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:186

___

### getNonce

▸ **getNonce**(`walletAddr`, `key?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddr` | `string` |
| `key?` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.getNonce

#### Defined in

packages/sdk/src/soulWallet.ts:701

___

### getOnChainConfig

▸ **getOnChainConfig**(): `Promise`\<[`Result`](../modules.md#result)\<`onChainConfig`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`onChainConfig`, `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:93

___

### getSemiValidSignature

▸ **getSemiValidSignature**(`validatorAddress`, `userOp`, `signkeyType?`, `semiValidGuardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `validatorAddress` | `string` |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `signkeyType?` | [`SignkeyType`](../enums/SignkeyType.md) |
| `semiValidGuardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:570

___

### guardHookList

▸ **guardHookList**(`walletAddress`): `Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`[], `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:441

___

### initializeData

▸ **initializeData**(`initialKeys`, `initialGuardianHash?`, `initialGuardianSafePeriod?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | `undefined` |
| `initialGuardianHash` | `string` | `ethers.ZeroHash` |
| `initialGuardianSafePeriod` | `number` | `SocialRecovery.defalutInitialGuardianSafePeriod` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:247

___

### packRawHash

▸ **packRawHash**(`hash`, `validAfter?`, `validUntil?`): `Promise`\<[`Result`](../modules.md#result)\<\{ `packedHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `packedHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:427

___

### packUserOpEOASignature

▸ **packUserOpEOASignature**(`validatorAddress`, `signature`, `validationData`, `guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack userOp signature (EOA)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validatorAddress` | `string` | validator contract address |
| `signature` | `string` | EOA signature |
| `validationData` | `string` | validation data |
| `guardHookInputData?` | `GuardHookInputData` |  |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

packages/sdk/src/soulWallet.ts:486

___

### packUserOpHash

▸ **packUserOpHash**(`userOp`, `validAfter?`, `validUntil?`): `Promise`\<[`Result`](../modules.md#result)\<\{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |
| `validAfter?` | `number` |
| `validUntil?` | `number` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `packedUserOpHash`: `string` ; `validationData`: `string`  }, `Error`\>\>

#### Implementation of

ISoulWallet.packUserOpHash

#### Defined in

packages/sdk/src/soulWallet.ts:415

___

### packUserOpP256Signature

▸ **packUserOpP256Signature**(`validatorAddress`, `signatureData`, `validationData`, `guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack userOp signature (P256)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validatorAddress` | `string` | validator contract address |
| `signatureData` | `Object` | signature data, messageHash is userOp hash(packed userOp hash) |
| `signatureData.authenticatorData` | `string` | - |
| `signatureData.clientDataSuffix` | `string` | - |
| `signatureData.messageHash` | `string` | - |
| `signatureData.publicKey` | `string` \| [`ECCPoint`](../interfaces/ECCPoint.md) | - |
| `signatureData.r` | `string` | - |
| `signatureData.s` | `string` | - |
| `validationData` | `string` | validation data |
| `guardHookInputData?` | `GuardHookInputData` |  |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

packages/sdk/src/soulWallet.ts:515

___

### packUserOpRS256Signature

▸ **packUserOpRS256Signature**(`validatorAddress`, `signatureData`, `validationData`, `guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

pack userOp signature (RS256)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validatorAddress` | `string` | validator contract address |
| `signatureData` | `Object` |  |
| `signatureData.authenticatorData` | `string` | - |
| `signatureData.clientDataSuffix` | `string` | - |
| `signatureData.messageHash` | `string` | - |
| `signatureData.publicKey` | [`RSAPublicKey`](../interfaces/RSAPublicKey.md) | - |
| `signatureData.signature` | `string` | - |
| `validationData` | `string` |  |
| `guardHookInputData?` | `GuardHookInputData` |  |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

{Promise<Result<string, Error>>}

**`Memberof`**

SoulWallet

#### Defined in

packages/sdk/src/soulWallet.ts:551

___

### preFund

▸ **preFund**(`userOp`): `Promise`\<[`Result`](../modules.md#result)\<\{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<\{ `deposit`: `string` ; `missfund`: `string` ; `prefund`: `string`  }, `Error`\>\>

#### Implementation of

ISoulWallet.preFund

#### Defined in

packages/sdk/src/soulWallet.ts:296

___

### prePackUserOpSignature

▸ **prePackUserOpSignature**(`guardHookInputData?`): `Promise`\<[`Result`](../modules.md#result)\<`undefined` \| `HookInputData`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `guardHookInputData?` | `GuardHookInputData` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`undefined` \| `HookInputData`, `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:458

___

### sendUserOperation

▸ **sendUserOperation**(`userOp`): `Promise`\<[`Result`](../modules.md#result)\<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<``true``, [`UserOpErrors`](UserOpErrors.md)\>\>

#### Implementation of

ISoulWallet.sendUserOperation

#### Defined in

packages/sdk/src/soulWallet.ts:679

___

### userOpHash

▸ **userOpHash**(`userOp`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userOp` | [`UserOperation`](../modules.md#useroperation) |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

ISoulWallet.userOpHash

#### Defined in

packages/sdk/src/soulWallet.ts:406

___

### walletDeployed

▸ **walletDeployed**(`walletAddress`): `Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletAddress` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

#### Defined in

packages/sdk/src/soulWallet.ts:730

___

### initializeData

▸ **initializeData**(`socialRecoveryModuleAddress`, `defalutCallbackHandlerAddress`, `initialKeys`, `initialGuardianHash?`, `initialGuardianSafePeriod?`): [`Result`](../modules.md#result)\<`string`, `Error`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `socialRecoveryModuleAddress` | `undefined` \| `string` | `undefined` |
| `defalutCallbackHandlerAddress` | `undefined` \| `string` | `undefined` |
| `initialKeys` | [`InitialKey`](../modules.md#initialkey)[] | `undefined` |
| `initialGuardianHash` | `string` | `ethers.ZeroHash` |
| `initialGuardianSafePeriod` | `number` | `SocialRecovery.defalutInitialGuardianSafePeriod` |

#### Returns

[`Result`](../modules.md#result)\<`string`, `Error`\>

#### Defined in

packages/sdk/src/soulWallet.ts:205
