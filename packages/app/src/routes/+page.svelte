<script lang="ts">
  import { Page } from '$components/Page';
</script>

<!-- Body -->
<Page>
  <section class="py-10 sm:py-16 md:py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Welcome to Event Manager</h1>
      <h2
        class="text-2xl sm:text-3xl md:text-4xl flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-8">
        Built on
        <img src={'/base-logo.svg'} class="h-8 sm:h-10 md:h-12" alt="Base logo" />
      </h2>
      <p class="text-base sm:text-lg mb-6 sm:mb-8 mt-4">Create, manage, and attend events with ease.</p>
      <a href="/events" class="btn btn-primary text-sm sm:text-base">Get Started</a>
    </div>
  </section>
  <section class="py-20 rounded-xl">
    <div class="container mx-auto px-4 space-y-8">
      <h2 class="text-4xl text-center mb-10">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Create Events</h3>
          <p>Organize events with detailed information and manage them effortlessly.</p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Attest Attendance</h3>
          <p>
            Verifiably prove that a user has attended an event. <b class="text-blue">Composable</b> with reputation systems
            on EAS
          </p>
        </div>
        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Verify Attendance</h3>
          <p>Use our system to verify attendee participation on the day of the event.</p>
        </div>
      </div>

      <h2 class="text-4xl text-center mb-10">Future Implementation</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Create Events</h3>
          <p>Organize events with detailed information and manage them effortlessly.</p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Attest Attendance</h3>
          <p>
            Verifiably prove that a user has attended an event. <b class="text-blue">Composable</b> with reputation systems
            on EAS
          </p>
        </div>
        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Verify Attendance</h3>
          <p>Use our system to verify attendee participation on the day of the event.</p>
        </div>
      </div>
    </div>
  </section>
</Page>
