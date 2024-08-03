<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import attendeesStore from '$stores/attendees';
  import type { Attendee } from '$types';
  import { page } from '$app/stores';
  import { getEventId } from '$libs/util/getEventId';

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

<div class="flex flex-col gap-4 h-full">
  <h1 class="text-2xl font-bold mb-4">Attendees</h1>
  <div class="p-4 max-w-lg mx-auto overflow-x-scroll h-80">
    <ul>
      {#each attendees as attendee}
        <li class="mb-4 p-4 bg-white rounded shadow-md">
          <p><strong>Address:</strong> {attendee.address}</p>
          <p><strong>RSVP Status:</strong> {attendee.rsvpStatus}</p>
        </li>
      {/each}
    </ul>
  </div>
</div>
