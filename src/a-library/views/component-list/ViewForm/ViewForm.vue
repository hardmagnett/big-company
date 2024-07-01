<script setup lang="ts">
import {reactive, ref} from "vue";

import { type FormSchema, type FormErrors, formSchema} from './ViewFormZod'
import { globalProperties } from "@/main";

const formErrors = ref<FormErrors>()

let formValues = reactive<FormSchema>({
  user: {
    name: "AA",
    email: "",
    address: "",
  },
  books: [{
    name: 'Букварь',
    quantity: 3,
  }],
  // todo:: как сделать чтобы сдесь были поля, которых нет в схеме?
  unnecessary: 'ooo',
  agreeWithConditions: false,
  sendSpam: true,
  // booleanWithoutValidation: false,
});

// const errors = ref<FormErrors>()


import useValidation from './useValidation';
const {
  validateForm,
  isFormValid,
  clearErrors,
  getErrorsForPath,
  scrollToFirstError
}
= useValidation(
    formSchema,
    formValues,
    // {mode: 'lazy'}
    {mode: 'eager'}
//     {}
)

const submitHandler = async () => {
  await validateForm();

  if (isFormValid.value) {
    globalProperties.$toast({message: "Форма заполнена верно"});

  } else {
    scrollToFirstError('.p-invalid', { offset: 24 });
    globalProperties.$toast({
      message: "Форма заполнена неверно",
      type: "error",
    });
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

    <h2>Заказ книг</h2>

    <!--<p>vals: {{ formValues }}</p>-->
    <form @submit.prevent="submitHandler">
      <h3>Персональные данные</h3>
      <div class="am-cols">

        <!--hideHint-->
        <!--getError('name')-->
        <!--:error-messages="formErrors?.user?.name?._errors"-->
        <!--todo:: довать такое имя класса для ошибки, которое я обычно даю-->
        <AInput
          name="user-name"
          v-model="formValues.user.name"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-2"
          :error-messages="getErrorsForPath('user.name')"
          label="Имя *"
          :class="{ 'p-invalid': getErrorsForPath('user.name').length }"

        ></AInput>
        <!--hideHint-->
        <AInput
          name="email"
          v-model="formValues.user.email"
          :error-messages="getErrorsForPath('user.email')"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-2"
          label="Email"

        ></AInput>

        <!--hideHint-->
        <AInput
            name="address"
            v-model="formValues.user.address"
            :error-messages="getErrorsForPath('user.address')"
            class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-2"
            label="Адрес *"

        ></AInput>
      </div>

      <br />

      <div class="am-cols">
        <h3 class="am-col-2 mod--mb-0" >Книги</h3>
        <div class="am-col-2">
          <ABtn
              class="a-btn--small"
              @click="formValues.books.push({ name: '', quantity: 0 })"
          >
            <AIcon icon="mdi-plus-thick" size="small" />
            Добавить
          </ABtn>
        </div>
      </div>

      <AInputControlHint
          :error-messages="getErrorsForPath(`books`)"

      ></AInputControlHint>


      <template
          v-for="(book, index) in formValues.books"
          :key="index">
        <div class="am-cols">
          <!--:error-messages="formErrors?.user?.name?._errors"-->
          <AInput
              name="book-name"
              v-model="book.name"
              class="am-col-2"
              :error-messages="formErrors?.books?.[index]?.name?._errors"
              label="Название *"

          ></AInput>
          <!--:class="{ 'p-invalid': getErrorsForPath('user.name').length }"-->
          <!--:error-messages="getErrorsForPath('user.name')"-->
          <!--:error-messages="formErrors?.books?.[index]?.quantity?._errors"-->
          <AInput
              type="number"
              name="quantity"
              v-model="book.quantity"
              class="am-col-2"

              :error-messages="getErrorsForPath(`books.${index}.quantity`)"
              label="Количество *"

          ></AInput>
          <div class="am-col-2">
            <AInputControl

            >
              <ABtn
                  @click="formValues.books.splice(index, 1)"
                  icon class="a-btn--error"><AIcon icon="mdi-delete" /></ABtn>
            </AInputControl>

          </div>
        </div>

      </template>



      <ACheckBox
          hide-label
          v-model="formValues.agreeWithConditions"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3 mod--mb-half"
          name="agreeWithConditions"
          label="Я согласен со всеми условиями"
          :error-messages="getErrorsForPath(`agreeWithConditions`)"
      />
      <!--<br>-->

      <ACheckBox
          hide-label
          v-model="formValues.sendSpam"
          class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
          label="Присылать мне спам-рассылку"
          hide-hint
      />
      <br>

      <AFormButtonsWrapper>
        <ABtn class="a-btn--tonal">Отмена</ABtn>

        <ABtn type="submit">Ок</ABtn>
        <template #left>
          <ABtn class="a-btn--tonal a-btn--small" @click="clearErrors">Очистить ошибки</ABtn>
        </template>
      </AFormButtonsWrapper>
    </form>
  </div>
</template>

<style scoped>
.view-form {
}
</style>
