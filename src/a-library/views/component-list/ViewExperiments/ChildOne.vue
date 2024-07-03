<script setup lang="ts">
import {computed} from 'vue'
import {email, minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

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

const formPartPersonalData = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    console.log('set personal')
    emit('update:modelValue', newValue)
  }
})

const formRules = {
  name: { required, minLength: minLength(3), $autoDirty: true },
  email: { email, $autoDirty: true },
  address: { required, minLength: minLength(10) },
}

const v$ = useVuelidate(formRules, props.modelValue)

let a = 1;
</script>

<template>
  <div class="child-one">
    <AInput
        v-model="formPartPersonalData.name"
        label="Имя *"
        :error-messages="v$.name.$errors.map(e=>e.$message)"
    ></AInput>


  </div>
</template>

<style scoped>
.child-one {}
</style>
