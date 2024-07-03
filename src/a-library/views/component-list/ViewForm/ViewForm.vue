<script setup lang="ts">
import { reactive, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import createUUID from "@/a-library/helpers/language/string/createUUID";

// todo:: сделать переводы ошибок на русский

import { globalProperties } from "@/main";
import BooksOrderFormPartBooks from "@/a-library/views/component-list/ViewForm/BooksOrderFormPartBooks.vue";
import BooksOrderFormPartPersonalData from "@/a-library/views/component-list/ViewForm/BooksOrderFormPartPersonalData.vue";

let formValues = reactive({
  user: {
    // name: "Ридли",
    name: "Р",
    email: "",
    address: "Ул. Учебная, д.13",
  },
  books: [
    {
      id: createUUID(),
      name: "Первая",
      quantity: 0,
    },
    {
      id: createUUID(),
      name: "Букварь",
      quantity: 0,
    },
    {
      id: createUUID(),
      name: "Синяя",
      quantity: 0,
    },
    {
      id: createUUID(),
      name: "GoF",
      quantity: 4,
    },
  ],
  agreeWithConditions: false,
  sendSpam: true,
});

const formRules = {
  books: {
    requiredOneBook: helpers.withMessage(
      "Добавьте хотя-бы одну книгу",
      required,
    ),
  },

  agreeWithConditions: {
    checked: helpers.withMessage(
      "Необходимо согласие",
      (value) => value === true,
    ),
    $autoDirty: true,
  },
  sendSpam: {},
};

const v$ = useVuelidate(formRules, formValues);
const v$val = v$.value;

const forceRerenderHackKey = ref(0);

const clearErrors = () => {
  v$.value.$reset();
};

const resetForm = () => {
  Object.assign(formValues, {
    user: {
      name: "",
      email: "",
      address: "",
    },
    books: [],
    agreeWithConditions: false,
    sendSpam: true,
  });

  forceRerenderHackKey.value++;
};

const submitHandler = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    globalProperties.$toast({ message: "Форма заполнена верно" });
  } else {
    globalProperties.$toast({
      message: "Форма заполнена неверно",
      type: "error",
    });
  }
};

const removeBook = (bookIndex: number) => {
  formValues.books.splice(bookIndex, 1);
  if (formValues.books.length === 0) {
    v$.value.books.$touch();
  }
};
</script>

<template>
  <div class="view-form">
    <Teleport to="#page-header-place">
      <APageHeader> Форма </APageHeader>
    </Teleport>

    <p>Есть валидация.</p>
    <p>Состоит из нескольких компонентов form-part.</p>
    <p>
      Работает навигация по элементам при помощи
      <code class="mod--code">tab</code> и
      <code class="mod--code">shift + tab</code>.
    </p>
    <br />

    <h2>Заказ книг</h2>
    <!--<p>-={{ $t('message.hello') }}=-</p>-->
    <!--<p>-={{ $t('message.hello2', { msg: 'hello' }) }}=-</p>-->
    <p>-={{ $t('message.hello2', { msg: 'hello' }) }}=-</p>

    <!--<pre style="font-size: 10px">-->
    <!--    <p>vals: {{ formValues }}</p>-->
    <!--  </pre>-->

    <form @submit.prevent="submitHandler" novalidate>
      <h3>Персональные данные</h3>

      <BooksOrderFormPartPersonalData
        :form-part="formValues.user"
        :key="forceRerenderHackKey"
      />

      <br />
      <div class="am-cols">
        <h3 class="am-col-6 am-col-sm-8 am-col-xxl-4 mod--mb-0">Книги</h3>
        <div class="am-col-6 am-col-sm-4 am-col-xxl-2">
          <ABtn
            class="a-btn--small"
            @click="
              formValues.books.push({ name: '', quantity: 0, id: createUUID() })
            "
          >
            <AIcon icon="mdi-plus-thick" size="small" />
            Добавить
          </ABtn>
        </div>
      </div>

      <AInputControlHint
        :error-messages="
          v$val.books.$errors
            .filter((e) => e.$validator === 'requiredOneBook')
            .map((e) => e.$message)
        "
      ></AInputControlHint>

      <TransitionGroup
        name="a--animated-list__transition-item"
        tag="div"
        class="a--animated-list__transition-group"
      >
        <div
          v-for="(book, index) in formValues.books"
          :key="book.id"
          class="a--animated-list__transition-item"
        >
          <BooksOrderFormPartBooks
            :form-part="book"
            @needToRemove="removeBook(index)"
          />
        </div>
      </TransitionGroup>

      <ACheckBox
        hide-label
        :error-messages="
          v$val.agreeWithConditions.$errors.map((e) => e.$message)
        "
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
          <ABtn class="a-btn--tonal" @click="resetForm">Сброс</ABtn>

          <ABtn type="submit">Ок</ABtn>
          <template #left>
            <ABtn class="a-btn--tonal a-btn--small" @click="clearErrors"
              >Скрыть ошибки</ABtn
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
