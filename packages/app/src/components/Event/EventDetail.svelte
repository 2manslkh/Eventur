<script lang="ts">
  import type { Event } from '$types';
  import { getEventId } from '$libs/util/getEventId';
  import { page } from '$app/stores';
  import { getEvent } from '$libs/eas';
  import { RegistrationForm } from '$components/Registration';
  import { Icon } from '$components/Icons';

  let event: Event | undefined;
  let eventId = $derived(getEventId($page.params));

  event = getEvent(eventId);
</script>

{#if event}
  <div class="flex flex-col gap-2 max-w-3xl mx-auto text-black p-2 rounded-lg">
    <div class="flex items-center justify-between">
      <h1 class="text-4xl font-bold">{event.title}</h1>
    </div>

    <!--  Date -->
    <div class="flex flex-col">
      <div class="flex gap-4">
        <div
          class="flex flex-col items-center justify-center bg-grey-700 rounded-lg border border-grey-700 size-[40px] my-[2px]">
          <div class="text-[8px]/[8px] text-white">
            {new Date(event.startTime).toLocaleString('default', { month: 'short' })}
          </div>
          <div class="body-bold text-[12px]/[12px] text-white">{new Date(event.startTime).getDate()}</div>
        </div>

        <div>
          <div>
            {new Date(event.startTime).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          {new Date(event.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
          {#if event.endTime && !isNaN(new Date(event.endTime).getTime())}
            - {new Date(event.endTime).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            })}
          {/if}
        </div>
      </div>

      <!-- Location -->
      <div class="flex gap-4 items-center">
        <div
          class="flex flex-col items-center justify-center bg-grey-700 rounded-lg border border-grey-700 size-[40px] my-[2px]">
          <Icon type="location" class="size-[20px] text-white" vHeight={16} vWidth={16}></Icon>
        </div>
        <div>
          {#if event.location}
            <div>{event.location}</div>
          {:else}
            <div>Location not specified</div>
          {/if}
        </div>
      </div>
    </div>

    <div class="bg-white p-4 rounded-lg mb-6">
      <h2 class="text-xl font-semibold mb-2">Registration</h2>
      <p>You are invited</p>
      <p class="text-sm text-grey-300">We'd love to have you join us.</p>

      <RegistrationForm />
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2">About Event</h2>
      <div class="divide-y divide-grey-700"></div>
      <p>{event.description}</p>
    </div>
  </div>
{:else}
  <p class="text-center p-4">Event not found.</p>
{/if}
