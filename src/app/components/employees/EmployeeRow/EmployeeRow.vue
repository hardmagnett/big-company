<script setup lang="ts">
const emit = defineEmits(["needToDeleteEmployee", "needToEditEmployee"]);
</script>

<template>
  <tr class="employee-row">
    <td class="mod--ellipsis-one-line-on-table-cell">
      Череззабороногузадерищенко Виктор
    </td>
    <td class="employee-row__department mod--ellipsis-one-line-on-table-cell">
      Особый отдел
    </td>
    <td class="employee-row__buttons">
      <ABtn icon @click="emit('needToEditEmployee')"
        ><AIcon icon="mdi-pencil"
      /></ABtn>
      <ABtn icon class="a-btn--error" @click="emit('needToDeleteEmployee')"
        ><AIcon icon="mdi-delete"
      /></ABtn>
    </td>
  </tr>
</template>

<style scoped>
.employee-row {
  .employee-row__buttons {
    padding: 0;
    width: 60px;
  }
  .employee-row__department {
    --width: 80px;
    @container style(--bp-sm-or-more) {
      --width: 200px;

      width: var(--width);
      max-width: var(--width);
    }
    @container style(--bp-lg-or-more) {
      --width: 300px;
    }
    @container style(--bp-xl-or-more) {
      --width: 400px;
    }
    @container style(--bp-xxl-or-more) {
      --width: 500px;
    }
  }
}
</style>
