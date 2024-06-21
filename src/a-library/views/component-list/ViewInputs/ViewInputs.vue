<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <h2>Текстовое поле</h2>
    <AInput placeholder="placeholder for text"></AInput>
    <br />
    <AInput value="default value"></AInput>
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
  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;
}
</style>
<script setup lang="ts">
</script>
