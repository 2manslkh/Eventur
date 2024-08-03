<script lang="ts">
  import { wagmiConfig } from '$libs/wagmi';
  import { onMount } from 'svelte';
  import { reconnect } from '@wagmi/core';

  onMount(() => {
    reconnect(wagmiConfig);
  });
</script>
