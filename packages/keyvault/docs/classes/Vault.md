[@elytro/keyvault](../README.md) / [Modules](../modules.md) / Vault

# Class: Vault

Vault

**`Export`**

Vault

**`Implements`**

## Implements

- `IVault`

## Table of contents

### Constructors

- [constructor](Vault.md#constructor)

### Properties

- [\_AES\_256\_GCM](Vault.md#_aes_256_gcm)
- [\_EventEmitter](Vault.md#_eventemitter)
- [\_KeyVaultDataCache](Vault.md#_keyvaultdatacache)
- [\_accounts](Vault.md#_accounts)
- [\_lockTime](Vault.md#_locktime)
- [\_storage](Vault.md#_storage)
- [\_timeout](Vault.md#_timeout)
- [\_timeoutDuration](Vault.md#_timeoutduration)
- [DEFAULT\_PATH](Vault.md#default_path)

### Methods

- [\_clearTimeout](Vault.md#_cleartimeout)
- [\_deriveKey](Vault.md#_derivekey)
- [\_init](Vault.md#_init)
- [\_isInitialized](Vault.md#_isinitialized)
- [\_loadData](Vault.md#_loaddata)
- [\_loadSigner](Vault.md#_loadsigner)
- [\_rawSign](Vault.md#_rawsign)
- [\_saveData](Vault.md#_savedata)
- [\_touchTimeout](Vault.md#_touchtimeout)
- [changePassword](Vault.md#changepassword)
- [destroy](Vault.md#destroy)
- [emit](Vault.md#emit)
- [getSigner](Vault.md#getsigner)
- [init](Vault.md#init)
- [initBip39](Vault.md#initbip39)
- [isInitialized](Vault.md#isinitialized)
- [isLocked](Vault.md#islocked)
- [lock](Vault.md#lock)
- [off](Vault.md#off)
- [on](Vault.md#on)
- [personalSign](Vault.md#personalsign)
- [rawSign](Vault.md#rawsign)
- [restore](Vault.md#restore)
- [unlock](Vault.md#unlock)
- [\_hash](Vault.md#_hash)
- [remove](Vault.md#remove)
- [rename](Vault.md#rename)

## Constructors

### constructor

• **new Vault**(`tag`): [`Vault`](Vault.md)

Creates an instance of Vault.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | tag for keyVault |

#### Returns

[`Vault`](Vault.md)

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:61

## Properties

### \_AES\_256\_GCM

• `Private` **\_AES\_256\_GCM**: `undefined` \| `AES_256_GCM`

#### Defined in

keyvault/src/vault.ts:42

___

### \_EventEmitter

• `Private` **\_EventEmitter**: `Emitter`\<[`VaultEvents`](../modules.md#vaultevents)\>

#### Defined in

keyvault/src/vault.ts:48

___

### \_KeyVaultDataCache

• `Private` **\_KeyVaultDataCache**: `undefined` \| `KeyVaultStorageStructure` = `undefined`

#### Defined in

keyvault/src/vault.ts:44

___

### \_accounts

• `Private` **\_accounts**: `Map`\<`string`, `ECDSA`\>

#### Defined in

keyvault/src/vault.ts:46

___

### \_lockTime

• `Private` **\_lockTime**: `number` = `0`

#### Defined in

keyvault/src/vault.ts:52

___

### \_storage

• `Private` **\_storage**: `Storage`

#### Defined in

keyvault/src/vault.ts:41

___

### \_timeout

• `Private` **\_timeout**: `undefined` \| `Timeout`

#### Defined in

keyvault/src/vault.ts:50

___

### \_timeoutDuration

• `Private` `Readonly` **\_timeoutDuration**: `number`

#### Defined in

keyvault/src/vault.ts:51

___

### DEFAULT\_PATH

▪ `Static` `Readonly` **DEFAULT\_PATH**: ``"m/44'/60'/0'/0/0"``

#### Defined in

keyvault/src/vault.ts:54

## Methods

### \_clearTimeout

▸ **_clearTimeout**(): `void`

#### Returns

`void`

#### Defined in

keyvault/src/vault.ts:184

___

### \_deriveKey

▸ **_deriveKey**(`password`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Defined in

keyvault/src/vault.ts:223

___

### \_init

▸ **_init**(`seed`, `password`, `enforce?`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |
| `password` | `string` |
| `enforce?` | `boolean` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

#### Defined in

keyvault/src/vault.ts:278

___

### \_isInitialized

▸ **_isInitialized**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

keyvault/src/vault.ts:376

___

### \_loadData

▸ **_loadData**(): `Promise`\<[`Result`](../modules.md#result)\<`KeyVaultStorageStructure`, `Error`\>\>

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`KeyVaultStorageStructure`, `Error`\>\>

#### Defined in

keyvault/src/vault.ts:191

___

### \_loadSigner

▸ **_loadSigner**(`path`): `Promise`\<[`Result`](../modules.md#result)\<`ECDSA`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `undefined` \| `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`ECDSA`, `Error`\>\>

#### Defined in

keyvault/src/vault.ts:490

___

### \_rawSign

▸ **_rawSign**(`byte32Message`, `path`): `Promise`\<[`Result`](../modules.md#result)\<[`SignData`](../interfaces/SignData.md), `Error`\>\>

sign a message (rawSign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte32Message` | `string` \| `Uint8Array` |
| `path` | `undefined` \| `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`SignData`](../interfaces/SignData.md), `Error`\>\>

{Promise<Result<SignData, Error>>}

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:568

___

### \_saveData

▸ **_saveData**(`keyVaultStorageStructure`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyVaultStorageStructure` | `KeyVaultStorageStructure` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

#### Defined in

keyvault/src/vault.ts:214

___

### \_touchTimeout

▸ **_touchTimeout**(`createTimer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `createTimer` | `boolean` |

#### Returns

`void`

#### Defined in

keyvault/src/vault.ts:173

___

### changePassword

▸ **changePassword**(`oldPassword`, `newPassword`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

not implemented

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPassword` | `string` |
| `newPassword` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.changePassword

#### Defined in

keyvault/src/vault.ts:472

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

for security reason, allways call this method after use

#### Returns

`Promise`\<`void`\>

{Promise<void>}

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:361

___

### emit

▸ **emit**\<`Key`\>(`eventName`, `payload`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `Key` |
| `payload` | [`VaultEvents`](../modules.md#vaultevents)[`Key`] |

#### Returns

`void`

#### Defined in

keyvault/src/vault.ts:160

___

### getSigner

▸ **getSigner**(`path`): `Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `undefined` \| `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`string`, `Error`\>\>

#### Implementation of

IVault.getSigner

#### Defined in

keyvault/src/vault.ts:480

___

### init

▸ **init**(`password`, `enforce?`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

initialize vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `password` | `string` |  |
| `enforce?` | `boolean` | if true, delete all data and re-initialize |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.init

#### Defined in

keyvault/src/vault.ts:272

___

### initBip39

▸ **initBip39**(`phrase`, `password`, `enforce?`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

initialize vault with bip39 phrase

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `phrase` | `string` | 12 words bip39 phrase,split by space |
| `password` | `string` |  |
| `enforce?` | `boolean` | if true, delete all data and re-initialize |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.initBip39

#### Defined in

keyvault/src/vault.ts:246

___

### isInitialized

▸ **isInitialized**(): `Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

check if vault is initialized

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

{Promise<Result<boolean, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.isInitialized

#### Defined in

keyvault/src/vault.ts:344

___

### isLocked

▸ **isLocked**(): `Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

check if vault is locked

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`boolean`, `Error`\>\>

{Promise<Result<boolean, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.isLocked

#### Defined in

keyvault/src/vault.ts:458

___

### lock

▸ **lock**(): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

lock keyVault

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.lock

#### Defined in

keyvault/src/vault.ts:435

___

### off

▸ **off**\<`Key`\>(`eventName`, `handler?`): `void`

remove event listener

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) | extends keyof VaultEvents |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Key` | event name |
| `handler?` | (`arg`: [`VaultEvents`](../modules.md#vaultevents)[`Key`]) => `unknown` | event handler |

#### Returns

`void`

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:152

___

### on

▸ **on**\<`Key`\>(`eventName`, `handler`): `void`

add event listener

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Key` | extends keyof [`VaultEvents`](../modules.md#vaultevents) | extends keyof VaultEvents |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `Key` | event name |
| `handler` | (`arg`: [`VaultEvents`](../modules.md#vaultevents)[`Key`]) => `unknown` | event handler |

#### Returns

`void`

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:136

___

### personalSign

▸ **personalSign**(`byte32Message`, `path`): `Promise`\<[`Result`](../modules.md#result)\<[`SignData`](../interfaces/SignData.md), `Error`\>\>

sign a message (personalSign)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte32Message` | `string` \| `Uint8Array` |
| `path` | `undefined` \| `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`SignData`](../interfaces/SignData.md), `Error`\>\>

{Promise<Result<SignData, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.personalSign

#### Defined in

keyvault/src/vault.ts:538

___

### rawSign

▸ **rawSign**(`byte32Message`, `path`): `Promise`\<[`Result`](../modules.md#result)\<[`SignData`](../interfaces/SignData.md), `Error`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte32Message` | `string` \| `Uint8Array` |
| `path` | `undefined` \| `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<[`SignData`](../interfaces/SignData.md), `Error`\>\>

{Promise<Result<SignData, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.rawSign

#### Defined in

keyvault/src/vault.ts:597

___

### restore

▸ **restore**(`exportData`, `password`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

not implemented

#### Parameters

| Name | Type |
| :------ | :------ |
| `exportData` | `string` |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.restore

#### Defined in

keyvault/src/vault.ts:332

___

### unlock

▸ **unlock**(`password`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

unlock keyVault

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Memberof`**

Vault

#### Implementation of

IVault.unlock

#### Defined in

keyvault/src/vault.ts:391

___

### \_hash

▸ **_hash**(`data`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`string`

#### Defined in

keyvault/src/vault.ts:232

___

### remove

▸ **remove**(`tag`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

destroy vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | tag for keyVault |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Static`**

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:85

___

### rename

▸ **rename**(`oldTag`, `newTag`): `Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

rename vault, must lock first

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldTag` | `string` | old tag |
| `newTag` | `string` | new tag |

#### Returns

`Promise`\<[`Result`](../modules.md#result)\<`void`, `Error`\>\>

{Promise<Result<void, Error>>}

**`Static`**

**`Memberof`**

Vault

#### Defined in

keyvault/src/vault.ts:99
