<script setup lang="ts"></script>

<template>
  <tr class="employee-row">
    <td class="mod--ellipsis-one-line-on-table-cell">
      Череззабороногузадерищенко Виктор
    </td>
    <td class="employee-row__task-qty">11</td>
    <td class="employee-row__buttons">
      <ABtn icon><AIcon icon="mdi-pencil" /></ABtn>
      <ABtn icon class="btn--error"><AIcon icon="mdi-delete" /></ABtn>
    </td>
  </tr>
</template>

<style scoped>
.employee-row {
  .employee-row__buttons {
    padding: 0;
    width: 58px;
  }
  .employee-row__task-qty {
    width: 156px;
    text-align: center;
    @container style(--bp-xs-or-less) {
      width: 40px;
    }
  }
}
</style>
