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
    <ul>
      <li>Закрывается по нажатию на esc</li>
      <li>Закрывается по клику снаружи</li>
    </ul>
    <ADialog
        :isOpen="isDialogDefaultOpen"
        @needToClose="isDialogDefaultOpen = false"
    >
      <p>Контент диалогового окна по умолчанию</p>
    </ADialog>

    <ABtn @click="isDialogDefaultOpen = true">Открыть диалоговое окно</ABtn>

    <br>

    <h2>C Настройками закрытия</h2>
    <ul>
      <li>Не закрывается по нажатию на esc</li>
      <li>Не закрывается по клику снаружи</li>
    </ul>
    <ADialog
        remainOnEsc
        remainOnClickOutside
        :isOpen="isDialogClosingConfiguredOpen"
        @needToClose="isDialogClosingConfiguredOpen = false"
    >
      <!--<p>Контент диалогового окна c изменением настроек закрытия</p>-->
      <p>Контент</p>
    </ADialog>

    <ABtn @click="isDialogClosingConfiguredOpen = true">Открыть диалоговое окно</ABtn>

    <p v-for="n in 100" :key="n">: {{ n }}</p>
  </div>


</template>

<style scoped>
.view-dialog {

}
</style>

