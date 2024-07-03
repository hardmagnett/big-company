<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useVuelidate } from '@vuelidate/core'
import {required, email, minLength, helpers, numeric, minValue} from '@vuelidate/validators'

// todo:: когда всё будет работать на обычном JS-е
// - Переделать на TS-е
// - Пройти чистки
// - попробовать завернуть ошибки вот так https://dev.to/gaisinskii/handling-form-errors-with-vuelidate-in-vuejs-30-5fp

import { globalProperties } from "@/main";
import BooksOrderFormPartBooks from "@/a-library/views/component-list/ViewForm/BooksOrderFormPartBooks.vue";
import BooksOrderFormPartPersonalData from "@/a-library/views/component-list/ViewForm/BooksOrderFormPartPersonalData.vue";

let formValues = reactive({
  user: {
    name: "AA",
    email: "",
    // address: "",
    address: "BB",
  },
  books: [
    {
      name: "Первая",
      quantity: 3,
    },
    {
      name: "Букварь",
      quantity: 3,
    },
    {
      name: "Синяя",
      quantity: 0,
    },
  ],
  agreeWithConditions: false,
  sendSpam: true,
});

const formRules = {
  // books: {
  //   todo:: сделать проверку на наличие хотя-бы одной книги.
  //   required: helpers.withMessage('Добавьте хотя-бы одну книгу', required),
  //   minLength: minLength(1),
  //   // $lazy: true,
  // },
  // Цикл с книгами пока-что пропустил

  agreeWithConditions: {
    checked: helpers.withMessage(
        'Необходимо согласие',
        value => value === true
    ),
    $autoDirty: true,
  },
  sendSpam: {},
}

const v$ = useVuelidate(formRules, formValues)
const v$val = v$.value

const submitHandler = async () => {

  const isFormCorrect = await v$.value.$validate()

  if (isFormCorrect) {
    globalProperties.$toast({ message: "Форма заполнена верно" });
  } else {
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

    <!--todo:: раскомментить-->
    <!--<p>Есть валидация.</p>-->
    <!--<p>Состоит из нескольких компонентов form-part.</p>-->
    <!--<p>-->
    <!--  Работает навигация по элементам при помощи-->
    <!--  <code class="mod&#45;&#45;code">tab</code> и-->
    <!--  <code class="mod&#45;&#45;code">shift + tab</code>.-->
    <!--</p>-->


    <h2>Заказ книг</h2>
<pre style="font-size: 8px">
    <p>vals: {{ formValues }}</p>
  </pre>

    <form @submit.prevent="submitHandler">
      <h3>Персональные данные</h3>

      <BooksOrderFormPartPersonalData v-model="formValues.user"/>


      <!--<br />-->

      <!--<div class="am-cols">-->
      <!--  <h3 class="am-col-6 am-col-sm-8 am-col-xxl-4 mod&#45;&#45;mb-0">Книги</h3>-->
      <!--  <div class="am-col-6 am-col-sm-4 am-col-xxl-2">-->
      <!--    <ABtn-->
      <!--      class="a-btn&#45;&#45;small"-->
      <!--      @click="formValues.books.push({ name: '', quantity: 0 })"-->
      <!--    >-->
      <!--      <AIcon icon="mdi-plus-thick" size="small" />-->
      <!--      Добавить-->
      <!--    </ABtn>-->
      <!--  </div>-->
      <!--</div>-->

      <!--:error-messages="v$.books.$silentErrors.filter(e=>e.$validator === 'required').map(e=>e.$message)"-->
      <AInputControlHint

      ></AInputControlHint>

      <!--Zeslint-disable-next-line vue/valid-v-model-->
      <!--<BooksOrderFormPartBooks v-for="(book, index) in formValues.books" :book="book"-->
      <!--v-model="book"-->

      <!--@update:model-value="((newValue) => {formValues.books.find(book=>book.id === newValue.id) = newValue})"-->

      <!--:model-value="book"-->

      <!--todo:: попробовать сделать анимированое редактирование списка-->

      <!--@update:modelValue="updateBook"-->
      <!--:model-value="formValues.books[index]"-->
      <BooksOrderFormPartBooks
          v-for="(book, index) in formValues.books"
          :key="index"
          :form-part="book"
          @needToRemove="()=>{formValues.books.splice(index, 1)}"
      />

      <!--<template v-for="(book, index) in formValues.books" :key="index">-->
      <!--  <div class="am-cols">-->
      <!--    &lt;!&ndash;:error-messages="formErrors?.books?.[index]?.name?._errors"&ndash;&gt;-->

      <!--    &lt;!&ndash;v-for="error in v$.collection.$each.$response.$errors[index].name"&ndash;&gt;-->

      <!--    &lt;!&ndash;@blur="v$.books.$each.$response.$errors[index].name.$touch"&ndash;&gt;-->
      <!--    &lt;!&ndash;:error-messages="v$.books.$each.$response.$errors[index].name.map(e=>e.$message)"&ndash;&gt;-->
      <!--    <AInput-->
      <!--      name="book-name"-->
      <!--      v-model="book.name"-->


      <!--      class="am-col-6 am-col-sm-4 am-col-xxl-2"-->

      <!--      label="Название *"-->
      <!--    ></AInput>-->
      <!--    &lt;!&ndash;:error-messages="getErrorsForPath(`books.${index}.quantity`)"&ndash;&gt;-->

      <!--    &lt;!&ndash;@blur="v$.books.$each.$response.$errors[index].quantity.$touch"&ndash;&gt;-->
      <!--    &lt;!&ndash;:error-messages="v$.books.$each.$response.$errors[index].quantity.map(e=>e.$message)"&ndash;&gt;-->
      <!--    <AInput-->
      <!--      type="number"-->
      <!--      name="quantity"-->
      <!--      v-model="book.quantity"-->

      <!--      class="am-col-4 am-col-sm-4 am-col-xxl-2"-->

      <!--      label="Количество *"-->
      <!--    ></AInput>-->
      <!--    <div class="am-col-2 am-col-sm-4 am-col-xxl-2">-->
      <!--      <AInputControl>-->
      <!--        <ABtn-->
      <!--          @click="formValues.books.splice(index, 1)"-->
      <!--          icon-->
      <!--          class="a-btn&#45;&#45;error"-->
      <!--          ><AIcon icon="mdi-delete"-->
      <!--        /></ABtn>-->
      <!--      </AInputControl>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--</template>-->

      <!--:error-messages="getErrorsForPath(`agreeWithConditions`)"-->


      <ACheckBox
        hide-label
        :error-messages="v$val.agreeWithConditions.$errors.map(e=>e.$message)"
        class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3 mod--mb-half"
        name="agreeWithConditions"
        label="Я согласен со всеми условиями"
        v-model="formValues.agreeWithConditions"

      />

      <ACheckBox
        hide-label
        v-model="formValues.sendSpam"
        class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3"
        label="Присылать мне спам-рассылку"
        hide-hint
      />
      <br />

      <div class="am-cols">
        <AFormButtonsWrapper class="am-col-12 am-col-xxl-6">
          <ABtn class="a-btn--tonal">Отмена</ABtn>

          <ABtn type="submit">Ок</ABtn>
          <template #left>
            <!--@click="clearErrors"-->
            <ABtn class="a-btn--tonal a-btn--small"
              >Очистить ошибки</ABtn
            >
          </template>
        </AFormButtonsWrapper>
      </div>
    </form>
  </div>
</template>

<style scoped>
.view-form {
}
</style>
