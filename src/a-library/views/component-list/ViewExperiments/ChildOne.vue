<script setup lang="ts">
import { reactive, unref } from "vue";
import { minLength, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const formValues = reactive({
  name: "Hello",
});
const formRules = {
  name: { required, minLength: minLength(3), $autoDirty: true },
};

// const { value } = useVuelidate(formRules, formValues);
// const v$ = value


const v$ = useVuelidate(formRules, formValues)
const v$val = v$.value

// const {  } = useVuelidate(formRules, formValues);

// Make any changes here to get bug. For example uncomment next string.
// let a = 1;
</script>

<template>
  <div class="child-one">
    <pre style="font-size: 8px">
      {{ formValues }}
    </pre>
    <p>child</p>
    <input v-model="formValues.name" />
    <pre>
      {{v$val.name.$errors.map(e=>e.$message)}}
      <!--{{ v$.name.$errors.map((e) => e.$message) }}-->
    </pre>
  </div>
</template>
