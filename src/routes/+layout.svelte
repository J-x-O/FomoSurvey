<script lang="ts">
	import '../app.postcss';
    import {AppBar} from "@skeletonlabs/skeleton";
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import {setupI18n, _} from "$lib/language";
    import LanguageToggle from "../components/Header/LanguageToggle.svelte";
    import RecordIndicator from "../components/Header/RecordIndicator.svelte";
    import {getIsRecording} from "$lib/cameraStore";
    import type {Readable} from "svelte/store";

    let isRecording: Readable<boolean> = getIsRecording();

    setupI18n();
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <img src="favicon.png" alt="icon" class="size-6 scale-150 origin-left">
    </svelte:fragment>
    <div class="text-2xl font-bold leading-6"> Feelies.Website </div>
    <svelte:fragment slot="trail">
        <RecordIndicator isRecording={$isRecording}/>
        <LanguageToggle />
        <LightSwitch/>
    </svelte:fragment>
</AppBar>

<div class="mx-auto px-24 py-12 hidden sm:block">
    <slot />
</div>

<div class="sm:hidden px-24 py-12">
    <div class="card p-4">
        {$_('mobile')}
    </div>
</div>