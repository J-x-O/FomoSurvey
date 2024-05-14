<script lang="ts">
    import {setContext} from "svelte";
    import {writable} from "svelte/store";

    export let question: string;
    export let preLabel: string;
    export let postLabel: string;
    export let points: number = 7;

    let packagedPre = writable(preLabel);
    $: packagedPre.set(preLabel);
    let packagedPost = writable(postLabel);
    $: packagedPost.set(postLabel);

    setContext("points", points);
    setContext("preLabel", packagedPre);
    setContext("postLabel", packagedPost);
</script>

<div>
    <div class="mb-1"> {question} </div>
    <table class="w-full border-separate border-spacing-1">
        <tbody class="">
            <slot></slot>
        </tbody>
    </table>
</div>