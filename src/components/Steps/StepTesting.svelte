<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import {_} from "$lib/language";
    import LocalizedSemanticDifferentialScale from "../Localization/LocalizedSemDiffScale.svelte";
    import SemanticDifferentialTableLayout from "../Survey/SemanticDifferential/Layout/SemDiffLayout.svelte";
    import SemDiffLayout from "../Survey/SemanticDifferential/Layout/SemDiffLayout.svelte";
    import LocalizedSemDiffLayoutScale from "../Localization/LocalizedSemDiffLayoutScale.svelte";
    import Timer from "../Timing/Timer.svelte";
    import {onMount} from "svelte";
    import {finalizeRecording, requestCameraAccess, startRecording} from "$lib/cameraStore";
    import {uploadVideoBlob} from "$lib/upload";

    let timer: Timer;
    let blob: Blob;
    let result: string;

    onMount(async() => {
        await requestCameraAccess();
        startRecording();
        timer.startTimer(3000);
    });

    async function finished() {
        blob = await finalizeRecording();
        let response = await uploadVideoBlob("testing", "bruh", blob);
        result = await response.text();
    }
</script>

<LocalizedStep>
    <Timer bind:this={timer} on:finished={finished}/>
    {#if blob}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video class="w-full" src={URL.createObjectURL(blob)} controls/>
    {/if}
    {result}
</LocalizedStep>