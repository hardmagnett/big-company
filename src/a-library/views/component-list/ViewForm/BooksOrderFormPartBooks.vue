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

const formRules = {
  name: {
    required,
    minLength: minLength(3),
    $autoDirty: true
  },
  quantity: {
    numeric, minValue: minValue(1), $autoDirty: true
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
          :error-messages="v$.name.$errors.map(e=>e.$message)"

          class="am-col-6 am-col-sm-4 am-col-xxl-2"

          label="Название *"
      ></AInput>

      <!--@blur="v$.books.$each.$response.$errors[index].quantity.$touch"-->
      <AInput
          type="number"
          name="quantity"
          v-model="formPartBook.quantity"

          :error-messages="v$.quantity.$errors.map(e=>e.$message)"
          class="am-col-4 am-col-sm-4 am-col-xxl-2"

          label="Количество *"
      ></AInput>
      <!--<div class="am-col-2 am-col-sm-4 am-col-xxl-2">-->
      <!--  <AInputControl>-->
      <!--    <ABtn-->
      <!--        @click="formValues.books.splice(index, 1)"-->
      <!--        icon-->
      <!--        class="a-btn&#45;&#45;error"-->
      <!--    ><AIcon icon="mdi-delete"-->
      <!--    /></ABtn>-->
      <!--  </AInputControl>-->
      <!--</div>-->
    </div>
  </div>
</template>

<style scoped>
.books-order-form-part-books {}
</style>
