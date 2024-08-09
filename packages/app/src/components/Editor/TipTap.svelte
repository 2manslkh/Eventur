<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import Heading from '@tiptap/extension-heading';
  import StarterKit from '@tiptap/starter-kit';

  let element: HTMLElement;
  export let editor: Editor;

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

<div class="bg-white text-left p-2" bind:this={element} />

<style>
  button.active {
    background: black;
    color: white;
  }
</style>
