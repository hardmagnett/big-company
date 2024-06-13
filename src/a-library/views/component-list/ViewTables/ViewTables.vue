<template>
  <div class="tables">
    <Teleport to="#page-header-place">
      <APageHeader> Таблицы </APageHeader>
    </Teleport>

    <p>Фактически - стилизованная обертка над тэгом <code>table</code>.</p>
    <br />

    <h2>Обычная</h2>
    <ATable>
      <tr v-for="n in 4" :key="n">
        <td>Колонка 01</td>
        <td>Колонка 02</td>
      </tr>
    </ATable>
    <br />

    <h2>С шапкой</h2>
    <ATable>
      <thead>
        <tr>
          <th>Колонка 01</th>
          <th>Колонка 02</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 4" :key="n">
          <td>Колонка 01</td>
          <td>Колонка 02</td>
        </tr>
      </tbody>
    </ATable>
    <br />

    <h2>С ограниченной высотой</h2>
    <ATable style="height: 200px">
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
    <br />

    <h2>С ограниченной высотой и фиксированной шапкой</h2>
    <ATable style="height: 200px" class="a-table--fixed-header">
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
    <br />
  </div>
</template>

<style scoped>
.tables {
}
</style>
<script setup lang="ts"></script>
