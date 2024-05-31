<template>
  <div class="inputs-page">
    <!--<h1>Элементы форм</h1>-->
    <Teleport to="#page-header-place">
      <APageHeader>
        Элементы форм
      </APageHeader>
    </Teleport>

    <h2>Текстовое поле</h2>
    <AInput placeholder="placeholder for text"></AInput>
    <br>
    <AInput value="default value"></AInput>
    <br>

    <h2>Чекбокс</h2>
    <ACheckBox label="С указанием label" />
    <br>
    <ACheckBox />

  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;
}

</style>
