<!--<script>-->

<!--export default {-->
<!--  props: {-->
<!--    // items: {-->
<!--    //   type: Array,-->
<!--    //   default: () => [-->
<!--    //     { to: { name: 'components' }, text: 'Components' },-->
<!--    //   ]-->
<!--    // }-->
<!--  },-->

<!--}-->
<!--</script>-->


<script setup lang="ts">
// todo:: По факту это не меню должно-быть, а просто хедер со слотами. Переделать

</script>

<template>
  <div class="header-menu">
    <!--<img alt="Логотип" src="@/assets/app/images/logo.svg" width="24" height="24"-->
    <img alt="Логотип" src="@/app/assets/images/logo.svg" width="24" height="24"
    />
    <span class="color-test">trololo</span>
    <!--<container>-->

    <!--</container>-->
  </div>
</template>



<style scoped lang="scss">
  .header-menu {
    height: var(--headerHeight);
    //background-color: clrFill();
    background-color: var(--clrFillBlueSmall);
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;

    // эти 3 - просто чтобы верхушка не смотрелась уродливо.
    align-items: center;
    gap: 16px;
    padding-left: 16px;

    .color-test {
      color: var(--clrFontBlueLight);
    }

    // Скопировал. Нужно опробовать.
    //color: clrFont(light, main);

    //.container {
    //  height: 100%;
    //  display: flex;
    //  flex-flow: row nowrap;
    //}

    //&__link {
    //  color: clrFont(light, main);
    //  height: 100%;
    //  padding: 0 $gap;
    //  line-height: $headerHeight;
    //  text-decoration: none;
    //  transition: background-color $timeShort;
    //  &:first-child {
    //    margin-left: -$gap;
    //  }
    //  &--active,
    //  &:hover {
    //    background-color: clrFill(accent);
    //  }
    //}
  }
</style>
