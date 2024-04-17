//Please do not modify manually,use `git submodule update --init --recursive && pnpm run generateABI`

export default [
  {
    "type": "function",
    "name": "cancelRecovery",
    "inputs": [
      {
        "name": "recoveryId",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "executeRecovery",
    "inputs": [
      {
        "name": "wallet",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newOwners",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "scheduleRecovery",
    "inputs": [
      {
        "name": "wallet",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "newOwners",
        "type": "bytes32[]",
        "internalType": "bytes32[]"
      },
      {
        "name": "rawGuardian",
        "type": "bytes",
        "internalType": "bytes"
      },
      {
        "name": "guardianSignature",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "name": "recoveryId",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setDelayPeriod",
    "inputs": [
      {
        "name": "newDelay",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGuardian",
    "inputs": [
      {
        "name": "newGuardianHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "walletNonce",
    "inputs": [
      {
        "name": "wallet",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "_nonce",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  }
];