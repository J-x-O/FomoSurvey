<script>
import {Step} from "@skeletonlabs/skeleton";
import { _ } from "$lib/language";
</script>

<Step>
    <svelte:fragment slot="header"> Setup </svelte:fragment>

    <p> {$_('setup.greeting')} </p>
    <p> {$_('setup.camera')} </p>
</Step>