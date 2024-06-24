<script setup lang="ts">
import {ref, reactive} from 'vue';

// let valText = ref('')
// let valBool = ref(false)

let vals = reactive({
  text: '',
  bool: false
})

</script>

<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>
    <p>
      В форме работает навигация по элементам при помощи
      <code class="mod--code">tab</code> и <code class="mod--code">shift + tab</code>.
    </p>

    <!--<p>valText: {{valText}}</p>-->
    <!--<p>valBool: {{valBool}}</p>-->
    <p>vals: {{vals}}</p>
    <div class="am-cols view-form__inputs">

      <!--v-model="valText"-->
      <AInput
          v-model="vals.text"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Текстовое поле"
          hideHint
      ></AInput>

      <!--v-model="valBool"-->
      <ACheckBox
          v-model="vals.bool"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"

          label="Чекбокс-поле"  hide-hint/>
    </div>
    <br>
    <AFormButtonsWrapper>
      <ABtn class="a-btn--tonal">Отмена</ABtn>
      <!--type="submit"-->
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

