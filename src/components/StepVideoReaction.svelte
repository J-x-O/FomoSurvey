<script lang="ts">
    import LocalizedStep from "./LocalizedStep.svelte";
    import Timer from "./Timer.svelte";
    import {onMount} from "svelte";
    import type {StepperState} from "@skeletonlabs/skeleton/dist/components/Stepper/types";

    let timer: Timer;
    let finished: boolean;

    let state: StepperState;
    $: active = state?.current === state?.total;
    $: if (active) {
        timer?.startTimer(3000);
        console.log("Timer started");
    }

    function handleActiveChanged(active: boolean) {
        if (active) {
            timer?.startTimer(3000);
            console.log("Timer started");
        } else {
            timer?.stopTimer();
            console.log("Timer stopped");
        }
    }
    function handleFinished() {
        console.log("Timer finished");
    }
</script>

<LocalizedStep bind:state={state} locked={!finished} buttonBack="invisible">
    <Timer bind:this={timer} bind:finished={finished} on:finished={handleFinished}/>
</LocalizedStep>