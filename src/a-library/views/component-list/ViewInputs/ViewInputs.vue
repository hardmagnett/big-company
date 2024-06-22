<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <h2>Текстовое поле</h2>
    <!--<AInput placeholder="placeholder for text"></AInput>-->
    <!--<br>-->
    <p>По умолчанию.</p>
    <AInput
        label="Лейбл"
        hideHint
        ></AInput>
    <br />
    <!--<AInput value="default value"></AInput>-->
    <!--<br />-->
    <p>Без лейбла. С плейлхолдером.</p>
    <AInput value="default value"
      hideLabel
      placeholder="placeholder for text"
      hideHint
    ></AInput>
    <br />

    <h2>Чекбокс</h2>
    <ACheckBox label="С указанием label" hide-hint />
    <ACheckBox label="Чекбокс со скрытым местом для заголовка"  hide-hint hide-label/>
    <ACheckBox hide-hint hide-label/>
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
