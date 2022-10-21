<script setup lang="ts">

</script>

<template>
  <div class="left-menu-item">

    <!--<nuxt-link v-if="!menuItem.menuWithoutLink" :to="menuItem.routePath">{{menuItem.menuTitle}}</nuxt-link>-->
    <!--<a v-if="menuItem.menuWithoutLink">{{menuItem.menuTitle}}</a>-->
    <p>Название пункта меню</p>

    <div>
      <!--<MainMenuItem />-->
      <!--<MainMenuItem />-->
      <p>Здесь будут пункты меню</p>

    </div>
  </div>
</template>

<style scoped lang="scss">
.main-menu-item {
  > .main-menu-item {
    margin-left: 16px;
  }
}
</style>
