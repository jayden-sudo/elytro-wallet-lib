[@elytro/zkemail-proof](../README.md) / [Modules](../modules.md) / ICreateEmailApproverArgs

# Interface: ICreateEmailApproverArgs

**`Export`**

ICreateEmailApproverArgs

## Table of contents

### Properties

- [delpoyedAddress](ICreateEmailApproverArgs.md#delpoyedaddress)
- [salt](ICreateEmailApproverArgs.md#salt)
- [senderCommitment](ICreateEmailApproverArgs.md#sendercommitment)

## Properties

### delpoyedAddress

• **delpoyedAddress**: `string`

deployed address

**`Memberof`**

ICreateEmailApproverArgs

#### Defined in

emailApproverFactory.ts:40

___

### salt

• **salt**: `string`

bytes32 - create2 salt

**`Memberof`**

ICreateEmailApproverArgs

#### Defined in

emailApproverFactory.ts:32

___

### senderCommitment

• **senderCommitment**: `string`

bytes32 - poseidon hash of (email address | commitment_rand)

**`Memberof`**

ICreateEmailApproverArgs

#### Defined in

emailApproverFactory.ts:24
