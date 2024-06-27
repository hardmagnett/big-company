<script setup lang="ts">
import {reactive, ref} from "vue";

import { type Form, type FormErrors, formSchema} from './ViewFormZod'

// Ideally, put this code in a schema file
// const formSchema = z.object({
//   email: z.string()
//       .min(1, { message: "Email обязателен" })
//       .min(3, {message: 'Минимальная длина: 3'})
//       .max(50)
//   ,
//   name: z.string()
//       .min(1, { message: "Имя обязательно" })
//       .min(3, {message: 'Минимальная длина: 3'})
//   ,
// });
// type Form = z.infer<typeof formSchema>
// type FormErrors = z.inferFormattedError<typeof formSchema>

let formValues = reactive<Form>({
// let formValues = reactive({
  name: "AAA",
  email: "",
  // unnecessary: 'ooo',
  // booleanWithValidation: false,
  // booleanWithoutValidation: false,
});

// const errors = ref<FormErrors>()

const submitHandler = () => {
  const result = formSchema.safeParse(formValues)
  if (result.success) {
    console.log('valid')
  } else {
    // const errors: FormattedErrors = result.error.format()
    const errors: FormErrors = result.error.format()
    console.log(errors)
  }
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
        <AInput
          name="name"
          v-model="formValues.name"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Имя"
          hideHint
        ></AInput>

        <AInput
          name="email"
          v-model="formValues.email"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Email"
          hideHint
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
