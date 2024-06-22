<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>
    <p>В форме работает навигация по элементам при помощи клавиши <code class="mod--code">tab</code>.</p>

    <div class="
      am-cols
      view-form__inputs
    ">

      <div class="am-col-3">1</div>
      <div class="am-col-6">2</div>
      <div class="am-col-3">3</div>
      <div class="am-col-1">4</div>
      <div class="am-col-1">5</div>
      <div class="am-col-2">6</div>
      <div class="am-col-3">7</div>
      <div class="am-col-5">8</div>
      <div class="am-col-3">9</div>
      <div class="am-col-3">10</div>
      <!--<AInput-->
      <!--    class="-->
      <!--      mod&#45;&#45;flex-columns-item-->
      <!--      mod&#45;&#45;basis-for-column-flex-itemZ-->
      <!--    "-->
      <!--    label="Текстовое поле"-->
      <!--    hideHint-->
      <!--&gt;</AInput>-->

      <!--<ACheckBox-->
      <!--    class="-->
      <!--      mod&#45;&#45;flex-columns-item-->
      <!--      mod&#45;&#45;basis-for-column-flex-itemZ-->
      <!--    "-->

      <!--    label="Чекбокс-поле"  hide-hint/>-->
    </div>


  </div>
</template>

<style scoped>
.view-form {

  .view-form__inputs {
    /*outline: 1px solid green;*/
    /*display: flex;*/
    /*flex-flow: row wrap;*/
    /*--gap-flex: var(--gap);*/
    /*--flex-items-qty: 4;*/
    > * {
      outline: 1px solid darkred !important;
      border: 1px solid darkred !important;
    }
  }
}
</style>
<script setup lang="ts">
</script>
