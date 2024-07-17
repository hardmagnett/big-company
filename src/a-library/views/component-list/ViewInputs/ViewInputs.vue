<script setup lang="ts">
import MultiSelectsDemo from "@/a-library/views/component-list/ViewInputs/MultiSelectsDemo/MultiSelectsDemo.vue";
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
</script>

<template>
  <div class="inputs-page">
    <APageHeaderWithTeleport text="Элементы форм" />

    <h2>Текстовое поле</h2>
    <p>По умолчанию.</p>
    <AInput label="Лейбл" hideHint></AInput>
    <br />
    <p>Без лейбла. С плейлхолдером.</p>
    <AInput
      value="default value"
      hideLabel
      placeholder="placeholder for text"
      hideHint
    ></AInput>
    <br />

    <h2>Чекбокс</h2>
    <ACheckBox label="С указанием label" hide-hint />
    <ACheckBox
      label="Чекбокс со скрытым местом для заголовка"
      hide-hint
      hide-label
    />
    <ACheckBox hide-hint hide-label />
    <br />
    <MultiSelectsDemo />
  </div>
</template>

<style scoped>
.inputs-page {
}
</style>
