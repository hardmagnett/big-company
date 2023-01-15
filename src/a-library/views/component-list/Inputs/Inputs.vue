<template>
  <div class="inputs-page">
    <!--<h1>Элементы форм</h1>-->
    <Teleport to="#page-header-place">
      <APageHeader>
        Элементы форм
      </APageHeader>
    </Teleport>

    <h2>AInput</h2>
    <AInput placeholder="placeholder for text"></AInput>
    <br>
    <AInput value="default value"></AInput>
    <br>

    <h2>ACheckBox</h2>
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
