<script lang="ts">
    import {Step} from "@skeletonlabs/skeleton";
    import {_} from "$lib/language";
    import type {Writable} from "svelte/store";
    import type {StepperState} from "@skeletonlabs/skeleton/dist/components/Stepper/types";

    export let state: Writable<StepperState> | undefined;
    export let locked: boolean = false;
</script>

<Step buttonNextLabel={$_('stepper.next')}
      buttonBackLabel={$_('stepper.back')}
      buttonCompleteLabel={$_('stepper.complete')} {locked} bind:state={state} {...$$restProps}>
    <slot name="header" slot="header"/>
    <slot />
</Step>