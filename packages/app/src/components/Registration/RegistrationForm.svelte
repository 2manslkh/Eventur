<script lang="ts">
  import { registerAttendee } from '../../stores/attendees';
  import { page } from '$app/stores';
  import { getEventId } from '$libs/util/getEventId';
  import type { RSVPStatus } from '$types';
  import { getCurrentAddressOrNull } from '$libs/wagmi';

  // ... other imports ...

  let eventId = $derived(getEventId($page.params));

  let isLoading: boolean = $state(false);

  const handleSubmit = async (rsvpStatus: RSVPStatus) => {
    const address = getCurrentAddressOrNull();
    isLoading = true;
    try {
      if (!address) {
        throw new Error('No wallet address found. Please connect your wallet.');
      }

      await registerAttendee({ address, rsvpStatus }, eventId);
    } catch {}
    isLoading = false;
  };
</script>

<div class="flex justify-between gap-4">
  <button
    type="submit"
    onclick={() => handleSubmit('yes')}
    class="f-center btn-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    {#if isLoading}
      <div class="loading loading-spinner"></div>
    {:else}
      RSVP Yes
    {/if}
  </button>
  <button
    type="submit"
    onclick={() => handleSubmit('no')}
    class=" f-center btn-block bg-pink-100 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    {#if isLoading}
      <div class="loading loading-spinner"></div>
    {:else}
      RSVP No
    {/if}
  </button>
</div>
