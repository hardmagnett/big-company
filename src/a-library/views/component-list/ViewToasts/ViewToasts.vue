<script setup lang="ts">

</script>
<template>
  <div class="view-toasts">
    <Teleport to="#page-header-place">
      <APageHeader> Тосты </APageHeader>
    </Teleport>

    <h2>Цветные тосты</h2>
    <p>Для просмотра тостов нужно понажимать на кнопки</p>
    <div class="view-toasts__color-buttons">
      <ABtn class="btn--error">Error</ABtn>
      <ABtn class="btn--error">Error</ABtn>
      <ABtn class="btn--error">Error</ABtn>
      <ABtn class="btn--error">Error</ABtn>
      <ABtn class="btn--error">Error</ABtn>
      <ABtn class="btn--error">Error</ABtn>

      <ABtn @click="$toast({message: 'Длинное предлинное предлинное предлинное сообщение'})">Main</ABtn>
      <ABtn @click="$toast({message: 'Зеленое Сообщение',  type: 'success'})" class="btn--success">Success</ABtn>
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
      <br>
      https://dev.to/zafaralam/app-wide-toast-notifications-in-vue-3-2fp9
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

