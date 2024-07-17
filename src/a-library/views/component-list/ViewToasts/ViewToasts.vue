<script setup lang="ts">
// Вывести тост скриптом примерно вот так.
// import { onMounted } from "vue";
// import { globalProperties } from "@/main";
// onMounted(() => {
//   globalProperties.$toast({
//     message: "Длинное <br> строка 2 \n строка 3 /n строка 4",
//     autoClose: false,
//     type: "success",
//   });
// });
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
</script>
<template>
  <div class="view-toasts">
    <APageHeaderWithTeleport text="Тосты" />

    <h2>Цветные тосты</h2>
    <p>Для просмотра тостов нужно понажимать на кнопки</p>
    <div class="view-toasts__color-buttons">
      <ABtn
        @click="
          $toast({
            message: 'Информационное сообщение',
          })
        "
        >Main</ABtn
      >
      <ABtn
        @click="
          $toast({ message: 'Сообщение об успешном действии', type: 'success' })
        "
        class="a-btn--success"
        >Success</ABtn
      >
      <ABtn
        class="a-btn--danger"
        @click="$toast({ message: 'Сообщение об опасности', type: 'danger' })"
        >Danger</ABtn
      >
      <ABtn
        class="a-btn--error"
        @click="$toast({ message: 'Сообщение об ошибке', type: 'error' })"
        >Error</ABtn
      >
    </div>
    <h2>Нестандартное содержание</h2>
    <ABtn
      @click="
        $toast({
          message: `
              При указании <code class='mod--code'>printAsHTML: true</code> <br>
              в тосте можно выводить HTML. <br>
              Например, в этом тосте используются:
              <ul>
                <li>переносы строк</li>
                <li>списки</li>
                <li>span с указанием класса</li>
              </ul>
            `,
          printAsHTML: true,
        })
      "
      >Вывод HTML</ABtn
    >

    <br />

    <ABtn
      @click="
        $toast({
          message:
            'Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j\'y crois) — je ne vous connais plus, vous n\'êtes plus mon ami, vous n\'êtes plus мой верный раб, comme vous dites. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur, садитесь и рассказывайте.',
        })
      "
    >
      Очень длинное сообщение
    </ABtn>

    <br />
    <h2>Постоянное сообщение</h2>

    <ABtn
      @click="
        $toast({
          message:
            'Это сообщение будет находиться здесь до тех пор пока по нему не кликнут.',
          autoClose: false,
        })
      "
    >
      Показать
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
</style>
