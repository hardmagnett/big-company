<script setup lang="ts">

import {reactive} from "vue";
import AMultiSelect from "@/a-library/components/forms/AMultiselect/AMultiSelect.vue";

let multiselectVals = reactive({
  singleInNumbersOutNumber: null,
  singleInStringsOutString: null,
  singleInObjectsOutNumber: null,
  singleInObjectsOutString: null,
  singleInObjectsOutObject: null,

  multiInNumberOutNumberArray: [],
  multiInStringOutStringArray: [],
  multiInObjectsOutNumberArray: [],
  multiInObjectsOutStringArray: [],
  multiInObjectsOutObjectArray: [],
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

    <h2>Мультиселект</h2>
    <h3>number[] -> number</h3>
    <p>
      <span>Value: <code>{{$debugVar(multiselectVals.singleInNumbersOutNumber)}}</code></span>
      &nbsp;&nbsp;&nbsp;
      <span>Options: <code>{{optionVals.numbers}}</code></span>
    </p>
    <AMultiSelect
        v-model="multiselectVals.singleInNumbersOutNumber"
        :options="optionVals.numbers"
    />

    <br>
    <h3>string[] -> string</h3>
    <p>
      <span>Value: <code>{{$debugVar(multiselectVals.singleInStringsOutString)}}</code></span>
      &nbsp;&nbsp;&nbsp;
      <span>Options: <code>{{optionVals.strings}}</code></span>
    </p>
    <AMultiSelect
        v-model="multiselectVals.singleInStringsOutString"
        :options="optionVals.strings"
    />

    <br>
    <h3>Object[] -> number</h3>
    <p>
      <span>Value: <code>{{$debugVar(multiselectVals.singleInObjectsOutNumber)}}</code></span>
      &nbsp;&nbsp;&nbsp;
      <span>Options: <code>{{optionVals.objects}}</code></span>
    </p>
    <AMultiSelect
        v-model="multiselectVals.singleInObjectsOutString"
        :options="optionVals.objects"
    />

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <hr><hr><hr><hr><hr>
    <br>
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


  </div>
</template>

<style scoped>
.inputs-page {
  padding-bottom: 200px;
}
</style>
