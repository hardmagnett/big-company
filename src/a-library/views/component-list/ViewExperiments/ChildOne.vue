<script setup lang="ts">
import {reactive, unref} from 'vue'
import {minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";


const formValues = reactive({
  name: "Inner",
})
const formRules = {
  name: { required, minLength: minLength(3), $autoDirty: true },
}
const v$ = useVuelidate(formRules, formValues)

// Make any changes here to get bug. For example uncomment next string.
// let a = 1;
</script>

<template>
  <div class="child-one">
    <pre style="font-size: 8px;">
      {{formValues}}
    </pre>
    <input v-model="formValues.name">
  </div>
</template>
