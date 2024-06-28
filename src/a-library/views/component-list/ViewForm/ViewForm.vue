<script setup lang="ts">
import {reactive, ref} from "vue";

import { type FormSchema, type FormErrors, formSchema} from './ViewFormZod'

const formErrors = ref<FormErrors>()

let formValues = reactive<FormSchema>({
  user: {
    name: "AA",
    email: "",
  },
  // todo:: как сделать чтобы сдесь были поля, которых нет в схеме?
  unnecessary: 'ooo',
  // booleanWithValidation: false,
  // booleanWithoutValidation: false,
});

// const errors = ref<FormErrors>()


import useValidation from './useValidation';
const {
  validate,
//   // errors,
//   // isValid,
//   // clearErrors,
//   // getError,
//   // scrollToError
}
= useValidation(
    formSchema,
    formValues,
//     // {mode: 'lazy'}
//     {}
)

const submitHandler = async () => {

  await validate();

  // const parseResult = formSchema.safeParse(formValues)
  // if (parseResult.success) {
  //   console.log('valid')
  //   // formErrors: FormErrors = {}
  //   // formErrors.value = {}
  //   formErrors.value = null
  // } else {
  //   const errors: FormErrors = parseResult.error.format()
  //   formErrors.value = errors
  //   console.log(errors)
  // }
};
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

    <p>vals: {{ formValues }}</p>
    <form @submit.prevent="submitHandler">
      <div class="am-cols view-form__inputs">

        <!--hideHint-->
        <AInput
          name="name"
          v-model="formValues.user.name"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          :error-messages="formErrors?.user?.name?._errors"
          label="Имя"

        ></AInput>
        <!--hideHint-->
        <AInput
          name="email"
          v-model="formValues.user.email"
          :error-messages="formErrors?.user?.email?._errors"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Email"

        ></AInput>

        <AInput
            name="unnecessary"
            v-model="formValues.unnecessary"
            class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
            label="Необязательное"
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
        <ABtn class="a-btn--tonal">Отмена</ABtn>

        <ABtn type="submit">Ок</ABtn>
        <template #left>
          <ABtn class="a-btn--tonal a-btn--small">Кнопка слева</ABtn>
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
