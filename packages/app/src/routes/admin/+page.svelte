<script>
  import { addEventSchema, addRSVPSchema } from '$libs/eas/schema';
</script>

<div class="container max-w-screen-md flex flex-col gap-4">
  <button class="btn" on:click={addEventSchema}> Add Event Schema </button>
  <button class="btn" on:click={addRSVPSchema}> Add RSVP Schema </button>
</div>
