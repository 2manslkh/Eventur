<script lang="ts">
  import { Page } from '$components/Page';
</script>

<!-- Body -->
<Page>
  <section class="pt-10 sm:pt-16 md:pt-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Welcome to Eventur</h1>
      <h2
        class="text-2xl sm:text-3xl md:text-4xl flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-8">
        Built on
        <img src={'/base-logo.svg'} class="h-8 sm:h-10 md:h-12" alt="Base logo" />
      </h2>
      <h3 class="text-lg flex flex-col sm:flex-row items-center justify-center w-full gap-2">
        Powered by
        <div class="text-lg f-center">
          <img src={'/eas-logo.png'} class="h-8 sm:h-10 md:h-12" alt="EAS Logo" />
          Ethereum Attestation Service
        </div>
      </h3>
      <p class="text-base sm:text-lg mb-6 sm:mb-8 mt-4">Create, manage, and attend events with ease.</p>
      <a href="/events" class="btn btn-primary text-sm sm:text-base">Get Started</a>
    </div>
  </section>
  <section class="py-20 rounded-xl">
    <div class="container mx-auto px-4 space-y-8">
      <h2 class="text-4xl text-center mb-10">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Create events on-chain</h3>
          <p>Create events with a familiar and intuitive interface.</p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Register for events</h3>
          <p>Users browse and join exciting events that are available</p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Highly composable</h3>
          <p>
            Eventur is highly <b class="text-blue">composable</b> with other on-chain products
          </p>
        </div>
      </div>

      <h2 class="text-4xl text-center mb-10">Future Implementation</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Farcaster Frames</h3>
          <p>Easily share your crypto event with on Farcaster with Farcaster Frames.</p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Guest Reputation Score</h3>
          <p>
            View guest ratings via an honor system that is <b class="text-blue">on-chain.</b>
          </p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Token Gating</h3>
          <p>Token gate your events with holders of whitelisted ERC20 / ERC721 / ERC1155 tokens</p>
        </div>

        <div class="bg-primary-background-highlight p-6 rounded-lg shadow">
          <h3 class="text-2xl font-bold mb-4">Privacy Preserving Registration</h3>
          <p>Protect your identity online when registering for events</p>
        </div>
      </div>
    </div>
  </section>
</Page>
