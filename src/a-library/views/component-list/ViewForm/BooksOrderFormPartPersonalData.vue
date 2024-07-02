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
})

const formRules = {
    name: { required, minLength: minLength(3), $autoDirty: true },
    email: { email, $autoDirty: true },
    address: { required, minLength: minLength(10) },
}

const v$ = useVuelidate(formRules, props.modelValue)



const formPartPersonalData = computed({
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
      <AInput
          name="user-name"
          v-model="formPartPersonalData.name"
          :error-messages="v$.name.$errors.map(e=>e.$message)"
          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Имя *"
      ></AInput>

      <AInput
          name="email"
          v-model="formPartPersonalData.email"
          :error-messages="v$.email.$errors.map(e=>e.$message)"
          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Email"
      ></AInput>

      <AInput
          name="address"
          v-model="formPartPersonalData.address"
          :error-messages="v$.address.$errors.map(e=>e.$message)"
          @blur="v$.address.$touch"
          class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
          label="Адрес * (lazy)"
      ></AInput>
    </div>
</template>

<style scoped>
.sub-form-personal-data {}
</style>
