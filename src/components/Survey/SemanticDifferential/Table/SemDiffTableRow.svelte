<script lang="ts">
    import {getContext} from "svelte";
    import SemanticDifferentialScale from "../SemDiffScale.svelte";
    import type {Readable} from "svelte/store";

    export let text: string;
    export let value: number;

    let points: number = getContext("points");
    let preLabel: Readable<string> = getContext("preLabel");
    let postLabel: Readable<string> = getContext("postLabel");
</script>
<tr>
    <td>{text}</td>
    <td>
        <SemanticDifferentialScale bind:value={value} {points} preLabel={$preLabel} postLabel={$postLabel}/>
    </td>
</tr>
