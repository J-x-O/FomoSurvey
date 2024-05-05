<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import {ProgressBar} from "@skeletonlabs/skeleton";
    const dispatch = createEventDispatcher();

    export let finished = false;
    export let running = false;

    let value = 0;
    let start = 0;
    let interval: NodeJS.Timeout;

    export function startTimer(ms: number) {
        start = Date.now();
        finished = false;
        running = true;
        interval = setInterval(() => {
            value = (Date.now() - start) / ms * 100;
            if (value >= 100) {
                clearInterval(interval);
                finished = true;
                running = false;
                dispatch("finished");
            }
        }, 100);
    }

    export function stopTimer() {
        value = 0;
        if (interval) clearInterval(interval);
        finished = false;
        running = false;
    }
</script>

<ProgressBar class={$$props.class} bind:value={value} min={0} max={100} />