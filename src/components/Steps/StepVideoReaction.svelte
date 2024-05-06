<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import TimedSteper from "../Timing/TimedSteper.svelte";
    import TimedStep from "../Timing/TimedStep.svelte";
    import TimedFinalStep from "../Timing/TimedFinalStep.svelte";
    import {_} from "$lib/language";
    import LocalizedLinkertScale from "../Localization/LocalizedLinkertScale.svelte";

    export let header: string;
    export let videoPath: string;

    let timer: TimedSteper;
    let finished: boolean;

    export let isActive: boolean = false;
    $: handleActiveChanged(timer, isActive);

    function handleActiveChanged(timer: TimedSteper, active: boolean) {
        if (active) timer?.startTimer();
        else timer?.stopTimer();
    }
    function handleFinished() {
        console.log("Timer finished");
    }

    let duration: number = 5;
    $: timingMs = [3000, Math.max(duration * 1000, 5000)];
</script>

<LocalizedStep bind:active={isActive} locked={!finished}>
    <div slot="header"> {header} </div>
    <TimedSteper {timingMs} bind:this={timer} bind:finished={finished}>
        <TimedStep>
            <div class="w-fit mx-auto variant-filled rounded-lg relative">
                <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl"> {$_("reaction.loading")} </div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class="invisible max-h-96" src={videoPath} bind:duration/>
            </div>
        </TimedStep>
        <TimedStep>
            <div class="w-fit mx-auto max-h-96">
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class="max-h-96 rounded-lg" src={videoPath} autoplay loop/>
            </div>
        </TimedStep>
        <TimedFinalStep>
            <div class="space-y-4">
                <LocalizedLinkertScale prefix="reaction.valence" />
                <LocalizedLinkertScale prefix="reaction.arousal" />
                <LocalizedLinkertScale prefix="reaction.intensity" />
                <label class="label">
                    <span> {$_("reaction.class_question")} </span>
                    <select class="select">
                        <option value="neutral"> {$_("reaction.class_neutral")} </option>
                        <option value="fear"> {$_("reaction.class_fear")} </option>
                        <option value="anger"> {$_("reaction.class_anger")} </option>
                        <option value="disgust"> {$_("reaction.class_disgust")} </option>
                        <option value="happiness"> {$_("reaction.class_happiness")} </option>
                        <option value="sadness"> {$_("reaction.class_sadness")} </option>
                        <option value="surprise"> {$_("reaction.class_surprise")} </option>
                    </select>
                </label>
            </div>
        </TimedFinalStep>
    </TimedSteper>
</LocalizedStep>