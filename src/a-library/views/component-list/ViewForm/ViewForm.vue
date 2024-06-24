<script setup lang="ts">
import {ref, reactive} from 'vue';

let formValues = reactive({
  textWithValidation: '',
  textWithoutValidation: '',
  booleanWithValidation: false,
  booleanWithoutValidation: false,
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

    <p>vals: {{ formValues }}</p>
    <div class="am-cols view-form__inputs">



      <AInput
          rules="required:true|max:5|boolRule"
          name="Текстовое поле валидируемое"
          v-model="formValues.textWithValidation"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Текстовое поле валидируемое"
          hideHint
      ></AInput>

      <!--rules=""-->
      <AInput
          v-model="formValues.textWithoutValidation"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Текстовое поле не валидируемое"
          hideHint
      ></AInput>
      <ACheckBox
          v-model="formValues.booleanWithValidation"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          name="Чекбокс-поле валидируемое"
          rules="required:true"

          label="Чекбокс-поле валидируемое"  hide-hint/>

      <ACheckBox
          v-model="formValues.booleanWithoutValidation"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"

          label="Чекбокс-поле не валидируемое"  hide-hint/>
    </div>
    <br>
    <AFormButtonsWrapper>
      <ABtn class="a-btn--tonal">Отмена</ABtn>

      <ABtn type="submit" >Ок</ABtn>
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

