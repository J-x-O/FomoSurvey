<script>
    import {RadioGroup, RadioItem} from "@skeletonlabs/skeleton";

    export let points = 7;
    export let value = (points - 1) / 2 + 1;
</script>

<RadioGroup class="w-96 {$$props.class ?? ''}">
    {#each Array(points) as _, i}
        <RadioItem bind:group={value} name={"" + (i + 1)} value={i + 1}>{i + 1}</RadioItem>
    {/each}
</RadioGroup>