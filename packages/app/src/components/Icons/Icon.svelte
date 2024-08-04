<script lang="ts" context="module">
  export type IconType = 'location';
</script>

<script lang="ts">
  export let type: IconType;
  export let size = 20; // Default size
  export let width: number = size; // You can now pass width and height as props, or they will default to size
  export let height: number = size;
  export let fillClass = 'fill-primary-icon';

  // Fixed viewBox
  const minX = 0;
  const minY = 0;
  export let vWidth = 20;
  export let vHeight = 20;
  const viewBox = `${minX} ${minY} ${vWidth} ${vHeight}`;
</script>

<svg {width} {height} class={$$props['class']} {viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
  {#if type === 'location'}
    <g
      class={fillClass}
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      ><path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854"></path><path
        d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path
      ></g>
  {/if}
</svg>
