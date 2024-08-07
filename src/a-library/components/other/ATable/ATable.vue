<script setup lang="ts"></script>

<template>
  <div class="a-table">
    <table>
      <slot></slot>
    </table>

    <!--Нужен, например, чтобы в корень этого класть AInfinity-->
    <slot name="appendRoot"></slot>
  </div>
</template>

<!--Здесь стили глобальные. Не scoped. Почему?-->
<!--Потому-что нужно стилизовать контент, который передается в слот. Всякие tr и td-->
<!--В простом случае, когда tr и td передаются напрямую, спасал :slotted.-->
<!--Но если в слот передавать какой-то другой компонент, уже внутри которого будут tr и td, -->
<!--то тогда :slotted не работает и строки таблицы остаются нестилизованными-->
<!--Поэтому пусть здесь будет без scoped. К тому-же эти стили и так ограничены классом-родителем .a-table,-->
<!--Поэтому ничего плохого не случится-->
<style>
.a-table {
  overflow-y: auto;

  /*Флекс нужен если вдруг непосредственно под или над <table> нужно будет разместить элемент. Например <AInfinity>.*/
  /*Да так разместить, чтобы он занимал много пространства по высоте.*/
  /*Тогда ему можно будет задать тянущуюся высоту при помощи flex: X X xxxx*/
  display: flex;
  flex-flow: column nowrap;

  table {
    width: 100%;

    /*Нужна чтобы цветом перекрывать задний фон при фиксированной шапке.*/
    --background-color: var(--clr-bg-blue-big);

    --border-color: var(--clr-border-blue-lighter);

    background-color: var(--background-color);

    /*Чтобы убрать всякие отступы между ячейками*/
    border-spacing: 0;
    border-collapse: collapse;

    tr {
      background-color: var(--background-color);
      th {
        font-weight: var(--font-weight-bold);
      }
      th,
      td {
        padding: calc(var(--gap) / 2) calc(var(--gap) / 4);
        &:first-child {
          padding-left: calc(var(--gap) / 2);
        }
        &:last-child {
          padding-right: calc(var(--gap) / 2);
        }
        text-align: left;
        border-bottom: 1px solid var(--border-color);
        font-size: var(--font-size-small);
      }
    }

    :not(thead) tr:hover {
      background-color: var(--clr-bg-blue-small);
    }
  }

  &.a-table--fixed-header {
    table {
      thead {
        position: sticky;
        top: 0;
        z-index: 2;

        /*Хак. С таблицами нередко необычное приходится делать.*/
        /*Нормальными способами у таблицы бордюр ускролливается.*/
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-color: var(--border-color);
        }

        th {
          /*Те самые бордюры, которые ускролливаются.*/
          border-bottom: none;
        }
      }
    }
  }
}
</style>
