<script setup lang="ts">
// Расположение кнопок от формы снизу - довольно распространенная задача.
// Этот компонент нужен чтобы не делать каждый раз одну и ту-же верстку
</script>

<template>
  <div class="a-form-buttons-wrapper">
    <div class="a-form-buttons-wrapper__left">
      <slot name="left"></slot>
    </div>
    <div class="a-form-buttons-wrapper__right">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.a-form-buttons-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .a-form-buttons-wrapper__left,
  .a-form-buttons-wrapper__right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--gap);
  }
}
</style>
