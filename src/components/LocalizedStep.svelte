<script lang="ts">
    import {Step} from "@skeletonlabs/skeleton";
    import {_} from "$lib/language";

    export let locked: boolean | undefined;
</script>

<Step buttonNextLabel={$_('stepper.next')}
      buttonBackLabel={$_('stepper.back')}
      buttonCompleteLabel={$_('stepper.complete')} {locked} $$props>
    <slot name="header" slot="header"/>
    <slot />
</Step>