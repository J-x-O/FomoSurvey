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

    let imageIndex = 0;
    let images = ["68e263319ba7678ba637fb42551ea6b5.jpg", "20240121_012351.jpg", "20240207_184348.jpg", "1708431542271.jpg",
        "AB_05161.JPG", "dog-smile.gif", "IMG20240424142100.jpg", "IMG-20240421-WA0024.png", "IMG_9281.webp", "IMG_20240424_110638.jpg",
        "PXL_20231206_111032019.jpg", "PXL_20231216_133002986.jpg", "PXL_20240301_160018381.jpg", "Screenshot_20240302_095939_WhatsApp.png",
        "sleepy-sleepy-cat.gif", "snapinsta_7.jpg", "this-cat-i-have-hired-this-cat-to-stare-at-you.gif"];
</script>

<LocalizedStep locked={true} bind:active buttonBack="hidden" buttonComplete="hidden">
    <div slot="header"> {$_('finalize.title')} </div>
    {#if !finished}
        <p>{@html $_('finalize.upload')}</p>
        <ProgressBar bind:value={progress} min={0} max={videos.length} />
    {:else}
        <p>{@html $_('finalize.finished')}</p>
        <p>{$_('finalize.thanks')}</p>
        <div class="flex flex-col items-center w-fit mx-auto space-y-2">
            <img src={"eyebleach/" + images[imageIndex]} alt="Random cat" class="h-[calc(100vh-24rem)] object-contain rounded-lg"/>
            <button class="btn variant-filled w-fit" on:click={() => imageIndex = (imageIndex + 1) % images.length}>
                {$_('finalize.next')}
            </button>
        </div>
    {/if}

</LocalizedStep>