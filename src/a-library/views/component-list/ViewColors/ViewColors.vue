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

let colorBorderCSSVariables: Array<[string, string, string]> = []
for (let colorName of colorNames) {
  colorBorderCSSVariables.push([
    `--clr-border-${colorName}-lightest`,
    `--clr-border-${colorName}-lighter`,
    `--clr-border-${colorName}-darker`,
  ])
}

let colorFontCSSVariables: Array<[string, string, string, string]> = []
for (let colorName of colorNames) {
  colorFontCSSVariables.push([
    `--clr-font-${colorName}-light`,
    `--clr-font-${colorName}-gray`,
    `--clr-font-${colorName}-dark`,
    `--clr-font-${colorName}-darkest`,
  ])
}


</script>

<template>
  <div class="view-colors">
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
            :style="{
                backgroundColor: `var(${variableName})`
              }"
        >
          {{ variableName }}
        </td>
      </tr>
    </ATable>
    <br>

    <h2></h2>
    <p></p>

    <h2>Бордюры</h2>

    <div class="view-colors__wrapper-for-borders">
      <template
          v-for="(colorGroup, index) in colorBorderCSSVariables"
          :key="index"
      >
        <ACard
            class="mod--basis-for-column-flex-item"
            v-for="(variableName, index) in colorGroup" :key="index"
            :style="{
                borderColor: `var(${variableName})`
              }"
        >
          {{ variableName }}
        </ACard>
      </template>
    </div>

    <br>

    <h2>Шрифты</h2>
    <!--<div class="view-colors__wrapper-for-fonts">-->
      <template
          v-for="(colorGroup, index) in colorFontCSSVariables"
          :key="index"
      >
        <p
            v-for="(variableName, index) in colorGroup" :key="index"
            :style="{
                color: `var(${variableName})`
              }"
        >
          {{ variableName }}
        </p>
        <br>
        <!--<ACard-->
        <!--    class="mod&#45;&#45;basis-for-column-flex-item"-->
        <!--    v-for="(variableName, index) in colorGroup" :key="index"-->
        <!--    :style="{-->
        <!--        color: `var(${variableName})`-->
        <!--      }"-->
        <!--&gt;-->
        <!--  {{ variableName }}-->
        <!--</ACard>-->
      </template>
    <!--</div>-->
  </div>
</template>

<style scoped>
.view-colors {
  .view-colors__wrapper-for-borders {
    --flex-items-qty: 3;
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    @container style(--bp-md-or-less) {
      --flex-items-qty: 1;
    }
  }
  /*.view-colors__wrapper-for-fonts {*/
  /*    --flex-items-qty: 4;*/
  /*    display: flex;*/
  /*    flex-flow: row wrap;*/
  /*    gap: var(--gap);*/
  /*  @container style(--bp-md-or-less) {*/
  /*    --flex-items-qty: 1;*/
  /*  }*/
  /*}*/
}
</style>
