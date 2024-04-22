<script lang="ts">
    import {AppBar, Step, Stepper} from "@skeletonlabs/skeleton";
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import { focusTrap } from '@skeletonlabs/skeleton';
    import VideoSetup from "../components/VideoSetup.svelte";

    let value: number = 0;
    let isFocused: boolean = true;
</script>

<form use:focusTrap={isFocused} class="card p-4 flex flex-col space-y-2.5">

    <Stepper>
        <VideoSetup />
        <Step>
            <svelte:fragment slot="header"> Testing </svelte:fragment>
            <label class="label">
                <span>Label</span>
                <input class="input" type="text" placeholder="Name" />
            </label>

            <label class="label">
                <span>Label</span>
                <RadioGroup>
                    <RadioItem bind:group={value} name="0" value={0}>0</RadioItem>
                    <RadioItem bind:group={value} name="1" value={1}>1</RadioItem>
                    <RadioItem bind:group={value} name="2" value={2}>2</RadioItem>
                    <RadioItem bind:group={value} name="3" value={3}>3</RadioItem>
                    <RadioItem bind:group={value} name="4" value={4}>4</RadioItem>
                </RadioGroup>
            </label>
            <button class="btn variant-filled-primary">Submit</button>
        </Step>
    </Stepper>
</form>
