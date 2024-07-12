<script setup lang="ts">
import MultiSelectsDemo from "@/a-library/views/component-list/ViewInputs/MultiSelectsDemo/MultiSelectsDemo.vue";
</script>

<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <!--todo:: перенести потом это вниз и убрать коммент ниже-->
    <MultiSelectsDemo />

    <!--<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />-->
    <!--<hr />-->
    <!--<hr />-->
    <!--<hr />-->
    <!--<hr />-->
    <!--<hr />-->
    <br />
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
  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;
}
</style>
