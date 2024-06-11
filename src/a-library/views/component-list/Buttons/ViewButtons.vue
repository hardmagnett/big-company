<template>
  <div class="buttons-page">
    <Teleport to="#page-header-place">
      <APageHeader> Кнопки </APageHeader>
    </Teleport>

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
      <ABtn
        href="https://stackoverflow.com/users/1638298/flamytwista"
        target="_blank"
        >stackoverflow.com</ABtn
      >
    </div>
    <h2>Кнопки-RouterLink</h2>
    <div class="buttons-page__buttons">
      <ABtn :to="{ path: '/' }">На главную</ABtn>
    </div>

    <h2>Кнопки c иконками</h2>
    <h3>Обычные</h3>
    <div class="buttons-page__buttons">
      <ABtn>Редактировать <AIcon icon="mdi-pencil" /></ABtn>
      <ABtn class="btn--error">Удалить <AIcon icon="mdi-delete" /></ABtn>
    </div>
    <h3>Специально для иконок</h3>
    <div class="buttons-page__buttons">
      <ABtn icon><AIcon icon="mdi-pencil" /></ABtn>
      <ABtn icon class="btn--success"><AIcon icon="mdi-check-bold" /></ABtn>
      <ABtn icon class="btn--danger"><AIcon icon="mdi-close-octagon" /></ABtn>
      <ABtn icon class="btn--error"><AIcon icon="mdi-delete" /></ABtn>
    </div>
  </div>
</template>

<style scoped>
.buttons-page {
  padding-bottom: 200px;
}
.buttons-page__buttons {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: var(--gap);
  gap: var(--gap);
}
</style>
