<script lang="ts">
  import Toast from './Toast.svelte';

  import { dismissToast, toasts } from '$stores/toast';
</script>

{#if $toasts}
  <section>
    {#each $toasts as toast (toast.id)}
      <Toast
        type={toast.type}
        dismissible={toast.dismissible}
        on:dismiss={() => toast.id !== undefined && dismissToast(toast.id)}
        message={toast.message}
        txnHash={toast.txnHash}></Toast>
    {/each}
  </section>
{/if}

<style lang="postcss">
  section {
    position: fixed;
    top: 16px;
    right: 16px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    z-index: 1000;
  }
</style>
