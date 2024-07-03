<script setup lang="ts">
import {computed} from 'vue'
import {email, minLength, required, numeric, minValue} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

export interface Props {
  formPart: {
    name: string,
    quantity: number
  }
}

// const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
})


const formPartBook = computed(()=>{
      const result = props.formPart
      // console.log(result); console.log('^...result:')
      return result
    }
)
let a = 1;

</script>

<template>
  <div class="child-two">
    <AInput
        name="book-name"
        v-model="formPartBook.name"

        class="am-col-6 am-col-sm-4 am-col-xxl-2"

        label="Название *"
    ></AInput>

  </div>
</template>

<style scoped>
.child-two {}
</style>
