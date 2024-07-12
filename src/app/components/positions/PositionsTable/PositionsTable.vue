<script setup lang="ts">
import PositionRow from "@/app/components/positions/PositionRow/PositionRow.vue";

defineEmits(["needToDeletePosition", "needToEditPosition"]);
</script>

<template>
  <ATable class="positions-table a-table--fixed-header">
    <thead>
      <tr>
        <th>Наименование</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <PositionRow
        @needToDeletePosition="$emit('needToDeletePosition')"
        @needToEditPosition="$emit('needToEditPosition')"
        :key="n"
        v-for="n in 30"
      />
    </tbody>
  </ATable>
</template>

<style scoped>
.positions-table {
}
</style>
