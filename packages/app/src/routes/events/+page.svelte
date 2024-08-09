<script>
  import TipTap from '$components/Editor/TipTap.svelte';
  import { Timeline } from '$components/Timeline';
  import { addEventSchema } from '$libs/eas/schema';
  import { events } from '$stores';
</script>

<div class="container max-w-screen-md">
  <div class="flex w-full justify-between items-center">
    <h1 class="text-2xl font-bold mb-4">Events</h1>
    <a
      href="/events/new"
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >+ Event</a>
  </div>
  <Timeline events={$events} date={new Date()} />
  <button class="btn" on:click={addEventSchema}> Add Schema </button>
  <!-- <EventList /> -->
  <TipTap></TipTap>

  <button class="btn" on:click={addEventSchema}> Export TipTap </button>
</div>
