<script lang="ts">
    import {Step} from "@skeletonlabs/skeleton";
    import {_} from "$lib/language";
    import type {Writable} from "svelte/store";
    import type {StepperState} from "@skeletonlabs/skeleton/dist/components/Stepper/types";
    import {getContext} from "svelte";
    export let state: Writable<StepperState> | undefined = getContext("state");
    export const index = $state.total;
    export let active: boolean = false;
    $: active = $state?.current === index;
    export let locked: boolean = false;
</script>

<Step buttonNextLabel={$_('stepper.next')}
      buttonBackLabel={$_('stepper.back')}
      buttonCompleteLabel={$_('stepper.complete')} locker={false} {state} {...$$restProps}>
    <slot name="header" slot="header"/>
    <slot />
</Step>