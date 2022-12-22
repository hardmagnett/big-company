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
    <img alt="Логотип" src="@/assets/app/images/logo.svg" width="24" height="24" />
    <span>trololo</span>
    <!--<container>-->
      <!--<router-link-->
      <!--  v-for="(menuItem, index) in items"-->
      <!--  :key="index"-->
      <!--  class="header-menu__link"-->
      <!--  active-class="header-menu__link&#45;&#45;active"-->
      <!--  exact-->
      <!--  :to=menuItem.to-->
      <!--&gt;-->
      <!--  {{menuItem.text}}-->
      <!--</router-link>-->
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
