<script lang="ts">
    export let isRecording: boolean;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 48" class="h-5" >
    <path class={isRecording ? "fill-primary-500 animate-pulse" : "fill-white opacity-50"}
          d="M 72.9 0.4 L 56 11.3 V 8 c 0 -4.4 -3.6 -8 -8 -8 H 8 c -4.4 0 -8 3.6 -8 8 v 32 c 0 4.4 3.6 8 8 8 h 40 c 4.4 0 8 -3.6 8 -8 v -3.3 l 16.9 10.9 c 1.9 1 3.1 -0.7 3.1 -1.7 V 2 C 76 1 74.9 -0.8 72.9 0.4 z z z"/>
</svg>