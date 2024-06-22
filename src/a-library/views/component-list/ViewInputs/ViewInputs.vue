<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <h2>Текстовое поле</h2>
    <AInput placeholder="placeholder for text"></AInput>
    <br>
    <AInput
        label="Лейбл"
        placeholder="placeholder for text"></AInput>
    <br />
    <!--<AInput value="default value"></AInput>-->
    <!--<br />-->
    <p>Без лейбла и подробностей</p>
    <AInput value="default value"
      hideLabel
      hideHint
    ></AInput>
    <br />

    <h2>Чекбокс</h2>
    <ACheckBox label="С указанием label" />
    <br />
    <ACheckBox />
    <br>
    <br>
    https://vuetifyjs.com/en/components/forms/
    <br>
    https://vuetifyjs.com/en/components/text-fields/
    <br>
    https://vuetifyjs.com/en/components/checkboxes/
    <br>
    https://dev.to/yogeshgalav7/create-validation-plugin-in-vue-1flf
  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;
}
</style>
<script setup lang="ts">
</script>
