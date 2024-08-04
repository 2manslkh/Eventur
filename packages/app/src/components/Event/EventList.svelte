<script lang="ts">
  import type { Event } from '$types';

  let events: Event[] = [];
</script>

<div class="p-4 max-w-lg mx-auto">
  {#if events.length === 0}
    <p class="text-center text-gray-500">No Events :(</p>
  {:else}
    <ul>
      {#each events as event}
        <li class="mb-4 p-4 bg-white rounded shadow-md">
          <a href={`/events/${event.id}`} class="text-blue-500">{event.title}</a>
          <p>{event.startTime}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
          <p>Capacity: {event.capacity}</p>
        </li>
      {/each}
    </ul>
  {/if}
</div>
