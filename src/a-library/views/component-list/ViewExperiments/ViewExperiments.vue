<script setup lang="ts">
import {reactive} from 'vue'
import ChildOne from "@/a-library/views/component-list/ViewExperiments/ChildOne.vue";
import {minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

let formValues = reactive({
  lastname: "outer",
});
const formRules = {
  lastname: { required, minLength: minLength(3), $autoDirty: true },
}

const v$ = useVuelidate(formRules, formValues, {
  $scope: false
})

</script>

<template>
  <div class="view-experiments">
    <pre style="font-size: 8px">
      <p>vals: {{ formValues }}</p>
    </pre>

    <ChildOne />
    <input v-model="formValues.lastname">
    <pre>
      {{v$.lastname.$errors.map(e=>e.$message)}}
    </pre>
  </div>
</template>
