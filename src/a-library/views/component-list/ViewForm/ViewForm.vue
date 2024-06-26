<script setup lang="ts">
import {ref, reactive} from 'vue';
import {validateForm} from '@/a-library/vue-plugins/aValidator/aValidatorPlugin';



let formValues = reactive({
  textWithValidation: 'AAA',
  textWithoutValidation: '',
  booleanWithValidation: false,
  booleanWithoutValidation: false,
})

const submitHandler = (e:Event)=>{
  console.log('Листенер снаружи')
  // console.log('submitHandler')
  // const event = e as SubmitEvent;
  // console.log(event); console.log('^...event:')
  // const form = event.target as HTMLFormElement
  //
  // validateForm(form).then(result=>{
  //   if(result===true) console.log('validation passed');
  //   if(result===false) console.log('validation failed');
  // }).catch(e=>console.error('field not found',e));

}

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
    <AForm @submit.prevent="submitHandler">
      <div class="am-cols view-form__inputs">



        <AInput
            rules="required:true|minlength:3"
            name="Обязательное. Минимум 3 символа."
            v-model="formValues.textWithValidation"
            class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
            label="Обязательное. Минимум 3 символа."
            hideHint
        ></AInput>

        <AInput
            v-model="formValues.textWithoutValidation"
            class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
            label="Невалидируемое"
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
    </AForm>

  </div>
</template>

<style scoped>
.view-form {
  .view-form__inputs {

  }
}
</style>

