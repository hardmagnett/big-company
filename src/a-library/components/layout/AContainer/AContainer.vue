<template>
  <div class="a-container">
    <div id="page-header-place"></div>

    <!--<template v-slot:header>-->

      <!--<APageHeader id="page-header">-->
      <!--  &lt;!&ndash;Структура кампании&ndash;&gt;-->
      <!--</APageHeader>-->
    <!--</template>-->

    <!--<slot name="header"></slot>-->
    <div class="container__main-content">
      <slot />
    </div>

  </div>
</template>

<style scoped lang="scss">
.a-container {
  .container__main-content {
    padding: calc(var(--gap) / 2) var(--gap);
    //margin-left: var(--leftMenuWidthExpanded);
    overflow-x: hidden;
    @media (min-width: $bpSm) {}

    @media (min-width: $bpMd) {
      //padding-left: calc(var(--gap) * 2);
      //padding-right: calc(var(--gap) * 2);
    }
    @media (min-width: $bpLg) {
      //padding-left: calc(var(--gap) * 3);
      //padding-right: calc(var(--gap) * 3);
    }
    @media (min-width: $bpXl) {}
    @media (min-width: $bpXxl) {}
  }
}
</style>
