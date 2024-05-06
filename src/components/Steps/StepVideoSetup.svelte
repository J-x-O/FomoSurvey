<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import {_} from "$lib/language";
    import {requestCameraAccess, getStream} from "$lib/cameraStore";
    import TextToggle from "../Survey/TextToggle.svelte";

    $: if(video) {
        video.srcObject = $stream;
        video.play();
    }

    let stream = getStream();
    let video: HTMLVideoElement;
    let checked = false;
</script>

<LocalizedStep locked={$stream == null || !checked}>
    <div slot="header"> {$_('setup.title')} </div>

    <p> {$_('setup.camera')} </p>

    <button class="btn" on:click={requestCameraAccess}>
        {$_('setup.button')}
    </button>

    {#if $stream != null}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video bind:this={video} class="w-full max-h-72 object-left"/>
        <p> {$_('setup.success')} </p>
        <TextToggle name="cameraQuality" text={$_('setup.confirm')} bind:checked={checked}/>
    {/if}
</LocalizedStep>