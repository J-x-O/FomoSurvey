<script lang="ts">
    import LinkertScale from "../Survey/LinkertScale.svelte";
    import {_} from "$lib/language";

    export let prefix: string;
</script>

<LinkertScale question={$_(prefix + "_question")} preLabel={$_(prefix + "_left")} postLabel={$_(prefix + "_right")}/>