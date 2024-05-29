<template>
  <div class="a-container">
    <div
      id="page-header-place"
      class="a-container__page-header-place"
    >
      <!--сюда контент передается телепортом из view-х-->
    </div>

    <!--<template v-slot:header>-->

      <!--<APageHeader id="page-header">-->
      <!--  &lt;!&ndash;Структура кампании&ndash;&gt;-->
      <!--</APageHeader>-->
    <!--</template>-->

    <!--<slot name="header"></slot>-->
    <div class="container__main-content mod--cool-scrollbar">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.a-container {
  display: flex;
  flex-flow: column nowrap;
  .a-container__page-header-place {
    flex: 0 0 auto;
  }
  .container__main-content {
    flex: 1 1 auto;
    /*background-color: red;*/
    /*foo*/
    padding: calc(var(--gap) / 2) var(--gap);
    /*margin-left: var(--leftMenuWidthExpanded);*/
    overflow-x: hidden;

    @container style(--bp-sm-or-more) {
    }
    @container style(--bp-md-or-more) {
      /*padding-left: calc(var(--gap) * 2);*/
      /*padding-right: calc(var(--gap) * 2);*/

    }
    @container style(--bp-lg-or-more) {
      /*padding-left: calc(var(--gap) * 3);*/
      /*padding-right: calc(var(--gap) * 3);*/
    }
    @container style(--bp-xl-or-more) {

    }
    @container style(--bp-xxl-or-more) {

    }
  }
}
</style>
