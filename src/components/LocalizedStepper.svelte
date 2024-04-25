<script>
    import { _ } from "$lib/language";
    import {Stepper} from "@skeletonlabs/skeleton";
</script>

<Stepper stepTerm={$_('stepper.step')}
         buttonNextLabel={$_('stepper.next')}
         buttonBackLabel={$_('stepper.back')}
         buttonCompleteLabel={$_('stepper.complete')}>
    <slot />
</Stepper>