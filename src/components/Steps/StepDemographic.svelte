<script lang="ts">
    import LocalizedStep from "../Localization/LocalizedStep.svelte";
    import {_} from "$lib/language";
    import type {Demographic} from "$lib/dataFormating";

    let age: number|null = null;
    $: ageNotNull = age ?? 0;
    export {ageNotNull as age}

    export let gender = '';

    export function extractData(): Demographic {
        return {
            age: ageNotNull,
            gender: gender
        }
    }
</script>

<LocalizedStep locked={gender === '' || !age || age > 120 || age < 12}>
    <div slot="header">{$_('demographic.title')}</div>
    <label>
        <span> {$_('demographic.age')} </span>
        <input class="input" type="number" id="age" name="age" min="12" max="120" required bind:value={age}>
    </label>
    <label>
        <span> {$_('demographic.gender')} </span>
        <select class="select" bind:value={gender}>
            <option value="" selected disabled hidden>{$_('demographic.gender_placeholder')}</option>
            <option value="male">{$_('demographic.gender_male')}</option>
            <option value="female">{$_('demographic.gender_female')}</option>
            <option value="other">{$_('demographic.gender_other')}</option>
        </select>
    </label>
</LocalizedStep>