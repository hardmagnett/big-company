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

    <ABtn @click="$toast({message: 'Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j\'y crois) — je ne vous connais plus, vous n\'êtes plus mon ami, vous n\'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.'})">
      Очень длинное сообщение
    </ABtn>

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

