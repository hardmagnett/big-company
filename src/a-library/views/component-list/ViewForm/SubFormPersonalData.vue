<script setup lang="ts">
import {reactive, watch, computed} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import {required, email, minLength, helpers, numeric, minValue} from '@vuelidate/validators'

export interface Props {
  modelValue: {
      name: string,
      email: string,
      address: string
  }
}

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
  // optPropWithDefaultValue: false,
})


// const formValues = defineModel()

// let formValues = reactive({
//   user: {
//     name: "AA",
//     email: "",
//     // address: "",
//     address: "BB",
//   },
// });

// const formRules = {
//   $autoDirty: true,
//   // $lazy: true,
//   user: {
//     name: { required, minLength: minLength(3) },
//     email: { email },
//     address: { required, minLength: minLength(10) },
//   },
// }
//
// const v$ = useVuelidate(formRules, props.modelValue)



const innerFormPart = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
    <div class="sub-form-personal-data am-cols">
      <!--:error-messages="getErrorsForPath('user.name')"-->
      <!--@blur="v$.user.name.$touch"-->
      <!--:error-messages="v$.user.name.$errors.map(e=>e.$message)"-->

      <!--:model-value="modelValue.name"-->
      <!--@input="doit"-->
      <AInput
          name="user-name"
          v-model="innerFormPart.name"


          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Имя *"
      ></AInput>

      <!--@blur="v$.user.email.$touch"-->
      <!--:error-messages="v$.user.email.$errors.map(e=>e.$message)"-->
      <!--<AInput-->
      <!--    name="email"-->
      <!--    -->
      <!--    v-model="formValues.user.email"-->

      <!--    -->
      <!--    class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"-->
      <!--    label="Email"-->
      <!--&gt;</AInput>-->

      <!--@blur="v$.user.address.$touch"-->
      <!--:error-messages="v$.user.address.$errors.map(e=>e.$message)"-->
      <!--<AInput-->
      <!--    name="address"-->
      <!--    v-model="formValues.user.address"-->
      <!--    -->

      <!--    class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"-->
      <!--    label="Адрес *"-->
      <!--&gt;</AInput>-->
    </div>
</template>

<style scoped>
.sub-form-personal-data {}
</style>
