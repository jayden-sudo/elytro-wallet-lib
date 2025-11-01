---
"@elytro/sdk": patch
---

Replaces GuardHookInputData with HookInputDataItem for hook input data, updates method signatures and documentation to require sorted hook input data arrays, and removes unused gasOverhead.ts. Gas estimation now adjusts verificationGasLimit based on hook input data and key type. Improves clarity and consistency in hook signature packing and usage.
