<script lang="ts">
    import {createEventDispatcher, getContext} from "svelte";
    import type {Writable} from "svelte/store";
    import type {State} from "$lib/interfaces";
    let dispatcher = createEventDispatcher();
    export let state: Writable<State> = getContext("timeState");
    const stepIndex = $state.total;
    $state.total++;
</script>

{#if stepIndex === $state.current}
    <slot />
{/if}