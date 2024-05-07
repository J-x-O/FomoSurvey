<script lang="ts">
    import { focusTrap } from '@skeletonlabs/skeleton';
    import StepVideoSetup from "../components/Steps/StepVideoSetup.svelte";
    import LocalizedStepper from "../components/Localization/LocalizedStepper.svelte";
    import StepGreeting from "../components/Steps/StepGreeting.svelte";
    import StepVideoReaction from "../components/Steps/StepVideoReaction.svelte";
    import {_} from "$lib/language";
    import StepCognitiveBias from "../components/Steps/StepCognitiveBias.svelte";
    import StepTesting from "../components/Steps/StepTesting.svelte";

    let value: number = 0;
    let isFocused: boolean = true;
</script>

<form use:focusTrap={isFocused} class="card p-4 flex flex-col space-y-2.5">

    <LocalizedStepper>
        <StepTesting />
        <StepGreeting />
        <StepCognitiveBias />
        <StepVideoSetup />
        <StepVideoReaction header={$_("reaction.title") + " 1/1"} videoPath="videos/placeholder.mp4"/>
    </LocalizedStepper>
</form>
