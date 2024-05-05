<script>
    import {locale} from "svelte-i18n";

    $locale = "de";

    function handleClick() {
        $locale = $locale === "en" ? "de" : "en";
    }
</script>

<button class="button text-2xl" on:click={handleClick}>
    {$locale === "en" ? "🇬🇧" : "🇩🇪"}
</button>