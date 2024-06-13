<script setup lang="ts">
</script>

<template>
  <tr class="employee-row">
    <td class="mod--ellipsis-one-line">Череззабороногузадерищенко Виктор</td>
    <td>11</td>
    <td class="employee-row__buttons">
      <ABtn icon><AIcon icon="mdi-pencil" /></ABtn>
      <ABtn icon class="btn--error"><AIcon icon="mdi-delete" /></ABtn>
    </td>
  </tr>
</template>

<style scoped>
.employee-row {
  .employee-row__buttons {
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
