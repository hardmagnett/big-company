<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>
    <p>В форме работает навигация по элементам при помощи клавиши <code class="mod--code">tab</code>.</p>

    <div class="view-form__inputs">
      <AInput
          class="mod--basis-for-column-flex-item"
          label="Текстовое поле"
          hideHint
      ></AInput>

      <ACheckBox
          class="mod--basis-for-column-flex-item"

          label="Чекбокс-поле"  hide-hint/>
    </div>


  </div>
</template>

<style scoped>
.view-form {

  .view-form__inputs {
    outline: 1px solid green;
    display: flex;
    flex-flow: row wrap;
    --gap-flex: var(--gap);
    --flex-items-qty: 4;
    > * {
      outline: 1px solid darkred !important;
      border: 1px solid darkred !important;
    }
  }
}
</style>
<script setup lang="ts">
</script>
