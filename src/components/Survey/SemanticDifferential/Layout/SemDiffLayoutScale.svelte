<script lang="ts">
    import NumbersGroup from "../../NumbersGroup.svelte";
    import {hasContext} from "svelte";

    export let points = 7;
    export let value = (points - 1) / 2 + 1;
    export let preLabel: string = "";
    export let postLabel: string = "";
</script>

<tr class="text-center {$$props.class ?? ''}">
    {#if preLabel}
        <td class="max-w-full whitespace-nowrap">
            <div class="h-fit py-1 px-4 rounded-token variant-filled-surface">{preLabel}</div>
        </td>
        <td class="w-1/2">
            <div class="h-1 rounded-token variant-filled-surface"> </div>
        </td>
    {/if}
    <td class="max-w-full whitespace-nowrap">
        <NumbersGroup bind:value {points} />
    </td>
    {#if postLabel}
        <td class="w-1/2">
            <div class="h-1 rounded-token variant-filled-surface"> </div>
        </td>
        <td class="max-w-full whitespace-nowrap">
            <div class="py-1 px-4 rounded-token variant-filled-surface">{postLabel}</div>
        </td>
    {/if}
</tr>


