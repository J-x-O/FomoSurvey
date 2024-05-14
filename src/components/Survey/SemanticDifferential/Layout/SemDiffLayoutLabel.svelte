<script lang="ts">
    export let label: string;
</script>


<tr class="[&>td]:pt-4 [&>td]:first:pt-0">
    <td colspan="5">
        {label}
    </td>
</tr>
<slot />
