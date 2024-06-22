<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>
    <p>
      В форме работает навигация по элементам при помощи клавиши
      <code class="mod--code">tab</code>.
    </p>

    <div class="am-cols view-form__inputs">

      <AInput
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Текстовое поле"
          hideHint
      ></AInput>

      <ACheckBox
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"

          label="Чекбокс-поле"  hide-hint/>
    </div>
  </div>
</template>

<style scoped>
.view-form {
  .view-form__inputs {

  }
}
</style>
<script setup lang="ts"></script>
