<template>
  <div class="about-view">
    <h1>Структура кампании</h1>

    <h2>Дерево</h2>
    <ul>

      <li>Дирекция (Дирекция)</li>

      <li>
        Информационные Технологии (Департамент)
        <ul>
          <li>Разработка (Отдел)</li>
          <li>Автоматизация (Отдел)</li>
          <li>Техническая Поддержка (Отдел)</li>
        </ul>
      </li>

      <li>
        Производство (Департамент)
        <ul>
          <li>Цех 1 (Отдел)</li>
          <li>Цех 2 (Отдел)</li>
          <li>Цех 3 (Отдел)</li>
          <li>Контроль Качества (Отдел)</li>
        </ul>
      </li>
    </ul>

    <h2>Поля для Дирекции (Directorate)</h2>
    <ul>
      <li>Название (Строка)</li>
      <li>Руководитель (hasOne Employee)</li>
      <li>Сотрудники (hasMany Employee)</li>
      <li>Родительский отдел (hasOne Department Nullable)</li>
    </ul>

    <h2>Поля для Департамента (Department)</h2>
    <ul>
      <li>Название (Строка)</li>
      <li>Руководитель (hasOne Employee)</li>
      <li>Сотрудники (hasMany Employee)</li>
      <li>Родительский отдел (hasOne Department Nullable)</li>
    </ul>

    <h2>Поля для отдела (Division)</h2>
    <ul>
      <li>Название (Строка)</li>
      <li>Руководитель (hasOne Employee)</li>
      <li>Сотрудники (hasMany Employee)</li>
      <li>Родительский отдел (hasOne Department Nullable)</li>
    </ul>


    <h2>Прочие заметки</h2>

  </div>
</template>

<style>

</style>
