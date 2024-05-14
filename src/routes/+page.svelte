<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
    import StepVideoSetup from "../components/Steps/StepVideoSetup.svelte";
    import LocalizedStepper from "../components/Localization/LocalizedStepper.svelte";
    import StepGreeting from "../components/Steps/StepGreeting.svelte";
    import StepVideoReaction from "../components/Steps/StepVideoReaction.svelte";
    import {_} from "$lib/language";
    import StepCognitiveBias from "../components/Steps/StepCognitiveBias.svelte";
    import StepDemographic from "../components/Steps/StepDemographic.svelte";
    import StepFinalize from "../components/Steps/StepFinalize.svelte";

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
        <StepVideoReaction bind:this={videos[0]} header={$_("reaction.title") + " 1/1"}
                           id="placeholder" videoPath="videos/placeholder.mp4"/>
        <StepFinalize {bias} {demographic} {videos}/>
    </LocalizedStepper>
</form>
