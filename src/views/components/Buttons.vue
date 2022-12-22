<template>
  <div class="buttons-page">
    <p>Кнопки</p>

    <h4>Кнопки-Кнопки</h4>
    <div class="buttons-page__buttons">
      <btn>Main</btn>
      <btn class="btn--success">Success</btn>
      <btn class="btn--danger">Danger</btn>
      <btn class="btn--error">Error</btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons-page {
  padding-bottom: 200px;
}
.buttons-page__buttons {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: var(--gap);

  > * {
    margin-right: var(--gap);
    margin-bottom: var(--gap);
  }
}


</style>
