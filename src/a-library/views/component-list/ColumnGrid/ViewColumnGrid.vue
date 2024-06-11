<template>
  <div class="column-grid">
    <Teleport to="#page-header-place">
      <APageHeader> Сетка </APageHeader>
    </Teleport>
    <p>
      Для просмотра адаптивной работы сетки нужно посмотреть страницу на разных
      ширинах.
    </p>
    <p>Например потаскать браузер за правый или левый край.</p>

    <div class="column-grid__grid-container">
      <ACard
        class="column-grid__grid-item mod--basis-for-column-flex-item"
        :key="n"
        v-for="n in 60"
      >
        Элемент сетки
      </ACard>
    </div>
  </div>
</template>

<style scoped>
.column-grid {
  .column-grid__grid-container {
    display: flex;
    flex-flow: row wrap;
    gap: var(--gap);
    .column-grid__grid-item {
      --flex-items-qty: 1;
      height: 100px;

      @container style(--pb-sx-or-more) {
        --flex-items-qty: 1;
      }
      @container style(--bp-md-or-more) {
        --flex-items-qty: 2;
      }
      @container style(--bp-lg-or-more) {
        --flex-items-qty: 3;
      }
      @container style(--bp-xl-or-more) {
        --flex-items-qty: 4;
      }
    }
  }
}
</style>
