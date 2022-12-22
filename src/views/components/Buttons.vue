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
    <div class="buttons-page__buttons">
      <btn class="btn--small">Small</btn>
    </div>
    <h4>Кнопки-Ссылки</h4>
    <div class="buttons-page__buttons">
      <btn href="https://stackoverflow.com/users/1638298/flamytwista" target="_blank">stackoverflow.com</btn>
    </div>
    <h4>Кнопки-RouterLink</h4>
    <div class="buttons-page__buttons">
      <btn :to="{name: 'dashboard'}">На главную</btn>
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
