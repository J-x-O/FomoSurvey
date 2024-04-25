<script>
    import LocalizedStep from "./LocalizedStep.svelte";
    import {_} from "$lib/language.js";
</script>

<LocalizedStep>
    <p> {$_('setup.greeting')} </p>
</LocalizedStep>