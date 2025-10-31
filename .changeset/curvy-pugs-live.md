---
"@elytro/abi": minor
"@elytro/sdk": minor
"@elytro/decoder": patch
"@elytro/assets": patch
---

Added ABI_SecurityHook ABI file. Refactored ElytroWallet to use hookList instead of guardHookList, updating related logic and variable names. Improved address and input data normalization in signature.ts and fixed padding length for guardHookInputDataBytes. Updated submodule Elytro-wallet-contract.
