<script setup lang="ts">
import {} from "vue";
import RootParent from "@/a-library/views/component-list/ViewExperiments/RootParent.vue";
</script>

<template>
  <div class="view-about">
    <Teleport to="#page-header-place">
      <APageHeader> О проекте </APageHeader>
    </Teleport>
    <RootParent />
    <h2>Новые технологии</h2>
    <p>
      В проекте используются свежие (на 2024-й год) возможности браузера, <br />
      Поэтому правильная работа гарантируется лишь в Chrome на десктопе и на
      смартфонах.
      <br />
    </p>
    <p>Что из нового:</p>
    <ul>
      <li>@container style(--boolean-css-variable)</li>
      <li>Dialog, Popover</li>
      <li>Anchor Positioning</li>
    </ul>

    <h2>Нет UI-UX-зависимостей</h2>
    <p>
      Зависимые библиотеки применяются лишь для хранения, обработки и валидации
      данных.
    </p>
    <p>Все UI-UX-компоненты самописные.</p>
    <h2>Мокапирование бэкенда</h2>
    <p>Бэкенда для данного проекта не существует.</p>
    <p>Все GET/PUT/POST/DELETE и прочие запросы эмулируются в браузере</p>
    <p>После перезагрузки страницы все внесённые изменения сбрасываются.</p>
    <h2>Адаптив</h2>
    <p>Предусмотрена ширина окна браузера от 320px до 2560px.</p>
    <p>На более высоких разрешениях пользователи обычно включают масштабирование либо в ОС либо в браузере.</p>
  </div>
</template>

<style scoped>
.view-about {
}
</style>
