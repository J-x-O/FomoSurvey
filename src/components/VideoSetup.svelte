<script>
    import LocalizedStep from "./LocalizedStep.svelte";
    import {_} from "$lib/language";
    import {stream, requestCameraAccess} from "$lib/cameraStore";
</script>

<LocalizedStep locked={$stream == null}>
    <svelte:fragment slot="header"> {$_('setup.title')} </svelte:fragment>

    <p> {$_('setup.greeting')} </p>
    <p> {$_('setup.camera')} </p>

    <button class="button" on:click={requestCameraAccess}>
        <p> {$_('setup.button')} </p>
    </button>
</LocalizedStep>