<template>
  <div class="inputs-page">
    <p>Элементы форм</p>

    <h3>Input Text</h3>
    <AInput placeholder="placeholder for text"></AInput>
    <br>
    <AInput value="default value"></AInput>

    <h3>Checkbox</h3>
    <ACheckBox label="С указанием label" />
    <br>
    <ACheckBox />

  </div>
</template>

<style lang="scss" scoped>
.inputs-page {
  padding-bottom: 200px;
}

</style>
