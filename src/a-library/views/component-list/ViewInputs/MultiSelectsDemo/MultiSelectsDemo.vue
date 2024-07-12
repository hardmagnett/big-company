<script setup lang="ts">
import { reactive, ref } from "vue";
import AMultiSelect from "@/a-library/components/forms/AMultiselect/AMultiSelect.vue";

let modelForBigData = ref([])
let optionsForBigData = [
    'Жизнь, необыкновенные и удивительные приключения Робинзона Крузо, моряка из Йорка, прожившего двадцать восемь лет в полном одиночестве на необитаемом острове у берегов Америки близ устьев реки Ориноко, куда он был выброшен кораблекрушением, во время которого весь экипаж корабля, кроме него, погиб, с изложением его неожиданного освобождения пиратами; написанные им самим',
    '30 ночей паранормального явления с одержимой девушкой с татуировкой дракона',
    'Ассоциация содействия возвращению заблудшей молодёжи на стезю добродетели',
    'На Дерибасовской хорошая погода, или На Брайтон-Бич опять идут дожди',
    'Не грози южному централу, тихо попивая сок у себя в квартале',
    'Пролетая над гнездом кукушки',
    'Пионерлагерь пыльная радуга',
    'Цивилизация статуса',
    'Хищные вещи века',
    'Они не прилетят',
    'Конец вечности',
    'Терминатор',
    'Матрица',
    
]

let optionVals = {
  numbers: [1, 3, 7],
  strings: ["one", "three", "seven"],
  objectsWithNumberId: [
    { tId: 1, tTitle: "One" },
    { tId: 3, tTitle: "Three" },
    { tId: 7, tTitle: "Seven" },
  ],
  objectsWithStringId: [
    { tId: "First", tTitle: "One" },
    { tId: "Third", tTitle: "Three" },
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
    <h3>Длинные варианты. Количество превышает максимальную высоту</h3>
    <AMultiSelect
        label="Много больших данных"
        v-model="modelForBigData"
        :options="optionsForBigData"
        multiple
    />
    
    <h3>Отладка работы с разными типами данных</h3>
    
    <div class="multi-selects-demo__data-variants am-cols am-cols-5">
      <ACard
          class="am-col-5 am-col-xl-1 a-card--calm"
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
      </ACard>
    </div>
    <br>

  </div>
</template>


<style scoped>
.multi-selects-demo {
  .multi-selects-demo__data-variant {
    outline: 1px solid gray;
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
