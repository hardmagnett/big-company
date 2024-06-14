<script setup lang="ts">
import {ref} from "vue";

const isDialogDefaultOpen = ref(false)
const isDialogClosingConfiguredOpen = ref(false)
</script>
<template>
  <div class="view-dialog">
    <Teleport to="#page-header-place">
      <APageHeader> Диалоговое окно </APageHeader>
    </Teleport>


    <h2>C Настройками по умолчанию</h2>
    <p>Поведение такое-же как и в браузере</p>
    <ul>
      <li>Закрывается по нажатию на esc</li>
      <li>Не закрывается по клику снаружи</li>
    </ul>
    <ADialog
        :isOpen="isDialogDefaultOpen"
        @close="isDialogDefaultOpen = false"
    >
      <p>Контент диалогового окна по умолчанию</p>
    </ADialog>

    <ABtn @click="isDialogDefaultOpen = true">Открыть диалоговое окно</ABtn>

    <h2>C Настройками закрытия</h2>
    <p>Поведение такое-же как и в браузере</p>
    <ul>
      <li>Не Закрывается по нажатию на esc</li>
      <li>Закрывается по клику снаружи</li>
    </ul>
    <ADialog
        remainOnEsc
        closeOnClickOutside
        :isOpen="isDialogClosingConfiguredOpen"
        @close="isDialogClosingConfiguredOpen = false"
    >
      <p>Контент диалогового окна c изменением настроек закрытия</p>
    </ADialog>

    <ABtn @click="isDialogClosingConfiguredOpen = true">Открыть диалоговое окно</ABtn>

  </div>

  <p v-for="n in 100" :key="n">: {{ n }}</p>
</template>

<style scoped>
.view-dialog {

}
</style>

