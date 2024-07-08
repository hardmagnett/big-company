<script setup lang="ts">
import { } from 'vue'

</script>

<template>
  <div class="employees-filter am-cols">

    <!--v-model="formPartPersonalData.name"-->
    <!--@blur="v$.name.$touch"-->
    <!--:error-messages="v$.name.$errors.map((e) => e.$message)"-->
    <AInput
        autofocus
        class="am-col-12 am-col-sm-6"
        label="Имя"
        hide-hint
    ></AInput>
    <AInput
        autofocus
        class="am-col-12 am-col-sm-6"
        label="Отдел"
        hide-hint
    ></AInput>
  </div>
</template>

<style scoped>
.employees-filter {
}
</style>
