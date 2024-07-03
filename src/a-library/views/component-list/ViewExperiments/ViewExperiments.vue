<script setup lang="ts">
import {reactive} from 'vue'
import ChildOne from "@/a-library/views/component-list/ViewExperiments/ChildOne.vue";
import ChildTwo from "@/a-library/views/component-list/ViewExperiments/ChildTwo.vue";
import {globalProperties} from "@/main";
import BooksOrderFormPartBooks from "@/a-library/views/component-list/ViewForm/BooksOrderFormPartBooks.vue";

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

    />
    <ABtn type="submit">Ок</ABtn>
    </form>

  </div>
</template>

<style scoped>
.view-experiments {}
</style>
