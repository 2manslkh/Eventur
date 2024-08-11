<script lang="ts">
  import type { Attendee } from '$types';
  import { page } from '$app/stores';
  import { getEventId } from '$libs/util/getEventId';
  import { shortenAddress } from '$libs/util/shortenAddress';
  import { onMount } from 'svelte';
  import { getRSVPs } from '$libs/eas';

  let eventId: string;
  $: eventId = getEventId($page.params);
  let eventAttendees: Attendee[];
  $: eventAttendees = [];

  onMount(async () => {
    eventAttendees = await getRSVPs(eventId);
    console.log('🚀 | onMount | eventAttendees:', eventAttendees);
  });
</script>

<div class="flex flex-col justify-start items-start gap-4 h-full">
  <h1 class="text-2xl font-bold">Attendees ({eventAttendees.length})</h1>
  <div class="max-w-lg overflow-x-scroll h-80 w-full">
    <ul>
      {#each eventAttendees as attendee}
        <li class="mb-1 px-4 py-2 bg-primary-background-elevated rounded shadow-md w-full">
          <p>{shortenAddress(attendee.address)}</p>
          <p><strong>RSVP Status:</strong> {attendee.rsvpStatus}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
