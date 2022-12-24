<template>
  <div class="note-edit">
    <h1>{{ title }}</h1>
    <AInput class="note-edit__input-title" placeholder="Заголовок"></AInput>

    <ABtn class="note-edit__btn-add-task">
      Добавить Задачу
    </ABtn>
    <div class="mod--clear-both"></div>
    <div class="note-edit__control-buttons">
      <ABtn class="">{{ actionTitle }}</ABtn>
      <ABtn class="btn--danger">Отменить</ABtn>
      <ABtn class="btn--error">Удалить</ABtn>
    </div>

    <h2>Поля для сотрудника</h2>
    <ul>
      <li>Фамилия (Строка)</li>
      <li>Имя (Строка)</li>
      <li>Отчество (Строка)</li>
      <li>Телефон (Придумать наконец как это хранить и через какое поле вводить)</li>
      <li>Отдел (has One)</li>
      <li>Дата трудоустройства (Строка)</li>
      <li>Дата увольнения (Строка)</li>
      <li>Особые заметки (Строка, textarea, например "Не принадлежит отделу, дворник.")</li>
    </ul>
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
