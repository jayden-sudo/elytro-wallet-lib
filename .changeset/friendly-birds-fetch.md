---
"@elytro/sdk": patch
---

Eliminated the logic that manually increased verificationGasLimit when using semi-valid hook input data in ElytroWallet. The estimation now relies solely on the result from eth_estimateUserOperationGas, which supports stateOverride for more accurate simulation.
