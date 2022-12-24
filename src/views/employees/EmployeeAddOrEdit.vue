<template>
  <div class="note-edit">
    <h1>{{ title }}</h1>
    <txt class="note-edit__input-title" placeholder="Заголовок"></txt>

    <btn class="note-edit__btn-add-task">
      Добавить Задачу
    </btn>
    <div class="mod--clear-both"></div>
    <div class="note-edit__control-buttons">
      <btn class="">{{ actionTitle }}</btn>
      <btn class="btn--danger">Отменить</btn>
      <btn class="btn--error">Удалить</btn>
    </div>

  </div>
</template>

<script>

export default {
  computed: {
    /**
     * Редактируется-ли существующая заметка, или добавляется новая
     * @returns {boolean}
     */
    isEditing () {
      return this.$route.name === 'employeeEdit'
    },
    title () {
      return (this.isEditing ? 'Редактирование' : 'Добавление') + ' сотрудника'
    },
    actionTitle () {
      return this.isEditing ? 'Изменить' : 'Добавить'
    }
  }

}
</script>

<style scoped lang="scss">
.note-edit {
  .note-edit__input-title {
    margin-bottom: var(--gap);
  }
  .note-edit__btn-add-task {
    margin-bottom: calc(var(--gap) * 2);
    float: right;
  }

  .note-edit__control-buttons {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
    align-items: flex-end;
    @media (min-width: $bpMd) {
      flex-flow: row wrap;
    }
    > * {
      margin-left: var(--gap);
      margin-bottom: var(--gap);
    }
  }
}
</style>
