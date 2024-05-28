<template>
  <div class="employee-row">
    <!--<h4 class="employee-row__header">{{counter.random.words() + counter.random.words()}}</h4>-->
    <h4 class="employee-row__header">{{fable.fullName()}}</h4>
    <!--<div :set="qty = counter.random.number(5) + 1"></div>-->
    <div :set="qty = 3"></div>

    <!--<div :set="qtyToDisplay = qty >= 3 ? 3 : qty"></div>-->
    <div :set="qtyToDisplay = 3"></div>

    <ul>
      <li :key="n" v-for="n in qtyToDisplay"
          class="mod--ellipsis-one-line"
      >
        <!--Для ограничения длины троеточием приходится отказаться от display: list-item. Поэтому &bullet;-->
        <!--&bullet; {{fable.words({min: 1, max: 3})}}-->
        &bullet; {{'fsdfads'}}
      </li>
      <li v-if="qty > 3">...</li>
    </ul>
    <div class="employee-row__pusher"></div>
    <div class="employee-row__buttons">
      <!--:class="{'btn--small': areButtonsSmall}"-->

      <ABtn
        :to="{name: 'employeeEdit', params: { employeeId: 123 }}"
      >
        Изменить
      </ABtn>
      <!--:class="{'btn--small': areButtonsSmall}"-->
      <ABtn
        class="btn--error"
      >
        Удалить
      </ABtn>
    </div>
  </div>
</template>

<script setup lang="ts">

import { faker } from '@faker-js/faker';
import fable from '@/a-library/helpers/content/fable.js';







import { onMounted, reactive } from 'vue';


const counter = reactive(faker)
// export default {
//   data(){
//     return {
//       faker: faker
//     }
//   },
//   computed: {
//     // areButtonsSmall () {
//     //   return !this.$screen.bpSm
//     // }
//   },
//   mounted(){
//     console.log(this.faker); console.log('^...this.faker:')
//     // console.log(this.faker.random.words()); console.log('^...this.faker.random.words():')
//   }
// }

onMounted(() => {
  // console.log(faker); console.log('^...faker:')
  // console.log(faker.random.words()); console.log('^...faker.random.words():')
})
</script>

<style scoped lang="scss">
  .employee-row {
    padding: var(--gap);
    /*border: 1px solid clrBorder(lighter, main);*/
    border: 1px solid var(--clr-border-blue-lightest);
    border-radius: var(--border-radius);
    background-color: white;
    display: flex;
    flex-flow: column nowrap;

    overflow: hidden;

    .employee-row__header {
      margin-bottom: 0;

      /*Обрезание на 2-й строке start*/
      height: 37px;			/*указать высоту, если линия одна а рубить на третьей например*/
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;	/*указать на какой линии рубить*/
      overflow: hidden;
      /*Обрезание на 2-й строке end*/
    }

    ul > li {
      font-size: var(--font-size-small);
    }
    .employee-row__pusher {
      flex: 1 0 auto;
    }
    .employee-row__buttons {
      display: flex;
      justify-content: flex-end;
      .btn {
        &:last-child {
          margin-left: var(--gap);
        }
      }
    }
  }
</style>
