<script setup lang="ts">
import { reactive } from "vue";
import AMultiSelect from "@/a-library/components/forms/AMultiselect/AMultiSelect.vue";

let multiselectVals = reactive({
  singleInNumbersOutNumber: null,
  singleInStringsOutString: null,
  singleInObjectsOutNumber: null,
  singleInObjectsOutString: null,
  singleInObjectsOutObject: null,

  multiInNumbersOutNumberArray: [],
  multiInStringsOutStringArray: [],
  multiInObjectsOutNumberArray: [],
  multiInObjectsOutStringArray: [],
  multiInObjectsOutObjectArray: [],
});

let optionVals = {
  numbers: [1, 3, 7],
  strings: ["one", "three", "seven"],
  objectsWithNumberId: [
    { tId: 1, tTitle: "One" },
    { tId: 3, tTitle: "Three" },
    // { tId: 6, tTitle: "Six" },
    { tId: 7, tTitle: "Seven" },
  ],
  objectsWithStringId: [
    { tId: "First", tTitle: "One" },
    { tId: "Third", tTitle: "Three" },
    // { tId: "Sixth", tTitle: "Six" },
    { tId: "Seventh", tTitle: "Seven" },
  ],
};

let allVariantsData = reactive([
  {
    'label': 'number[] -> number',
    vModel: null,
    options: optionVals.numbers,
    multiple: false,
    returnObject: false,
    
  },
  {
    'label': 'string[] -> string',
    vModel: null,
    options: optionVals.strings,
    multiple: false,
    returnObject: false,
  },
  {
    'label': 'Object[] -> number',
    vModel: null,
    options: optionVals.objectsWithNumberId,
    multiple: false,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> string',
    vModel: null,
    options: optionVals.objectsWithStringId,
    multiple: false,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> Object',
    vModel: null,
    options: optionVals.objectsWithStringId,
    multiple: false,
    returnObject: true,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  
    
    
  {
    'label': 'number[] -> number[]',
    vModel: [],
    options: optionVals.numbers,
    multiple: true,
    returnObject: false,
  },
  {
    'label': 'string[] -> string[]' ,
    options: optionVals.strings,
    vModel: [],
    multiple: true,
    returnObject: false,
  },
  {
    'label': 'Object[] -> number[]'  ,
    vModel: [],
    options: optionVals.objectsWithNumberId,
    multiple: true,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> string[]'   ,
    vModel: [],
    options: optionVals.objectsWithStringId,
    multiple: true,
    returnObject: false,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
  {
    'label': 'Object[] -> Object'      ,
    vModel: [],
    options: optionVals.objectsWithNumberId,
    multiple: true,
    returnObject: true,
    optionObjectFieldTitle:"tTitle",
    optionObjectFieldValue:"tId",
  },
    
])


</script>

<template>
  <div class="multi-selects-demo">
    <h2>Мультиселект</h2>
    
    <div class="multi-selects-demo__data-variants am-cols am-cols-5">
      <div
          class="multi-selects-demo__data-variant am-col-5 am-col-xl-1"
          v-for="(dataVariant, index) in allVariantsData" :key="index">
        <AMultiSelect
            :label="dataVariant.label"
            v-model="dataVariant.vModel"
            :options="dataVariant.options"
            :return-object="dataVariant.returnObject"
            :multiple="dataVariant.multiple"
            :optionObjectFieldTitle="dataVariant.optionObjectFieldTitle"
            :optionObjectFieldValue="dataVariant.optionObjectFieldValue"
        />
        <div  class="multi-selects-demo__debug">
          v-model:
          <pre>{{ $debugVar(dataVariant.vModel) }}</pre>
        </div>
        <p class="multi-selects-demo__debug">
          Options: <pre>{{ dataVariant.options }}</pre>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.multi-selects-demo {
  .multi-selects-demo__data-variant {
    outline: 1px solid gray;
    /*height: 500px;*/
    .multi-selects-demo__debug {
      font-size: var(--font-size-tiny);
      margin: 0;
      pre {
        height: 250px;
        margin: 0;
      }
    }
  }
}
</style>
