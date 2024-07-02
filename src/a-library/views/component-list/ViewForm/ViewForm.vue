<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useVuelidate } from '@vuelidate/core'
import {required, email, minLength, helpers, numeric, minValue} from '@vuelidate/validators'

// todo:: когда всё будет работать на обычном JS-е
// - Переделать на TS-е
// - Пройти чистки
// - попробовать завернуть ошибки вот так https://dev.to/gaisinskii/handling-form-errors-with-vuelidate-in-vuejs-30-5fp

// import type { IForm } from '@/interface/form.interface'

import { globalProperties } from "@/main";

// const formattedErrors = computed(() => useValidationErrors<IForm>(v$.value.$errors))

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
      // name: "Букварь",
      name: "",
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
  // $autoDirty: true,
  user: {
    name: { required, minLength: minLength(3)},
    email: { email },
    address: { required, minLength: minLength(10) },
  },
  books: {
    $each: helpers.forEach({
      name: {
        required, minLength: minLength(3)
      },
      quantity: {
        numeric, minValue: minValue(1)
      }
    })
  },
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

// const getTextErrors = (param: any)=>{
//
// }

const submitHandler = async () => {
  // await validateForm();

  // if (isFormValid.value) {
  //   globalProperties.$toast({ message: "Форма заполнена верно" });
  // } else {
  //   scrollToFirstError(".p-invalid", { offset: 24 });
  //   globalProperties.$toast({
  //     message: "Форма заполнена неверно",
  //     type: "error",
  //   });
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

    <h2>Заказ книг</h2>

    <!--<p>vals: {{ formValues }}</p>-->
    <!--<p>v$: {{ v$ }}</p>-->
    <form @submit.prevent="submitHandler">
      <h3>Персональные данные</h3>
      <div class="am-cols">
        <!--:error-messages="getErrorsForPath('user.name')"-->
        <AInput
          name="user-name"
          v-model="formValues.user.name"
          @blur="v$.user.name.$touch"
          :error-messages="v$.user.name.$errors.map(e=>e.$message)"
          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Имя *"
        ></AInput>

        <AInput
          name="email"
          @blur="v$.user.email.$touch"
          v-model="formValues.user.email"

          :error-messages="v$.user.email.$errors.map(e=>e.$message)"
          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Email"
        ></AInput>

        <AInput
          name="address"
          v-model="formValues.user.address"
          @blur="v$.user.address.$touch"
          :error-messages="v$.user.address.$errors.map(e=>e.$message)"

          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Адрес *"
        ></AInput>
      </div>

      <br />

      <div class="am-cols">
        <h3 class="am-col-6 am-col-sm-8 am-col-xxl-4 mod--mb-0">Книги</h3>
        <div class="am-col-6 am-col-sm-4 am-col-xxl-2">
          <ABtn
            class="a-btn--small"
            @click="formValues.books.push({ name: '', quantity: 0 })"
          >
            <AIcon icon="mdi-plus-thick" size="small" />
            Добавить
          </ABtn>
        </div>
      </div>

      <!--:error-messages="getErrorsForPath(`books`)"-->
      <AInputControlHint

      ></AInputControlHint>

      <template v-for="(book, index) in formValues.books" :key="index">
        <div class="am-cols">
          <!--:error-messages="formErrors?.books?.[index]?.name?._errors"-->

          <!--v-for="error in v$.collection.$each.$response.$errors[index].name"-->
          <AInput
            name="book-name"
            v-model="book.name"

            @blur="v$.books.$each.$response.$errors[index].name.$touch"
            :error-messages="v$.books.$each.$response.$errors[index].name.map(e=>e.$message)"
            class="am-col-6 am-col-sm-4 am-col-xxl-2"

            label="Название *"
          ></AInput>
          <!--:error-messages="getErrorsForPath(`books.${index}.quantity`)"-->
          <AInput
            type="number"
            name="quantity"
            v-model="book.quantity"
            @blur="v$.books.$each.$response.$errors[index].quantity.$touch"
            :error-messages="v$.books.$each.$response.$errors[index].quantity.map(e=>e.$message)"
            class="am-col-4 am-col-sm-4 am-col-xxl-2"

            label="Количество *"
          ></AInput>
          <div class="am-col-2 am-col-sm-4 am-col-xxl-2">
            <AInputControl>
              <ABtn
                @click="formValues.books.splice(index, 1)"
                icon
                class="a-btn--error"
                ><AIcon icon="mdi-delete"
              /></ABtn>
            </AInputControl>
          </div>
        </div>
      </template>

      <!--:error-messages="getErrorsForPath(`agreeWithConditions`)"-->
      <ACheckBox
        hide-label
        v-model="formValues.agreeWithConditions"
        :error-messages="v$.agreeWithConditions.$errors.map(e=>e.$message)"
        class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3 mod--mb-half"
        name="agreeWithConditions"
        label="Я согласен со всеми условиями"

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
