<template>
  <div class="buttons-page">
    <APageHeaderWithTeleport text="Кнопки" />

    <h2>Обычные</h2>
    <div class="buttons-page__buttons">
      <ABtn>Main</ABtn>
      <ABtn class="a-btn--success">Success</ABtn>
      <ABtn class="a-btn--danger">Danger</ABtn>
      <ABtn class="a-btn--error">Error</ABtn>
    </div>
    <div class="buttons-page__buttons">
      <ABtn class="a-btn--small">Small</ABtn>
    </div>

    <h2>Тональные</h2>
    <div class="buttons-page__buttons">
      <ABtn class="a-btn--tonal">Main</ABtn>
      <ABtn class="a-btn--success a-btn--tonal">Success</ABtn>
      <ABtn class="a-btn--danger a-btn--tonal">Danger</ABtn>
      <ABtn class="a-btn--error a-btn--tonal">Error</ABtn>
    </div>

    <h2>Ссылки</h2>
    <div class="buttons-page__buttons">
      <ABtn
        href="https://stackoverflow.com/users/1638298/flamytwista"
        target="_blank"
        >stackoverflow.com</ABtn
      >
    </div>
    <h2>RouterLink</h2>
    <div class="buttons-page__buttons">
      <ABtn :to="{ path: '/' }">На главную</ABtn>
    </div>

    <h2>С иконками</h2>
    <h3>Обычные</h3>
    <div class="buttons-page__buttons">
      <ABtn>Редактировать <AIcon icon="mdi-pencil" /></ABtn>
      <ABtn class="a-btn--error">Удалить <AIcon icon="mdi-delete" /></ABtn>
    </div>
    <h3>Специально для иконок</h3>
    <div class="buttons-page__buttons">
      <ABtn icon><AIcon icon="mdi-pencil" /></ABtn>
      <ABtn icon class="a-btn--success"><AIcon icon="mdi-check-bold" /></ABtn>
      <ABtn icon class="a-btn--danger"><AIcon icon="mdi-close-octagon" /></ABtn>
      <ABtn icon class="a-btn--error"><AIcon icon="mdi-delete" /></ABtn>
      <div style="background-color: #333; padding: 0 16px">
        <ABtn icon class="a-btn--white"><AIcon icon="mdi-delete" /></ABtn>
      </div>
    </div>
    <h2>Disabled</h2>
    <div class="buttons-page__buttons">
      <ABtn disabled>Main</ABtn>
      <ABtn disabled class="a-btn--tonal">Main</ABtn>
      <ABtn disabled>Редактировать <AIcon icon="mdi-pencil" /></ABtn>
      <ABtn disabled icon><AIcon icon="mdi-pencil" /></ABtn>
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
<script setup lang="ts">
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
</script>
