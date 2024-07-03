<script setup lang="ts">
import {computed, watch} from 'vue'
import {email, minLength, required, numeric, integer, minValue} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

export interface Props {
  formPart: {
    name: string,
    quantity: number
  }
}

// const emit = defineEmits(['update:modelValue'])
const emit = defineEmits(['needToRemove'])

const props = withDefaults(defineProps<Props>(), {
})

const formRules = {
  name: {
    required,
    minLength: minLength(3),
  },
  quantity: {
    numeric, integer, minValue: minValue(1)
  }
}

const v$ = useVuelidate(formRules, props.formPart)

const formPartBook = computed(()=>{
    const result = props.formPart
    return result
  }
)

let b = 1;

</script>

<template>
  <div class="books-order-form-part-books">
    <div class="am-cols">
      <AInput
          name="book-name"
          v-model="formPartBook.name"
          @blur="v$.name.$touch"
          :error-messages="v$.name.$errors.map(e=>e.$message)"

          class="am-col-6 am-col-sm-4 am-col-xxl-2"

          label="Название *"
      ></AInput>
      <AInput
          type="number"
          name="quantity"
          v-model="formPartBook.quantity"
          @blur="v$.quantity.$touch"
          :error-messages="v$.quantity.$errors.map(e=>e.$message)"
          class="am-col-4 am-col-sm-4 am-col-xxl-2"

          label="Количество *"
      ></AInput>
      <div class="am-col-2 am-col-sm-4 am-col-xxl-2">
        <AInputControl>
          <!--@click="formValues.books.splice(index, 1)"-->
          <ABtn
              @click="emit('needToRemove')"
              icon
              class="a-btn--error"
          ><AIcon icon="mdi-delete"
          /></ABtn>
        </AInputControl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.books-order-form-part-books {}
</style>
