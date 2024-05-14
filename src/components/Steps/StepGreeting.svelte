<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import {_} from "$lib/language.js";
    import {SlideToggle} from "@skeletonlabs/skeleton";
    import TextToggle from "../Survey/TextToggle.svelte";
    import RecordIndicator from "../Header/RecordIndicator.svelte";

    let comfy: boolean = false;
    let camera: boolean = false;
    let emotional: boolean = false;
</script>

<LocalizedStep locked={!comfy || !camera || !emotional}>
    <p slot="header"> {$_('greeting.title')} </p>
    <p> {@html $_('greeting.start')} </p>

    <p> {$_('greeting.comfy')} </p>
    <TextToggle name="ComfyButton" bind:checked={comfy} text={$_('greeting.comfy_button')} />

    <p> {$_('greeting.camera')} </p>
    <div class="flex flex-row items-center">
        <div class="pr-2"> {$_('greeting.camera_active')}: </div>
        <RecordIndicator isRecording={true}/>
        <div class="pl-4 pr-2"> {$_('greeting.camera_inactive')}: </div>
        <RecordIndicator isRecording={false}/>
    </div>
    <TextToggle name="CameraButton" bind:checked={camera} text={$_('greeting.camera_button')} />

    <p> {$_('greeting.emotion')} </p>
    <TextToggle name="EmotionButton" bind:checked={emotional} text={$_('greeting.emotion_button')} />
</LocalizedStep>