<script lang="ts">
  import { Icon } from '$components/Icons';
  import { groupEventsByDate } from '$libs/util/groupEventsByDate';
  import type { Event } from '$types';
  import EventCard from './EventCard.svelte';

  export let events: Event[];
  export let date: Date;

  $: groupedEvents = groupEventsByDate(events, date) as Record<string, Event[]>;
</script>

<div class="flex flex-col w-full">
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
        {#if events.length === 0}
          <p class="text-center text-gray-500">No Events :(</p>
        {:else}
          {#each dateEvents as event}
            <EventCard {event} />
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>
