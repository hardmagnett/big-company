<script setup lang="ts">
// todo:: Логотип и текст возле лого должны быть параметрами

</script>

<template>
  <div class="a-header">
    <img alt="Логотип" src="@/app/assets/images/logo.svg" height="28"/>
    <span class="a-header__text-near-logo">CRM</span>
  </div>
</template>



<style scoped lang="scss">
  .a-header {
    height: var(--headerHeight);
    background-color: var(--clrFillBlueSmall);
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;

    align-items: center;
    gap: var(--gap);
    padding-left: var(--gap);

    .a-header__text-near-logo {
      color: var(--clrFontBlueLight);
    }
  }
</style>
