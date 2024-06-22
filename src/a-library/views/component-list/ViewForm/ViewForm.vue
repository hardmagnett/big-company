<script setup lang="ts">
import {ref} from 'vue';

let valText = ref('')
let valBool = ref(false)

</script>

<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>
    <p>
      В форме работает навигация по элементам при помощи клавиши
      <code class="mod--code">tab</code>.
    </p>

    <div class="am-cols view-form__inputs">

      <AInput
          v-model="valText"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Текстовое поле"
          hideHint
      ></AInput>

      <ACheckBox
          v-model="valBool"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"

          label="Чекбокс-поле"  hide-hint/>
    </div>
    <br>
    <AFormButtonsWrapper>
      <ABtn class="a-btn--tonal">Отмена</ABtn>
      <ABtn>Ок</ABtn>
      <template #left>
        <ABtn class="a-btn--tonal a-btn--small">Кнопка слева</ABtn>
      </template>
    </AFormButtonsWrapper>

  </div>
</template>

<style scoped>
.view-form {
  .view-form__inputs {

  }
}
</style>

