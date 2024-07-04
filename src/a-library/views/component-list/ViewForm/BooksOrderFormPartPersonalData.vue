<script setup lang="ts">
import { computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
// import { required, email, minLength } from "@vuelidate/validators";
import {  email, helpers} from "@vuelidate/validators";
import { required, minLength } from "@/a-library/third-party/vuelidate/i18n-validators";

export interface Props {
  formPart: {
    name: string;
    email: string;
    address: string;
  };
}

const props = withDefaults(defineProps<Props>(), {});

const formRules = {
  // autoDirty ещё пригодиться
  name: {
    required,

    minLength: minLength(4)({fieldname: 'Погоняло'}),

    // Работает
    // minLength: helpers.withParams(
    //     {fieldname: 'Имя'},
    //     minLength(3)
    // ),


    $autoDirty: true
  },
  // name: { required, minLength: minLength(3) },
  email: { email },
  // address: { required, minLength: minLength(10) },
  address: {
    required,
    minLength:
    minLength(
      10,
    // ),
    )({fieldname: 'Бунгало'}),
    // )({}),
    // )(),
    $autoDirty: true  // убрать потом
  },
};

const v$ = useVuelidate(formRules, props.formPart);

const formPartPersonalData = computed(() => {
  const result = props.formPart;
  return result;
});
</script>

<template>
  <div class="books-order-form-part-personal-data am-cols">
    <AInput
      autofocus
      name="user-name"
      v-model="formPartPersonalData.name"
      @blur="v$.name.$touch"
      :error-messages="v$.name.$errors.map((e) => e.$message)"
      class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
      label="Имя *"
    ></AInput>

    <AInput
      name="email"
      v-model="formPartPersonalData.email"
      @blur="v$.email.$touch"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
      label="Email"
    ></AInput>

    <AInput
      name="address"
      v-model="formPartPersonalData.address"
      :error-messages="v$.address.$errors.map((e) => e.$message)"
      @blur="v$.address.$touch"
      class="am-col-12 am-col-sm-4 am-col-xl-4Z am-col-xxl-2"
      label="Адрес *"
    ></AInput>
  </div>
</template>

<style scoped>
.books-order-form-part-personal-data {
}
</style>
