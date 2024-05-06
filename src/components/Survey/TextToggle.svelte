<script lang="ts">
    import {SlideToggle} from "@skeletonlabs/skeleton";

    export let name: string;
    export let text: string;
    export let checked: boolean = false;
</script>
<p class="flex flex-row items-center space-x-4">
    <SlideToggle {name} bind:checked={checked}/>
    <span class='transition-opacity {checked ? "" : "opacity-50"}'> {@html text} </span>
</p>