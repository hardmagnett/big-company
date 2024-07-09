<script setup lang="ts">

import {reactive} from "vue";
import AMultiSelect from "@/a-library/components/forms/AMultiselect/AMultiSelect.vue";

let multiselectVals = reactive({
  singleInNumbersOutNumber: null,
  singleInStringsOutString: null,
  singleInObjectOutNumber: null,
  singleInObjectOutString: null,
  singleInObjectOutObject: null,

  multiInNumberOutNumberArray: [],
  multiInStringOutStringArray: [],
  multiInObjectOutNumberArray: [],
  multiInObjectOutStringArray: [],
  multiInObjectOutObjectArray: [],
})

let optionVals = {
  numbers: [1,3,6,7,13],
  strings: ['one', 'three', 'six', 'seven', 'thirteen'],
  objects: [
    {theId: 1, theTitle: 'one'},
    {theId: 3, theTitle: 'three'},
    {theId: 6, theTitle: 'six'},
    {theId: 7, theTitle: 'seven'},
    {theId: 13, theTitle: 'thirteen'},
  ]
}
</script>

<template>
  <div class="inputs-page">
    <Teleport to="#page-header-place">
      <APageHeader> Элементы форм </APageHeader>
    </Teleport>

    <h2>Текстовое поле</h2>
    <p>По умолчанию.</p>
    <AInput label="Лейбл" hideHint></AInput>
    <br />
    <p>Без лейбла. С плейлхолдером.</p>
    <AInput
      value="default value"
      hideLabel
      placeholder="placeholder for text"
      hideHint
    ></AInput>
    <br />

    <h2>Чекбокс</h2>
    <ACheckBox label="С указанием label" hide-hint />
    <ACheckBox
      label="Чекбокс со скрытым местом для заголовка"
      hide-hint
      hide-label
    />
    <ACheckBox hide-hint hide-label />
    <br />

    <h2>Мультиселект</h2>
    <h3>number[] -> number</h3>
    <p>Value: <code>{{$debugVar(multiselectVals.singleInNumbersOutNumber)}}</code></p>
    <p>Options: <code>{{optionVals.numbers}}</code></p>
    <AMultiSelect
        v-model="multiselectVals.singleInNumbersOutNumber"
        :options="optionVals.numbers"
    />
  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;
}
</style>
