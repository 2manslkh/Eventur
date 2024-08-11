<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import attendeesStore from '$stores/attendees';
  import type { Attendee } from '$types';
  import { page } from '$app/stores';
  import { getEventId } from '$libs/util/getEventId';
  import { shortenAddress } from '$libs/util/shortenAddress';

  let attendees: Attendee[] = [];
  let eventId: number;
  $: eventId = getEventId($page.params);

  onMount(() => {
    attendees = get(attendeesStore).filter((a) => a.eventId === eventId);
  });

  attendeesStore.subscribe((value) => {
    attendees = value.filter((a) => a.eventId === eventId);
  });
</script>

<div class="flex flex-col justify-start items-start gap-4 h-full">
  <h1 class="text-2xl font-bold">Attendees ({attendees.length})</h1>
  <div class="max-w-lg overflow-x-scroll h-80 w-full">
    <ul>
      {#each attendees as attendee}
        <li class="mb-1 px-4 py-2 bg-primary-background-elevated rounded shadow-md w-full">
          <p>{shortenAddress(attendee.address)}</p>
          <p><strong>RSVP Status:</strong> {attendee.rsvpStatus}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
