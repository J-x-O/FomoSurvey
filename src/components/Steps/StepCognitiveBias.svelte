<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import SemanticDifferentialTable from "../Survey/SemanticDifferential/Table/SemDiffTable.svelte";
    import SemanticDifferentialTableRow from "../Survey/SemanticDifferential/Table/SemDiffTableRow.svelte";
    import {_} from "$lib/language";
    import type {Bias} from "$lib/dataFormating.js";

    export let fear: number = 4;
    export let anger: number = 4;
    export let disgust: number = 4;
    export let happiness: number = 4;
    export let sadness: number = 4;
    export let surprise: number = 4;

    export function extractData(): Bias {
        return {
            fear: fear,
            anger: anger,
            disgust: disgust,
            happiness: happiness,
            sadness: sadness,
            surprise: surprise
        }
    }
</script>

<LocalizedStep>
    <div slot="header">{$_('bias.title')}</div>
    <SemanticDifferentialTable question={$_('bias.strength')} preLabel={$_('bias.strength_pre')} postLabel={$_('bias.strength_post')}>
        <SemanticDifferentialTableRow text={$_('emotions.fear')} bind:value={fear}/>
        <SemanticDifferentialTableRow text={$_('emotions.anger')} bind:value={anger}/>
        <SemanticDifferentialTableRow text={$_('emotions.disgust')} bind:value={disgust}/>
        <SemanticDifferentialTableRow text={$_('emotions.happiness')} bind:value={happiness}/>
        <SemanticDifferentialTableRow text={$_('emotions.sadness')} bind:value={sadness}/>
        <SemanticDifferentialTableRow text={$_('emotions.surprise')} bind:value={surprise}/>
    </SemanticDifferentialTable>
</LocalizedStep>