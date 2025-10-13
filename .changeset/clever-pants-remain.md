---
"@elytro/sdk": minor
---

Added calcWalletAddressGeneric and createUnsignedDeployWalletUserOpGeneric methods to ElytroWallet and IElytroWallet for chain-agnostic wallet address calculation and deployment. Updated WalletFactory to support chainId as optional for salt calculation and wallet address generation. Deprecated older methods in favor of new generic versions.
