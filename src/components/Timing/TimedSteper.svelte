<script lang="ts">
    import {createEventDispatcher, setContext} from "svelte";
    import {writable} from "svelte/store";
    import Timer from "./Timer.svelte";
    const dispatch = createEventDispatcher();

    export let finished: boolean = false;
    export let timingMs: number[]|number;

    let timer: Timer;
    let state = writable({ current: 0, total: 0 });
    setContext("timeState", state);

    export function startTimer() {
        console.log("start timer");
        $state.current = 0;
        finished = false;
        startTimerInternal();
    }

    export function stopTimer() {
        console.log("stop timer");
        timer?.stopTimer();
    }

    function handleTimer() {
        $state.current = Math.min($state.total, $state.current + 1)
        if ($state.current >= $state.total) {
            finished = true;
            dispatch("finished");
            return;
        }
        startTimerInternal();
    }

    function startTimerInternal() { timer.startTimer(getTiming()); }
    function getTiming(): number { return getTimingBinding($state.current); }
    function getTimingBinding(current: number): number {
        return timingMs instanceof Array ? timingMs[current] : timingMs;
    }

</script>

{#if $state.current !== $state.total}
    <Timer on:finished={handleTimer} bind:this={timer}> </Timer>
{/if}
<slot>

</slot>