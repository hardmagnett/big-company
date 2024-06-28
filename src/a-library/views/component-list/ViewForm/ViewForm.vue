<script setup lang="ts">
import {reactive, ref} from "vue";

import { type FormSchema, type FormErrors, formSchema} from './ViewFormZod'

const formErrors = ref<FormErrors>()

let formValues = reactive<FormSchema>({
  user: {
    name: "AA",
    email: "",
  },
  books: [{
    name: 'Букварь',
    quantity: 3,
  }],
  // todo:: как сделать чтобы сдесь были поля, которых нет в схеме?
  unnecessary: 'ooo',
  agreeWithConditions: false,
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
      <div class="am-cols">

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

        <!--hide-hintZ-->
        <!--rules="required:true"-->
        <ACheckBox
          v-model="formValues.agreeWithConditions"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          name="agreeWithConditions"
          label="agreeWithConditions"
          :error-messages="formErrors?.agreeWithConditions?._errors"

        />

        <ACheckBox
          v-model="formValues.booleanWithoutValidation"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Чекбокс-поле не валидируемое"
          hide-hint
        />
      </div>

      <br />

      <template
          v-for="(book, index) in formValues.books"
          :key="index">
        <div class="am-cols">
          <!--:error-messages="formErrors?.user?.name?._errors"-->
          <AInput
              name="name"
              v-model="book.name"
              class="am-col-3"
              :error-messages="formErrors?.books?.[index]?.name?._errors"
              label="Название книги"

          ></AInput>
          <AInput
              type="number"
              name="name"
              v-model="book.quantity"
              class="am-col-3"
              :error-messages="formErrors?.books?.[index]?.quantity?._errors"
              label="Количество"

          ></AInput>
          <div class="am-col-3">
            <button @click="formValues.books.splice(index, 1)">
              Удалить
            </button>
          </div>
        </div>

      </template>
      <button
          type="button"
          @click="formValues.books.push({ name: '', quantity: 0 })">
        Add Book
      </button>
      <p>booksArrayErrors: {{formErrors?.books?._errors}}</p>

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
}
</style>
