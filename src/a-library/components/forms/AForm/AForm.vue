<script setup lang="ts">
import { } from 'vue'
import {validateForm, fieldErrors} from "@/a-library/vue-plugins/aValidator/AValidator";

defineOptions({
  inheritAttrs: false
})

const submitHandler = (e:Event)=>{
  const event = e as SubmitEvent;
  const form = event.target as HTMLFormElement

  event.stopPropagation()

  validateForm(form).then(isFormValid=>{
    if (isFormValid) {
      console.log('validation passed')
    }
    else {
      console.log('validation failed')
    }
  }).catch(e=>console.error('field not found',e));

}

</script>

<template>
  <form class="a-form" @submit.prevent="submitHandler">
    <slot></slot>
    <p>-={{ fieldErrors }}=-</p>

  </form>
</template>

<style scoped>
.a-form {}
</style>
