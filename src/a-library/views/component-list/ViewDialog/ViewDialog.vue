<script setup lang="ts">
import { ref } from "vue";

const isDialogDefaultOpen = ref(false);
const isDialogConfiguredOpen = ref(false);
</script>
<template>
  <div class="view-dialog">
    <Teleport to="#page-header-place">
      <APageHeader> Диалоговое окно </APageHeader>
    </Teleport>

    <h2>C Настройками по умолчанию</h2>
    <ul>
      <li>Закрывается по нажатию на esc</li>
      <li>Закрывается по клику снаружи</li>
    </ul>
    <ADialog
      :isOpen="isDialogDefaultOpen"
      @needToClose="isDialogDefaultOpen = false"
      @apply="isDialogDefaultOpen = false"
    >
      <p>Диалоговое окно с настройками по умолчанию</p>
    </ADialog>

    <ABtn @click="isDialogDefaultOpen = true">Открыть диалоговое окно</ABtn>

    <br />

    <h2>C дополнительными настройками</h2>
    <ul>
      <li>Не закрывается по нажатию на esc</li>
      <li>Не закрывается по клику снаружи</li>
      <li>Заголовок</li>
      <li>Цвета и тексты для кнопок</li>
      <li>Скрытие кнопок</li>
    </ul>
    <p class="mod--text-tiny">
      В Chrome на элементе dialog 2-й раз не отрабатывает preventDefault
      (2024-06).
      <br />
      Поэтому при 2-м нажатии на esc окно закрывается и больше не открывается.
      <br />
      В остальных браузерах работает нормально.
      <br />
      Пока-что не исправляю - надеюсь в гугле сами исправят.
    </p>
    <ADialog
      remainOnEsc
      remainOnClickOutside
      text-header="Заголовок окна"
      textApply="Да!"
      textCancel="Отменить это!"
      cssClassApply="a-btn--error"
      cssClassCancel="a-btn--error"
      hideApply
      :isOpen="isDialogConfiguredOpen"
      @needToClose="isDialogConfiguredOpen = false"
    >
      <p>Диалоговое окно с дополнительными настройками</p>
    </ADialog>

    <ABtn @click="isDialogConfiguredOpen = true">Открыть диалоговое окно</ABtn>
  </div>
</template>

<style scoped>
.view-dialog {
}
</style>
