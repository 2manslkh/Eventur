<script>
  import { EventDetail } from '$components/Event';
  import { AttendeeList, RegistrationForm } from '$components/Registration';

  // Context
  import { page } from '$app/stores';
  import FrameMetadata from '$components/FarcasterFrame/FrameMetadata.svelte';
  import { mockFrameMeta } from '$libs/frames';
</script>

<FrameMetadata title={'Frame Event'} metadata={mockFrameMeta} baseUrl={$page.url} showPreview={true} />

<div class="flex gap-4">
  <div class="flex flex-col gap-4">
    <EventDetail />
    <RegistrationForm />
  </div>
  <AttendeeList />
</div>
