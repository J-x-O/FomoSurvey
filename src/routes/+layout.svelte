<script lang="ts">
	import '../app.postcss';
    import {AppBar} from "@skeletonlabs/skeleton";
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import {setupI18n} from "$lib/language";
    import { locale, locales } from "svelte-i18n";

    setupI18n();
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <img src="favicon.png" alt="icon" class="size-10">
    </svelte:fragment>
    <div class="h3"> Feelies.Website </div>
    <svelte:fragment slot="trail">
        <select bind:value={$locale} class="select w-fit">
            {#each $locales as l}
                <option value={l}>{l}</option>
            {/each}
        </select>
        <LightSwitch />
    </svelte:fragment>
</AppBar>

<div class="max-w-screen-lg mx-auto p-24">
    <slot />
</div>