<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import {_} from "$lib/language";
    import {ProgressBar} from "@skeletonlabs/skeleton";
    import StepDemographic from "./StepDemographic.svelte";
    import StepCognitiveBias from "./StepCognitiveBias.svelte";
    import StepVideoReaction from "./StepVideoReaction.svelte";
    import {uploadResults, uploadVideoBlob} from "$lib/upload";

    export let demographic: StepDemographic
    export let bias: StepCognitiveBias
    export let videos: StepVideoReaction[]

    let participantId: string = crypto.randomUUID();

    let progress = 0;
    let finished = false;
    let active: boolean = false;
    $: if (active) startUpload();

    async function startUpload() {
        progress = 0;
        for (let video of videos) {
            await video.uploadVideo(participantId);
            progress++;
        }
        await uploadResults(participantId, {
            demographic: demographic.extractData(),
            bias: bias.extractData(),
            videos: videos.map(v => v.extractData())
        });
        finished = true;
    }
</script>

<LocalizedStep locked={true} bind:active buttonBack="hidden" buttonComplete="hidden">
    <div slot="header"> {$_('finalize.title')} </div>
    {#if !finished}
        <p>{@html $_('finalize.upload')}</p>
        <ProgressBar bind:value={progress} min={0} max={videos.length} />
    {:else}
        <p>{@html $_('finalize.finished')}</p>
        <p>{$_('finalize.thanks')}</p>
    {/if}
</LocalizedStep>