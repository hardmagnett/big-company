<script setup lang="ts">
import { } from 'vue'

export interface Props {
  book: {
    name: string,
    quantity: number
  }
}
const props = withDefaults(defineProps<Props>(), {
})

</script>

<template>
  <div class="books-form-elements">
    <div class="am-cols">

      <!--<AInput-->
      <!--    name="book-name"-->
      <!--    v-model="book.name"-->

      <!--    @blur="v$.books.$each.$response.$errors[index].name.$touch"-->
      <!--    :error-messages="v$.books.$each.$response.$errors[index].name.map(e=>e.$message)"-->
      <!--    class="am-col-6 am-col-sm-4 am-col-xxl-2"-->

      <!--    label="Название *"-->
      <!--&gt;</AInput>-->


      <!--v-model="book.name"-->
      <!--@blur="v$.books.$each.$response.$errors[index].name.$touch"-->
      <!--:error-messages="v$.books.$each.$response.$errors[index].name.map(e=>e.$message)"-->
      <AInput
          name="book-name"

          class="am-col-6 am-col-sm-4 am-col-xxl-2"

          label="Название *"
      ></AInput>

      <!--:error-messages="getErrorsForPath(`books.${index}.quantity`)"-->
      <!--<AInput-->
      <!--    type="number"-->
      <!--    name="quantity"-->
      <!--    v-model="book.quantity"-->
      <!--    @blur="v$.books.$each.$response.$errors[index].quantity.$touch"-->
      <!--    :error-messages="v$.books.$each.$response.$errors[index].quantity.map(e=>e.$message)"-->
      <!--    class="am-col-4 am-col-sm-4 am-col-xxl-2"-->

      <!--    label="Количество *"-->
      <!--&gt;</AInput>-->
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
.books-form-elements {}
</style>
