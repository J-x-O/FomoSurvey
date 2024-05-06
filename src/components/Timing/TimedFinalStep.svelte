<script lang="ts">
    import type {Writable} from "svelte/store";
    import type {State} from "$lib/interfaces";
    import {getContext} from "svelte";

    export let state: Writable<State> = getContext("timeState");
</script>

{#if $state.total === $state.current}
    <slot />
{/if}