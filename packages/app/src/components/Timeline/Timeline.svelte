<script lang="ts">
  import { groupEventsByDate } from '$libs/util/groupEventsByDate';
  import type { Event } from '$types';
  import EventCard from './EventCard.svelte';

  export let events: Event[];

  $: groupedEvents = groupEventsByDate(events) as Record<string, Event[]>;
</script>

<div class="flex flex-col w-full">
  {#if events.length === 0}
    <p class="text-center">No Events :(</p>
  {:else}
    {#each Object.entries(groupedEvents) as [eventDate, dateEvents]}
      <div class="flex w-full mb-8">
        <div class="w-24 pr-5">
          <div class="sticky top-5 text-right">
            <span class="text-2xl font-bold">
              {new Date(eventDate).getDate()}
              {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(eventDate))}
            </span>
            <span class="block text-sm text-gray-400">
              {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(eventDate))}
            </span>
          </div>
        </div>
        <div class="flex-1">
          {#each dateEvents as event}
            <EventCard {event} />
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>
