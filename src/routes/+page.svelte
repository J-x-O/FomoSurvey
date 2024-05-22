<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
    import StepVideoSetup from "../components/Steps/StepVideoSetup.svelte";
    import LocalizedStepper from "../components/Localization/LocalizedStepper.svelte";
    import StepGreeting from "../components/Steps/StepGreeting.svelte";
    import StepVideoReaction from "../components/Steps/StepVideoReaction.svelte";
    import StepCognitiveBias from "../components/Steps/StepCognitiveBias.svelte";
    import StepDemographic from "../components/Steps/StepDemographic.svelte";
    import StepFinalize from "../components/Steps/StepFinalize.svelte";
    import StepsRandomizedReaction from "../components/Steps/StepsRandomizedReaction.svelte";

    let isFocused: boolean = true;

    let demographic: StepDemographic;
    let bias: StepCognitiveBias;
    let videos: StepVideoReaction[] = [];
</script>

<form use:focusTrap={isFocused} class="card p-4 flex flex-col space-y-2.5">
    <LocalizedStepper>
        <StepGreeting />
        <StepDemographic bind:this={demographic}/>
        <StepCognitiveBias bind:this={bias}/>
        <StepVideoSetup />
        <StepsRandomizedReaction bind:allSteps={videos} />
        <StepFinalize {bias} {demographic} {videos}/>
    </LocalizedStepper>
</form>
