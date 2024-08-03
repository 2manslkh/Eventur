<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import eventsStore from '../../stores/events';
  import type { Event } from '$types';
  import { getEventId } from '$libs/util/getEventId';
  import { page } from '$app/stores';

  let event: Event | undefined;
  let eventId = $derived(getEventId($page.params));

  onMount(() => {
    event = get(eventsStore).find((e) => e.id === eventId);
  });

  eventsStore.subscribe((value) => {
    event = value.find((e) => e.id === eventId);
  });
</script>

{#if event}
  <div class="p-4 max-w-lg mx-auto bg-white rounded shadow-md">
    <h1 class="text-2xl font-bold mb-4">{event.name}</h1>
    <p><strong>Date:</strong> {event.date}</p>
    <p><strong>Location:</strong> {event.location}</p>
    <p><strong>Description:</strong> {event.description}</p>
    <p><strong>Capacity:</strong> {event.capacity}</p>
  </div>
{:else}
  <p class="text-center p-4">Event not found.</p>
{/if}
