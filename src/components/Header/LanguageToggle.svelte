<script>
    import {locale} from "svelte-i18n";

    $locale = "en";

    function handleClick() {
        $locale = $locale === "en" ? "de" : "en";
    }
</script>

<button class="button text-2xl leading-6" on:click={handleClick}>
    {$locale === "en" ? "🇬🇧" : "🇩🇪"}
</button>