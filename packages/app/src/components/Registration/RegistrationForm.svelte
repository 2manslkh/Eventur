<script lang="ts">
  import { registerAttendee } from '../../stores/attendees';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { getEventId } from '$libs/util/getEventId';
  import type { RSVPStatus } from '$types';
  import { getCurrentAddressOrNull } from '$libs/wagmi';

  // ... other imports ...

  let eventId = $derived(getEventId($page.params));

  const handleSubmit = (rsvpStatus: RSVPStatus) => {
    const address = getCurrentAddressOrNull();

    if (!address) {
      throw new Error('No wallet address found. Please connect your wallet.');
    }

    registerAttendee({ address, eventId, rsvpStatus });
    goto(`/events/${eventId}`);
  };
</script>

<div class="flex justify-between gap-4">
  <button
    type="submit"
    on:click={() => handleSubmit('yes')}
    class="btn-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >RSVP Yes</button>
  <button
    type="submit"
    on:click={() => handleSubmit('no')}
    class="btn-block bg-pink-100 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >RSVP No</button>
</div>
