<template>
  <div class="headers">
    <Teleport to="#page-header-place">
      <APageHeader> Типографика </APageHeader>
    </Teleport>

    <h1>Заголовок h1</h1>
    <h2>Заголовок h2</h2>
    <h3>Заголовок h3</h3>
    <br />

    <h2>Параграфы</h2>
    <p>
      Lorem ipsum dolor <a href="http://ya.ru">ya.ru</a> sit amet, consectetur
      adipisicing elit. Consectetur doloribus eum, laudantium natus nobis non
      rem. Corporis ipsum itaque officia quibusdam recusandae, sed sint? Dolor
      nobis non provident suscipit totam. Сonsectetur adipisicing elit.
      Consectetur doloribus eum, laudantium natus nobis non rem. Corporis ipsum
      itaque officia quibusdam recusandae, sed sint? Dolor nobis non provident
      suscipit totam.
    </p>
    <p>
      Сonsectetur adipisicing elit. Consectetur doloribus eum, laudantium natus
      nobis non rem. Corporis ipsum itaque officia quibusdam recusandae, sed
      sint? Dolor nobis non provident suscipit totam.
    </p>
    <br />

    <h2>Размеры шрифтов</h2>
    <p style="font-size: var(--font-size-base)">--font-size-base</p>
    <p style="font-size: var(--font-size-small)">--font-size-small</p>
    <p style="font-size: var(--font-size-tiny)">--font-size-tiny</p>
    <br />

    <h2>Начертания</h2>
    <p>Стандартное</p>
    <p style="font-weight: var(--font-weight-bold)">--font-weight-bold</p>
    <br />

    <h2>Иконки</h2>
    <p>
      Компонент-иконка - по сути обычный span. Лекго вставляется в текст
      <AIcon icon="mdi-pencil" />
      или в ссылку
      <a href="/" target="_blank">
        <AIcon icon="mdi-pencil" />
      </a>
      .
    </p>
    <br>
    <h2>Код</h2>

<pre class="mod--code">
&lt;div&gt;
  &lt;strong&gt;
    Hello &amp;nbsp;
  &lt;/strong&gt;
&lt;/div&gt;
</pre>

    <p>
      Код внутри параграфа. Начало.
      <code class="mod--code">&lt;div&gt;&lt;strong&gt;Hello &amp;nbsp;&lt;/strong&gt;&lt;/div&gt;</code>
      Окончание.
    </p>
  </div>
</template>

<style></style>
<script setup lang="ts"></script>
