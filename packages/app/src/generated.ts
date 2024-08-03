import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestContract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testContractAbi = [
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_user', internalType: 'address', type: 'address' }],
    name: 'getBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const testContractAddress =
  '0x1234567890123456789012345678901234567890' as const

export const testContractConfig = {
  address: testContractAddress,
  abi: testContractAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testContractAbi}__
 */
export const readTestContract = /*#__PURE__*/ createReadContract({
  abi: testContractAbi,
  address: testContractAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testContractAbi}__ and `functionName` set to `"balances"`
 */
export const readTestContractBalances = /*#__PURE__*/ createReadContract({
  abi: testContractAbi,
  address: testContractAddress,
  functionName: 'balances',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testContractAbi}__ and `functionName` set to `"getBalance"`
 */
export const readTestContractGetBalance = /*#__PURE__*/ createReadContract({
  abi: testContractAbi,
  address: testContractAddress,
  functionName: 'getBalance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testContractAbi}__
 */
export const writeTestContract = /*#__PURE__*/ createWriteContract({
  abi: testContractAbi,
  address: testContractAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testContractAbi}__ and `functionName` set to `"deposit"`
 */
export const writeTestContractDeposit = /*#__PURE__*/ createWriteContract({
  abi: testContractAbi,
  address: testContractAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testContractAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeTestContractWithdraw = /*#__PURE__*/ createWriteContract({
  abi: testContractAbi,
  address: testContractAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testContractAbi}__
 */
export const simulateTestContract = /*#__PURE__*/ createSimulateContract({
  abi: testContractAbi,
  address: testContractAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testContractAbi}__ and `functionName` set to `"deposit"`
 */
export const simulateTestContractDeposit = /*#__PURE__*/ createSimulateContract(
  {
    abi: testContractAbi,
    address: testContractAddress,
    functionName: 'deposit',
  },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testContractAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateTestContractWithdraw =
  /*#__PURE__*/ createSimulateContract({
    abi: testContractAbi,
    address: testContractAddress,
    functionName: 'withdraw',
  })
