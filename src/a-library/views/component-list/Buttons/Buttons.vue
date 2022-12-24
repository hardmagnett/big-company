<template>
  <div class="buttons-page">
    <h1>Кнопки</h1>

    <h2>Кнопки-Кнопки</h2>
    <div class="buttons-page__buttons">
      <ABtn>Main</ABtn>
      <ABtn class="btn--success">Success</ABtn>
      <ABtn class="btn--danger">Danger</ABtn>
      <ABtn class="btn--error">Error</ABtn>
    </div>
    <div class="buttons-page__buttons">
      <ABtn class="btn--small">Small</ABtn>
    </div>
    <h2>Кнопки-Ссылки</h2>
    <div class="buttons-page__buttons">
      <ABtn href="https://stackoverflow.com/users/1638298/flamytwista" target="_blank">stackoverflow.com</ABtn>
    </div>
    <h2>Кнопки-RouterLink</h2>
    <div class="buttons-page__buttons">
      <!--<ABtn :to="{name: 'dashboard'}">На главную</ABtn>-->
      <ABtn :to="{path: '/'}">На главную</ABtn>
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
