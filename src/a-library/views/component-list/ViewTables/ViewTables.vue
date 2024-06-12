<template>
  <div class="tables">
    <Teleport to="#page-header-place">
      <APageHeader> Таблицы </APageHeader>
    </Teleport>

    <h2>Таблицы</h2>
    <p>Продолжить отсюда</p>
    https://vuetifyjs.com/en/components/tables/#api
    <ATable>
      <thead>
        <tr>
          <th>Колонка 01</th>
          <th>Колонка 02</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 10" :key="n">
          <td>Колонка 01</td>
          <td>Колонка 02</td>
        </tr>
      </tbody>
    </ATable>

    <br>

    <ATable>
      <tr v-for="n in 10" :key="n">
        <td>Колонка 01</td>
        <td>Колонка 02</td>
      </tr>
    </ATable>

  </div>
</template>

<style scoped>
.tables {
}
</style>
<script setup lang="ts">
</script>
