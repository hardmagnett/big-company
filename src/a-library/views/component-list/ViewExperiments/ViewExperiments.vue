<script setup lang="ts">
import {reactive} from 'vue'
import ChildOne from "@/a-library/views/component-list/ViewExperiments/ChildOne.vue";
import ChildTwo from "@/a-library/views/component-list/ViewExperiments/ChildTwo.vue";
import {globalProperties} from "@/main";
import BooksOrderFormPartBooks from "@/a-library/views/component-list/ViewForm/BooksOrderFormPartBooks.vue";
import {helpers} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

let formValues = reactive({
  user: {
    name: "AA",
    email: "",
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
  ],
  agreeWithConditions: false,
  sendSpam: true,
});
const formRules = {
  // books: {
  //   required: helpers.withMessage('Добавьте хотя-бы одну книгу', required),
  //   minLength: minLength(1),
  //   // $lazy: true,
  //   $each: helpers.forEach({
  //     name: {
  //       required,
  //       minLength: minLength(3),
  //     },
  //     quantity: {
  //       numeric, minValue: minValue(1)
  //     }
  //   })
  // },
  // Цикл с книгами пока-что пропустил

  agreeWithConditions: {
    checked: helpers.withMessage(
        'Необходимо согласие',
        value => value === true
    ),
    $autoDirty: true,
  },
}

const v$ = useVuelidate(formRules, formValues)

const submitHandler = async () => {

  console.log(formValues); console.log('^...formValues:')
  console.log(formValues.agreeWithConditions); console.log('^...formValues.agreeWithConditions:')
};

</script>

<template>
  <div class="view-experiments">
    <Teleport to="#page-header-place">
      <APageHeader> Эксперименты </APageHeader>
    </Teleport>

    <pre style="font-size: 8px">
      <p>vals: {{ formValues }}</p>
    </pre>

    <form @submit.prevent="submitHandler">
    <ChildOne v-model="formValues.user" />

      <ChildTwo
          v-for="(book, index) in formValues.books"
          :key="index"
          :form-part="book"


      />


    <ACheckBox
        hide-label
        label="Я согласен со всеми условиями"
        v-model="formValues.agreeWithConditions"

        :error-messages="v$.agreeWithConditions.$errors.map(e=>e.$message)"
        class="am-col-12 am-col-sm-6 am-col-xl-4 am-col-xxl-3 mod--mb-half"

    />
    <ABtn type="submit">Ок</ABtn>
    </form>

  </div>
</template>

<style scoped>
.view-experiments {}
</style>
