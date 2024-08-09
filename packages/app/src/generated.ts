import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VIPTicket
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vipTicketAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: '_nextTokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'mintVIP',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const vipTicketAddress =
  '0x9a1295B04D04e4883cF364f99a899f2E24fb1Eb7' as const

export const vipTicketConfig = {
  address: vipTicketAddress,
  abi: vipTicketAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__
 */
export const readVipTicket = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"_nextTokenId"`
 */
export const readVipTicketNextTokenId = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: '_nextTokenId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readVipTicketBalanceOf = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"getApproved"`
 */
export const readVipTicketGetApproved = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readVipTicketIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"name"`
 */
export const readVipTicketName = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readVipTicketOwnerOf = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readVipTicketSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"symbol"`
 */
export const readVipTicketSymbol = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readVipTicketTokenUri = /*#__PURE__*/ createReadContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vipTicketAbi}__
 */
export const writeVipTicket = /*#__PURE__*/ createWriteContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"approve"`
 */
export const writeVipTicketApprove = /*#__PURE__*/ createWriteContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"mintVIP"`
 */
export const writeVipTicketMintVip = /*#__PURE__*/ createWriteContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'mintVIP',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeVipTicketSafeTransferFrom = /*#__PURE__*/ createWriteContract(
  {
    abi: vipTicketAbi,
    address: vipTicketAddress,
    functionName: 'safeTransferFrom',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeVipTicketSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeVipTicketTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vipTicketAbi}__
 */
export const simulateVipTicket = /*#__PURE__*/ createSimulateContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"approve"`
 */
export const simulateVipTicketApprove = /*#__PURE__*/ createSimulateContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"mintVIP"`
 */
export const simulateVipTicketMintVip = /*#__PURE__*/ createSimulateContract({
  abi: vipTicketAbi,
  address: vipTicketAddress,
  functionName: 'mintVIP',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateVipTicketSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateVipTicketSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link vipTicketAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateVipTicketTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vipTicketAbi}__
 */
export const watchVipTicketEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: vipTicketAbi,
  address: vipTicketAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vipTicketAbi}__ and `eventName` set to `"Approval"`
 */
export const watchVipTicketApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vipTicketAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchVipTicketApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link vipTicketAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchVipTicketTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: vipTicketAbi,
    address: vipTicketAddress,
    eventName: 'Transfer',
  })
