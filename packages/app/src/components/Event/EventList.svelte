<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import eventsStore from '../../stores/events';
  import type { Event } from '$types';

  let events: Event[] = [];

  onMount(() => {
    events = get(eventsStore);
  });
  eventsStore.subscribe((value) => {
    events = value;
  });
</script>

<div class="p-4 max-w-lg mx-auto">
  <ul>
    {#each events as event}
      <li class="mb-4 p-4 bg-white rounded shadow-md">
        <a href={`/events/${event.id}`} class="text-blue-500">{event.name}</a>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <p>Capacity: {event.capacity}</p>
      </li>
    {/each}
  </ul>
</div>
