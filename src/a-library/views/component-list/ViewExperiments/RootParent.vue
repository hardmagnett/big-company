<script setup lang="ts">
import {reactive, ref} from 'vue'
import ChildOne from "@/a-library/views/component-list/ViewExperiments/ChildOne.vue";
import {minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {globalProperties} from "@/main";

let formValues = reactive({
  lastname: "Bye",
});
const formRules = {
  lastname: { required, minLength: minLength(3), $autoDirty: true },
}

// Зависает
const v$ = useVuelidate(formRules, formValues, {})
const v$val = v$.value

// Работает вроде
// const { value } = useVuelidate(formRules, formValues);
// const v$ = value
// const v$ = useVuelidate(formRules, formValues).value;

// const validatorWrapped = ref(v$)

const submitHandler = async () => {

  const isFormCorrect = await v$.value.$validate()
  // const isFormCorrect = await v$.$validate()

  if (isFormCorrect) {
    globalProperties.$toast({ message: "Форма заполнена верно" });
  } else {
    globalProperties.$toast({
      message: "Форма заполнена неверно",
      type: "error",
    });
  }
};

// let a = 1;
</script>

<template>
  <div class="root-parent">
    <pre style="font-size: 8px">
      <p>vals: {{ formValues }}</p>
    </pre>

    <form @submit.prevent="submitHandler">
    <ChildOne />
      <p>parent</p>
    <input v-model="formValues.lastname">
      <ABtn type="submit">Ок</ABtn>
    </form>
    <pre>
      <!--{{v$.lastname.$errors.map(e=>e.$message)}}-->
      {{v$val.lastname.$errors.map(e=>e.$message)}}


    </pre>
  </div>
</template>
