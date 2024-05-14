<script lang="ts">
    import NumbersGroup from "../NumbersGroup.svelte";
    import {hasContext} from "svelte";

    export let points = 7;
    export let value = (points - 1) / 2 + 1;
    export let preLabel: string = "";
    export let postLabel: string = "";
    let table: boolean = hasContext("table") || false;
</script>

<div class="{table ? 'table-row' : 'flex flex-row'} justify-between items-center space-x-1 {$$props.class}">
    {#if preLabel}
        <div class="{table ? 'table-cell' : ''} py-1 px-4 rounded-token variant-filled-surface">{preLabel}</div>
        <div class="{table ? 'table-cell' : 'flex-grow'} h-1 rounded-token variant-filled-surface"> </div>
    {/if}
    <div class={table ? 'table-cell' : ''}>
        <NumbersGroup  bind:value {points} />
    </div>
    {#if postLabel}
        <div class="{table ? 'table-cell' : 'flex-grow'} h-1 rounded-token variant-filled-surface"> </div>
        <div class="{table ? 'table-cell' : ''} py-1 px-4 rounded-token variant-filled-surface">{postLabel}</div>
    {/if}
</div>


