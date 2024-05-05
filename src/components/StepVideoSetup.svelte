<script lang="ts">
    import LocalizedStep from "./LocalizedStep.svelte";
    import {_} from "$lib/language";
    import {requestCameraAccess, getStream} from "$lib/cameraStore";

    $: if(video) {
        video.srcObject = $stream;
        video.play();
    }

    let stream = getStream();
    let video: HTMLVideoElement;
</script>

<LocalizedStep locked={$stream == null}>
    <svelte:fragment slot="header"> {$_('setup.title')} </svelte:fragment>

    <p> {$_('setup.camera')} </p>

    <button class="btn" on:click={requestCameraAccess}>
        {$_('setup.button')}
    </button>

    {#if $stream != null}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video bind:this={video} class="w-full max-h-72 object-left"/>
        <p> {$_('setup.success')} </p>
    {/if}
</LocalizedStep>