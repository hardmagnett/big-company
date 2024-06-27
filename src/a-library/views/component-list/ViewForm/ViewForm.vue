<script setup lang="ts">
import { reactive } from "vue";

import { useForm } from 'vee-validate';
// const { values, defineField } = useForm();
import { toTypedSchema } from '@vee-validate/yup';
import { object, string }  from 'yup';

// const schema = yup.object({
//   email: yup.string().required().email(),
// });

const { values,
  errors, defineField, handleSubmit,
  defineInputBinds, setValues, resetForm } = useForm({
  validationSchema: toTypedSchema(object({
    email: string().required().email(),
    password: string().min(6).required(),
  })),
  // способ 1 для установки значений
  // resetForm сбросит до этих значений
  initialValues: {
    email: 'test@example.com',
    password: 'p@$$w0rd',
  }
  // ,
});
// способ 2 для установки значений
// resetForm сбросит не до этих значений, а до пустых.
// setValues({
//     email: 'test@example.com',
//     password: 'p@$$w0rd',
// })



const [email, emailAttrs] =
defineField('email', {
  // Так будет валидировать не по input, а то-ли по change то-ли по blur.
  // Чтобы это работало с кастомными компонентами - они должны эмитить blur.
  // validateOnModelUpdate: false,

  // Так можно добавить всякое разное в передачу атрибутов.
  // В state можно поковыряться через ctrl+Q
  props: state => ({
    // error: state.errors[0],
    errors: state.errors,
  }),
});
// Можно ещё вот так передавать. Вместо обьекта - колбэк.
// defineField(
//   'email',
//   state => {
//     return {
//       // validate aggressively as long as there are errors on the input
//       validateOnModelUpdate: state.errors.length > 0,
//     };
// });

const [password, passwordAttrs] = defineField('password');

let formValues = reactive({
  textWithValidation: "AAA",
  textWithoutValidation: "",
  booleanWithValidation: false,
  booleanWithoutValidation: false,
});

// const submitHandler = () => {
// };
const submitHandler = handleSubmit(() => {
  console.log('here----------------------------------')
});

let fullReset = ()=>{
  resetForm({
    values: {
      email: '',
      password: '',
    },
  })
}
</script>

<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>
    <p>
      В форме работает навигация по элементам при помощи
      <code class="mod--code">tab</code> и
      <code class="mod--code">shift + tab</code>.
    </p>

    <pre>vals: {{ formValues }}</pre>
    <pre>values: {{values}}</pre>
    <pre>errors: {{errors}}</pre>
    <pre>email: {{email}}</pre>
    <pre>emailAttrs: {{emailAttrs}}</pre>
    <!--<form @submit.prevent="submitHandler">-->
    <form @submit.prevent="submitHandler">

      <div class="am-cols view-form__inputs">

        <div class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3">

          <!--class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"-->
          <AInput
              name="email"
              v-model="password"
              v-bind="passwordAttrs"
              class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
              label="Password"
              hideHint
          ></AInput>
          {{errors.password}}
        </div>

        <div class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3">

          <!--class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"-->
        <AInput
            name="email"
            v-model="email"
            v-bind="emailAttrs"
            class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
            label="E-Mail"
            hideHint
        ></AInput>
        {{errors.email}}
        </div>

        <AInput
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
          label="Чекбокс-поле валидируемое"
          hide-hint
        />

        <ACheckBox
          v-model="formValues.booleanWithoutValidation"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Чекбокс-поле не валидируемое"
          hide-hint
        />
      </div>
      <br />
      <AFormButtonsWrapper>
        <ABtn class="a-btn--tonal"
            @click="resetForm"

        >Сброс</ABtn>

        <ABtn type="submit">Ок</ABtn>
        <template #left>
          <ABtn class="a-btn--tonal a-btn--small"
            @click="fullReset"

          >Полный сброс</ABtn>
        </template>
      </AFormButtonsWrapper>
    </form>
  </div>
</template>

<style scoped>
.view-form {
  .view-form__inputs {
  }
}
</style>
