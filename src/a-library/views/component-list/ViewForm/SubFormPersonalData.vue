<script setup lang="ts">
import {reactive} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import {required, email, minLength, helpers, numeric, minValue} from '@vuelidate/validators'

let formValues = reactive({
  user: {
    name: "AA",
    email: "",
    // address: "",
    address: "BB",
  },
});

const formRules = {
  $autoDirty: true,
  // $lazy: true,
  user: {
    name: { required, minLength: minLength(3) },
    email: { email },
    address: { required, minLength: minLength(10) },
  },
}

const v$ = useVuelidate(formRules, formValues)





</script>

<template>
    <div class="sub-form-personal-data am-cols">
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
</template>

<style scoped>
.sub-form-personal-data {}
</style>
