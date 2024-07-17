<script setup lang="ts">
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";

const colorNames: Array<string> = ["blue", "red", "green", "orange"];

let colorBGCSSVariables: Array<[string, string, string, string, string]> = [];
for (let colorName of colorNames) {
  colorBGCSSVariables.push([
    `--clr-bg-${colorName}-highlight`,
    `--clr-bg-${colorName}-accent`,
    `--clr-bg-${colorName}-smaller`,
    `--clr-bg-${colorName}-small`,
    `--clr-bg-${colorName}-big`,
  ]);
}

let colorFillCSSVariables: Array<[string, string, string]> = [];
for (let colorName of colorNames) {
  colorFillCSSVariables.push([
    `--clr-fill-${colorName}-accent`,
    `--clr-fill-${colorName}-big`,
    `--clr-fill-${colorName}-small`,
  ]);
}

let colorBorderCSSVariables: Array<[string, string, string]> = [];
for (let colorName of colorNames) {
  colorBorderCSSVariables.push([
    `--clr-border-${colorName}-darker`,
    `--clr-border-${colorName}-lighter`,
    `--clr-border-${colorName}-lightest`,
  ]);
}

let colorFontCSSVariables: Array<[string, string, string, string, string]> = [];
for (let colorName of colorNames) {
  colorFontCSSVariables.push([
    `--clr-font-${colorName}-bright`,
    `--clr-font-${colorName}-darkest`,
    `--clr-font-${colorName}-dark`,
    `--clr-font-${colorName}-gray`,
    `--clr-font-${colorName}-light`,
  ]);
}
</script>

<template>
  <div class="view-colors">
    <APageHeaderWithTeleport text="Цвета" />

    <h2>Фоны</h2>
    <p>Для блоков большого размера.</p>

    <div class="view-colors__wrapper-for-bgs am-cols am-cols-5">
      <template v-for="(colorGroup, index) in colorBGCSSVariables" :key="index">
        <div
          class="view-colors__color-block am-col-5 am-col-xl-1"
          v-for="(variableName, index) in colorGroup"
          :key="index"
          :style="{
            backgroundColor: `var(${variableName})`,
          }"
        >
          {{ variableName }}
        </div>
      </template>
    </div>

    <br />

    <h2>Заполнения</h2>
    <p>Ярко выраженный цвет. Например кнопка. Максимум - шапка.</p>

    <div class="view-colors__wrapper-for-fills am-cols">
      <template
        v-for="(colorGroup, index) in colorFillCSSVariables"
        :key="index"
      >
        <div
          class="view-colors__color-block am-col-12 am-col-lg-4"
          v-for="(variableName, index) in colorGroup"
          :key="index"
          :style="{
            backgroundColor: `var(${variableName})`,
          }"
        >
          {{ variableName }}
        </div>
      </template>
    </div>
    <br />

    <h2></h2>
    <p></p>

    <h2>Бордюры</h2>

    <div class="view-colors__wrapper-for-borders am-cols">
      <template
        v-for="(colorGroup, index) in colorBorderCSSVariables"
        :key="index"
      >
        <ACard
          class="am-col-12 am-col-lg-4"
          v-for="(variableName, index) in colorGroup"
          :key="index"
          :style="{
            borderColor: `var(${variableName})`,
          }"
        >
          {{ variableName }}
        </ACard>
      </template>
    </div>

    <br />

    <h2>Шрифты</h2>
    <template v-for="(colorGroup, index) in colorFontCSSVariables" :key="index">
      <p
        v-for="(variableName, index) in colorGroup"
        :key="index"
        :style="{
          color: `var(${variableName})`,
        }"
      >
        {{ variableName }}
      </p>
      <br />
    </template>
  </div>
</template>

<style scoped>
.view-colors {
  .view-colors__color-block {
    padding: var(--gap);
  }
  .view-colors__wrapper-for-fills {
    --cols-gap: 0px;
  }
  .view-colors__wrapper-for-bgs {
    --cols-gap: 0px;
  }
}
</style>
