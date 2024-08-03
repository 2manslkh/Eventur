<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  import CloseIcon from '../Icons/CloseIcon.svelte';
  import { generateBlockExplorerUrl } from '$libs/util/blockExplorer';

  const dispatch = createEventDispatcher();

  export let type: 'success' | 'error' | 'info' | 'copy' | 'sad' | undefined = 'error';
  export let dismissible: boolean | undefined = true;
  export let txnHash: string | undefined = '';
  export let message: string | undefined = '';

  const TitleMapping: { [key: string]: string } = {
    success: 'Transaction Confirmed!',
    error: 'Transaction Failed!',
    info: 'Transaction Happening!',
    copy: 'CA Copied!',
    sad: ':(',
  };
</script>

<article class="{type} " role="alert" transition:fade>
  <div class="content body-regular text-black">
    <div class="section body-regular text-black">
      {#if type}
        <p class="title">{TitleMapping[type]}</p>
      {/if}
      <p class="text">{message}</p>
    </div>

    {#if txnHash}
      <a class="text explorer-url" href={generateBlockExplorerUrl(txnHash)} target="_blank">View on Cronos Explorer</a>
    {/if}
  </div>

  {#if dismissible}
    <button class="close text-black" on:click={() => dispatch('dismiss')}>
      <CloseIcon width="0.8em" />
    </button>
  {/if}
</article>

<style>
  article {
    max-width: 500px;
    width: fit-content;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.08);
  }
  .error,
  .sad {
    background: white;
  }
  .success {
    background: white;
  }

  .copy {
    background: white;
  }
  .info {
    background: SkyBlue;
  }

  .title {
    color: black;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    margin: 0;
  }

  .text {
    color: black;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 19.2px */
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .explorer-url {
    color: #0989ff;
    text-decoration-line: underline;
  }

  button {
    color: white;
    background: transparent;
    border: 0 none;
    padding: 0;
    line-height: 1;
    font-size: 1rem;
  }
</style>
