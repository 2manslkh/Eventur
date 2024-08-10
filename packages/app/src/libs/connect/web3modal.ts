import { createWeb3Modal } from '@web3modal/wagmi';

import { PUBLIC_WALLETCONNECT_PROJECT_ID } from '$env/static/public';
import { wagmiConfig } from '$libs/wagmi';

const projectId = PUBLIC_WALLETCONNECT_PROJECT_ID;
const chainImages = {};

export const web3modal = createWeb3Modal({
  wagmiConfig: wagmiConfig,
  projectId,
  featuredWalletIds: [],
  allowUnsupportedChain: true,
  excludeWalletIds: ['c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'],
  // chains,
  chainImages,
  themeVariables: {
    '--w3m-color-mix': 'var(--neutral-background)',
    '--w3m-color-mix-strength': 20,
    '--w3m-font-family': '"Coinbase Sans", sans-serif',
    '--w3m-border-radius-master': '9999px',
    '--w3m-accent': 'var(--primary-brand)',
  },
  themeMode: (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark',
});
