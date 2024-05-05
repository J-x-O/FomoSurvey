<script lang="ts">
    import {AppBar, Step, Stepper} from "@skeletonlabs/skeleton";
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import { focusTrap } from '@skeletonlabs/skeleton';
    import StepVideoSetup from "../components/StepVideoSetup.svelte";
    import LocalizedStepper from "../components/LocalizedStepper.svelte";
    import StepGreeting from "../components/StepGreeting.svelte";
    import StepVideoReaction from "../components/StepVideoReaction.svelte";

    let value: number = 0;
    let isFocused: boolean = true;
</script>

<form use:focusTrap={isFocused} class="card p-4 flex flex-col space-y-2.5">

    <LocalizedStepper>
        <StepGreeting />
        <StepVideoSetup />
        <StepVideoReaction />
    </LocalizedStepper>
</form>
