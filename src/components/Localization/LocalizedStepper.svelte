<script>
    import { _ } from "$lib/language";
    import {Stepper} from "@skeletonlabs/skeleton";
</script>

<Stepper stepTerm={$_('stepper.step')}>
    <slot />
</Stepper>