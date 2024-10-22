[@elytro/sdk](../README.md) / [Modules](../modules.md) / UserOpDetail

# Interface: UserOpDetail

**`Export`**

UserOpDetail

## Hierarchy

- [`UserOperation`](../modules.md#useroperation)

  ↳ **`UserOpDetail`**

## Table of contents

### Properties

- [blockHash](UserOpDetail.md#blockhash)
- [blockNumber](UserOpDetail.md#blocknumber)
- [callData](UserOpDetail.md#calldata)
- [callGasLimit](UserOpDetail.md#callgaslimit)
- [entryPoint](UserOpDetail.md#entrypoint)
- [factory](UserOpDetail.md#factory)
- [factoryData](UserOpDetail.md#factorydata)
- [maxFeePerGas](UserOpDetail.md#maxfeepergas)
- [maxPriorityFeePerGas](UserOpDetail.md#maxpriorityfeepergas)
- [nonce](UserOpDetail.md#nonce)
- [paymaster](UserOpDetail.md#paymaster)
- [paymasterData](UserOpDetail.md#paymasterdata)
- [paymasterPostOpGasLimit](UserOpDetail.md#paymasterpostopgaslimit)
- [paymasterVerificationGasLimit](UserOpDetail.md#paymasterverificationgaslimit)
- [preVerificationGas](UserOpDetail.md#preverificationgas)
- [sender](UserOpDetail.md#sender)
- [signature](UserOpDetail.md#signature)
- [transactionHash](UserOpDetail.md#transactionhash)
- [verificationGasLimit](UserOpDetail.md#verificationgaslimit)

## Properties

### blockHash

• **blockHash**: `string`

#### Defined in

packages/sdk/src/interface/IBundler.ts:56

___

### blockNumber

• **blockNumber**: `number`

#### Defined in

packages/sdk/src/interface/IBundler.ts:55

___

### callData

• **callData**: `string`

#### Inherited from

UserOperation.callData

#### Defined in

packages/sdk/src/interface/UserOperation.ts:9

___

### callGasLimit

• **callGasLimit**: [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.callGasLimit

#### Defined in

packages/sdk/src/interface/UserOperation.ts:10

___

### entryPoint

• **entryPoint**: `string`

#### Defined in

packages/sdk/src/interface/IBundler.ts:54

___

### factory

• **factory**: ``null`` \| `string`

#### Inherited from

UserOperation.factory

#### Defined in

packages/sdk/src/interface/UserOperation.ts:7

___

### factoryData

• **factoryData**: ``null`` \| `string`

#### Inherited from

UserOperation.factoryData

#### Defined in

packages/sdk/src/interface/UserOperation.ts:8

___

### maxFeePerGas

• **maxFeePerGas**: [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.maxFeePerGas

#### Defined in

packages/sdk/src/interface/UserOperation.ts:13

___

### maxPriorityFeePerGas

• **maxPriorityFeePerGas**: [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.maxPriorityFeePerGas

#### Defined in

packages/sdk/src/interface/UserOperation.ts:14

___

### nonce

• **nonce**: [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.nonce

#### Defined in

packages/sdk/src/interface/UserOperation.ts:6

___

### paymaster

• **paymaster**: ``null`` \| `string`

#### Inherited from

UserOperation.paymaster

#### Defined in

packages/sdk/src/interface/UserOperation.ts:15

___

### paymasterData

• **paymasterData**: ``null`` \| `string`

#### Inherited from

UserOperation.paymasterData

#### Defined in

packages/sdk/src/interface/UserOperation.ts:18

___

### paymasterPostOpGasLimit

• **paymasterPostOpGasLimit**: ``null`` \| [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.paymasterPostOpGasLimit

#### Defined in

packages/sdk/src/interface/UserOperation.ts:17

___

### paymasterVerificationGasLimit

• **paymasterVerificationGasLimit**: ``null`` \| [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.paymasterVerificationGasLimit

#### Defined in

packages/sdk/src/interface/UserOperation.ts:16

___

### preVerificationGas

• **preVerificationGas**: [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.preVerificationGas

#### Defined in

packages/sdk/src/interface/UserOperation.ts:12

___

### sender

• **sender**: `string`

#### Inherited from

UserOperation.sender

#### Defined in

packages/sdk/src/interface/UserOperation.ts:5

___

### signature

• **signature**: `string`

#### Inherited from

UserOperation.signature

#### Defined in

packages/sdk/src/interface/UserOperation.ts:19

___

### transactionHash

• **transactionHash**: `string`

#### Defined in

packages/sdk/src/interface/IBundler.ts:57

___

### verificationGasLimit

• **verificationGasLimit**: [`BigNumberish`](../modules.md#bignumberish)

#### Inherited from

UserOperation.verificationGasLimit

#### Defined in

packages/sdk/src/interface/UserOperation.ts:11
