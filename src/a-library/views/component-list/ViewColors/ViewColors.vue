<script setup lang="ts">

const colorNames: Array<string> = ['blue', 'red', 'green', 'orange']

let colorBGCSSVariables: Array<[string, string, string, string, string]> = []
for (let colorName of colorNames) {
    colorBGCSSVariables.push([
      `--clr-bg-${colorName}-big`,
      `--clr-bg-${colorName}-small`,
      `--clr-bg-${colorName}-smaller`,
      `--clr-bg-${colorName}-accent`,
      `--clr-bg-${colorName}-highlight`,
    ])
}

let colorFillCSSVariables: Array<[string, string, string]> = []
for (let colorName of colorNames) {
  colorFillCSSVariables.push([
    `--clr-fill-${colorName}-small`,
    `--clr-fill-${colorName}-big`,
    `--clr-fill-${colorName}-accent`,
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
    </ATable>

    <br>

    <h2>Заполнения</h2>
    <p>Ярко выраженный цвет. Например кнопка. Максимум - шапка.</p>

    <ATable>
      <tr
          v-for="(colorGroup, index) in colorFillCSSVariables"
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
    </ATable>

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
