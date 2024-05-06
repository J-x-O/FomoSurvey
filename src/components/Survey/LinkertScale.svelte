<script lang="ts">
    import {RadioGroup, RadioItem} from "@skeletonlabs/skeleton";

    export let value = 0;
    export let question: string;
    export let preLabel: string = "";
    export let postLabel: string = "";
</script>

<div>
    <div class="mb-1"> {question} </div>
    <div class="flex flex-row justify-between items-center px-8">
        {#if preLabel}
            <div>{preLabel}</div>
        {/if}
        <RadioGroup class="w-96">
            <RadioItem bind:group={value} name="0" value={0}>0</RadioItem>
            <RadioItem bind:group={value} name="1" value={1}>1</RadioItem>
            <RadioItem bind:group={value} name="2" value={2}>2</RadioItem>
            <RadioItem bind:group={value} name="3" value={3}>3</RadioItem>
            <RadioItem bind:group={value} name="4" value={4}>4</RadioItem>
        </RadioGroup>
        {#if postLabel}
            <div>{postLabel}</div>
        {/if}
    </div>
</div>

