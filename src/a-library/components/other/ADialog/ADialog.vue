<script setup lang="ts">
// todo:: все что касается этой модалки и новых css-фич- в гисты
import { } from 'vue'

</script>

<template>
  <button popovertarget="a-dialog-popover"> Open Popover </button>
  <div
      class="a-dialog"
      id="a-dialog-popover"
      popover
  >
    <button popovertarget="a-dialog-popover" popovertargetaction="hide">
      закрыть
    </button>
    <p>This is ADialog</p>
  </div>
</template>

<style scoped>
.a-dialog {
  &::backdrop {
    /*стилизация фона ЗА модалкой*/
    pointer-events: none; /*это почему-то не работает*/
    background-color: var(--clr-overlay);
  }
}
</style>
