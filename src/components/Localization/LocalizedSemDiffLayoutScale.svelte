<script lang="ts">
    import {_} from "$lib/language";
    import SemDiffLayoutLabel from "../Survey/SemanticDifferential/Layout/SemDiffLayoutLabel.svelte";
    import SemDiffLayoutScale from "../Survey/SemanticDifferential/Layout/SemDiffLayoutScale.svelte";
    export let points = 7;
    export let value = (points - 1) / 2 + 1;
    export let prefix: string;

</script>

<SemDiffLayoutLabel label={$_(prefix + "_question")}>
    <SemDiffLayoutScale preLabel={$_(prefix + "_left")} postLabel={$_(prefix + "_right")} {points} bind:value/>
</SemDiffLayoutLabel>
