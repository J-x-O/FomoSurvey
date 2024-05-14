<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import TimedSteper from "../Timing/TimedSteper.svelte";
    import TimedStep from "../Timing/TimedStep.svelte";
    import TimedFinalStep from "../Timing/TimedFinalStep.svelte";
    import {_} from "$lib/language";
    import SemDiffLayout from "../Survey/SemanticDifferential/Layout/SemDiffLayout.svelte";
    import LocalizedSemDiffLayoutScale from "../Localization/LocalizedSemDiffLayoutScale.svelte";
    import {finalizeRecording, startRecording} from "$lib/cameraStore";
    import {onMount} from "svelte";
    import {waitForCondition} from "$lib/utility";
    import type {VideoReaction} from "$lib/dataFormating";
    import {uploadVideoBlob} from "$lib/upload";

    export let header: string;
    export let id: string;
    export let videoPath: string;
    let videoPreload: string = '';
    export let valance: number = 4;
    export let arousal: number = 4;
    export let intensity: number = 4;
    export let category: string = "neutral";
    export let blob: Blob|null = null;

    let timer: TimedSteper;
    let finished: boolean;

    export let isActive: boolean = false;
    $: handleActiveChanged(timer, isActive);

    onMount(async () => {
        const res = await fetch(videoPath);
        const blob = await res.blob();
        videoPreload = URL.createObjectURL(blob);
    });

    async function handleActiveChanged(timer: TimedSteper, active: boolean) {
        if (!timer) return;
        if (active) {
            await waitForCondition(() => videoPreload != '');
            timer.startTimer();
            startRecording();
        }
        else timer.stopTimer();
    }
    async function handleFinished() {
        blob = await finalizeRecording();
    }

    export function uploadVideo(participant: string) {
        if (!blob) throw new Error("No video to upload");
        return uploadVideoBlob(participant, id, blob);
    }

    export function extractData(): VideoReaction {
        return {
            videoID: id,
            videoFileName: videoPath.slice(videoPath.lastIndexOf('/') + 1),
            valance: valance,
            arousal: arousal,
            intensity: intensity,
            category: category,
        }
    }

    let duration: number = 5;
    $: timingMs = [3000, Math.max(duration * 1000, 5000)];
</script>

<LocalizedStep bind:active={isActive} locked={!finished} buttonBack="invisible">
    <div slot="header"> {header} </div>
    <TimedSteper {timingMs} bind:this={timer} bind:finished={finished} on:finished={handleFinished}>
        <TimedStep>
            <div class="w-fit mx-auto variant-filled rounded-lg relative">
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl"> {$_("reaction.loading")} </div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class="invisible max-h-96" src={videoPreload} bind:duration/>
            </div>
        </TimedStep>
        <TimedStep>
            <div class="w-fit mx-auto max-h-96">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class="max-h-96 rounded-lg" src={videoPreload} autoplay loop/>
            </div>
        </TimedStep>
        <TimedFinalStep>
            <SemDiffLayout>
                <LocalizedSemDiffLayoutScale prefix="reaction.valence" bind:value={valance}/>
                <LocalizedSemDiffLayoutScale prefix="reaction.arousal" bind:value={arousal}/>
                <LocalizedSemDiffLayoutScale prefix="reaction.intensity" bind:value={intensity}/>
            </SemDiffLayout>
            <label class="label">
                <span> {$_("reaction.class_question")} </span>
                <select class="select" bind:value={category}>
                    <option value="neutral"> {$_("emotions.neutral")} </option>
                    <option value="fear"> {$_("emotions.fear")} </option>
                    <option value="anger"> {$_("emotions.anger")} </option>
                    <option value="disgust"> {$_("emotions.disgust")} </option>
                    <option value="happiness"> {$_("emotions.happiness")} </option>
                    <option value="sadness"> {$_("emotions.sadness")} </option>
                    <option value="surprise"> {$_("emotions.surprise")} </option>
                </select>
            </label>
        </TimedFinalStep>
    </TimedSteper>
</LocalizedStep>