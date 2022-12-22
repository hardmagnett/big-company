<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
/**
Контейнер похожий на Bootstrap-овский.
Он не используется в этом приложении, но хранится здесь на тот случай, когда понадобиться.
 */
.container {
  padding-right: var(--gap);
  padding-left: var(--gap);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: $sm) {
    // Именно max-width а не width - так не появляется горизонтальный скроллбар.

    // Если использовать width, то будет следующая проблема:
    // Допустим $sm === 768px и окно браузера === 768px.
    // Тогда в случае наличия вертикального скроллбара
    // ширина документа будет не 768px а 751px.
    // А ширина контейнера так и останется 768px.
    // Появится горизонтальный скроллбар,
    // и горизонтальный скролбар исчезнет только
    // когда окно браузера будет больше брекпоинта на ширину вертикального скролбара.

    // Аналогичная ситуация для остальных брекпоинтов.
    max-width: $sm;
  }

  @media (min-width: $md) {
    max-width: $md;
  }
  @media (min-width: $lg) {
    max-width: $lg;
  }
  @media (min-width: $xl) {
    max-width: $xl;
  }
  @media (min-width: $xxl) {
    max-width: $xxl;
  }
}

.container--no-padding-on-xs {
  padding-right: 0;
  padding-left: 0;
  @media (min-width: $bpSm) {
    padding-right: $gap;
    padding-left: $gap;
  }
}
.container--fluid {
  max-width: 100% !important;
}
</style>
