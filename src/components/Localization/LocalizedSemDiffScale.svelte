<script lang="ts">
    import SemanticDifferentialScale from "../Survey/SemanticDifferential/SemDiffScale.svelte";
    import {_} from "$lib/language";
    import ScaleLabel from "../Survey/SemanticDifferential/ScaleLabel.svelte";
    import SemDiffLayoutScale from "../Survey/SemanticDifferential/Layout/SemDiffLayoutScale.svelte";
    export let points = 7;
    export let value = (points - 1) / 2 + 1;
    export let prefix: string;
</script>

<ScaleLabel label={$_(prefix + "_question")}>
    <SemanticDifferentialScale preLabel={$_(prefix + "_left")} postLabel={$_(prefix + "_right")} {points} bind:value/>
</ScaleLabel>
