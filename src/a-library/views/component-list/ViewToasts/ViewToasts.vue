<script setup lang="ts">
import {onMounted, ref} from "vue";

import { globalProperties } from "@/main";
let show = ref(false)

onMounted(() => {
  globalProperties.$toast({
    message: "Длинное предлинное предлинное предлинное сообщение",
    autoClose: false,
  });
  globalProperties.$toast({
    message: "Длинное предлинное предлинное предлинное сообщение",
    autoClose: false,
    type: 'success'
  });
  globalProperties.$toast({
    message: "Длинное предлинное предлинное предлинное сообщение",
    autoClose: false,
    type: 'success'
  });
  globalProperties.$toast({
    message: "Длинное предлинное предлинное предлинное сообщение",
    autoClose: false,
    type: 'success'
  });
  // globalProperties.$toast({
  //   // message: "Длинное предлинное предлинное предлинное сообщение",
  //   message: "Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j\'y crois) — je ne vous connais plus, vous n\'êtes plus mon ami, vous n\'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.",
  //   autoClose: false,
  //   type: 'danger'
  // });
  globalProperties.$toast({
    message: "Длинное предлинное предлинное предлинное сообщение",
    autoClose: false,
    type: 'error'
  });
});
</script>
<template>
  <div class="view-toasts">
    <Teleport to="#page-header-place">
      <APageHeader> Тосты </APageHeader>
    </Teleport>

    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>





    <h2>Цветные тосты</h2>
    <p>Для просмотра тостов нужно понажимать на кнопки</p>
    <div class="view-toasts__color-buttons">
      <ABtn class="a-btn--error">Error</ABtn>
      <ABtn class="a-btn--error">Error</ABtn>
      <ABtn class="a-btn--error">Error</ABtn>
      <ABtn class="a-btn--error">Error</ABtn>
      <ABtn class="a-btn--error">Error</ABtn>
      <ABtn class="a-btn--error">Error</ABtn>

      <ABtn
        @click="
          $toast({
            message: 'Длинное предлинное предлинное предлинное сообщение',
          })
        "
        >Main</ABtn
      >
      <ABtn
        @click="$toast({ message: 'Зеленое Сообщение', type: 'success' })"
        class="a-btn--success"
        >Success</ABtn
      >
      <ABtn class="btn--danger">Danger</ABtn>
      <ABtn class="btn--error">Error</ABtn>
    </div>
    <h2>Перенос строки в тосте</h2>
    <ABtn>Показать тост</ABtn>

    <br />

    <ABtn
      @click="
        $toast({
          message:
            'Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j\'y crois) — je ne vous connais plus, vous n\'êtes plus mon ami, vous n\'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.',
        })
      "
    >
      Очень длинное сообщение
    </ABtn>

    <br />
    <h2>Подключение</h2>
    <p>
      Для того чтобы тосты работали, <br />
      не забыть вставить компонент
      <code class="mod--code">&lt;AToasts /&gt;</code> в
      <code class="mod--code">App.vue</code>
    </p>
    <p>Например так</p>
    <pre class="mod--code">
&lt;template&gt;
  &lt;div class=&quot;app&quot;&gt;
    &lt;AContainer&gt;
      &lt;RouterView /&gt;
    &lt;/AContainer&gt;
  &lt;/div&gt;
  &lt;AToasts /&gt;
&lt;/template&gt;
</pre
    >
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

.v-enter-active,
.v-leave-active {
  transition: opacity 5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.v-enter-to,
.v-leave-from {
  /*opacity: 0;*/
  outline: 1px solid green;
}
</style>
