<script setup lang="ts">
import { inject } from "vue";
import type { CreateNotification } from "@/a-library/components/other/AToast/useAToast";
const createNotification = inject<CreateNotification>("create-notification");
</script>
<template>
  <div class="view-toasts">
    <Teleport to="#page-header-place">
      <APageHeader> Тосты </APageHeader>
    </Teleport>

    <h2>Цветные тосты</h2>
    <p>Для просмотра тостов нужно понажимать на кнопки</p>
    <div class="view-toasts__color-buttons">
      <!--<ABtn @click="$toast('Main')">Main</ABtn>-->
      <ABtn @click.prevent="
          () => {
            createNotification({
              message: 'This is a notification from the App.vue Component',
            });
          }
        ">Main</ABtn>
      <ABtn @click="$toast('Main', {type: 'warning'})" class="btn--success">Success</ABtn>
      <ABtn class="btn--danger">Danger</ABtn>
      <ABtn class="btn--error">Error</ABtn>
    </div>
    <h2>Перенос строки в тосте</h2>
    <ABtn>Показать тост</ABtn>

    <br>
    <p>
      Вдохновляться этим
      <br>
      https://vue-toastification.maronato.dev/
    </p>
  </div>
</template>

<style scoped>
.view-toasts {
  .view-toasts__color-buttons {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: var(--gap);
    gap: var(--gap);
  }
}
</style>

