<script setup lang="ts">
const emit = defineEmits(["needToDeletePosition", "needToEditPosition"]);
</script>

<template>
  <tr class="position-row">
    <td class="mod--ellipsis-one-line-on-table-cell">
      Особый наш отдел
    </td>
    <td class="position-row__buttons">
      <ABtn icon @click="emit('needToEditPosition')"
        ><AIcon icon="mdi-pencil"
      /></ABtn>
      <ABtn icon class="a-btn--error" @click="emit('needToDeletePosition')"
        ><AIcon icon="mdi-delete"
      /></ABtn>
    </td>
  </tr>
</template>

<style scoped>
.position-row {
  .position-row__buttons {
    padding: 0;
    width: 60px;
  }
}
</style>
