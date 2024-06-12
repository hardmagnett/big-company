<script setup lang="ts">

const colorNames: Array<string> = ['blue', 'red', 'green', 'orange']
let colorBGCSSVariables = []
for (let colorName of colorNames) {
    colorBGCSSVariables.push([
      `--clr-bg-${colorName}-big`,
      `--clr-bg-${colorName}-small`,
      `--clr-bg-${colorName}-smaller`,
      `--clr-bg-${colorName}-accent`,
      `--clr-bg-${colorName}-highlight`,
    ])
}
</script>

<template>
  <div class="colors">
    <Teleport to="#page-header-place">
      <APageHeader> Цвета </APageHeader>
    </Teleport>

    <h2>Фоны</h2>
    <p>Для блоков большого размера.</p>

    <ATable>
      <thead>
      <!--<tr>-->
      <!--  <th>big - например фон всей страницы</th>-->
      <!--  <th>small - например для шапки в таблице</th>-->
      <!--  <th>accent - Чтобы выделялось на фоне любого серого</th>-->
      <!--  <th>big - например фон всей страницы</th>-->
      <!--</tr>-->
      </thead>
      <tbody>
      <p ></p>

        <tr
          v-for="(colorGroup, index) in colorBGCSSVariables"
          :key="index"
        >
          <td
              v-for="(variableName, index) in colorGroup" :key="index"
              style="background-color: var(--clr-bg-blue-big)"
              :style="{
                backgroundColor: `var(${variableName})`
              }"
          >
            {{ variableName }}
          </td>
        </tr>
      </tbody>

    </ATable>

    <h2>Заполнения</h2>
    <p>Ярко выраженный цвет. Например кнопка. Максимум - шапка.</p>

    <h2></h2>
    <p></p>

    <h2>Бордюры</h2>

    <h2>Шрифты</h2>

  </div>
</template>

<style scoped>
.colors {
}
</style>
