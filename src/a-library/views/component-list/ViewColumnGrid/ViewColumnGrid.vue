<template>
  <div class="column-grid">
    <APageHeaderWithTeleport text="Сетка" />
    <h2>Стандартная 12-ти колоночная</h2>
    <p>
      Для просмотра адаптивной работы сетки нужно посмотреть страницу на разных
      ширинах.
    </p>
    <p>Например потаскать браузер за правый или левый край.</p>

    <div class="am-cols">
      <ACard
        class="am-col-12 am-col-sm-6 am-col-md-4 am-col-lg-3 am-col-xl-2 am-col-xxl-1"
        :key="n"
        v-for="n in 60"
      >
        # {{ n }}
      </ACard>
    </div>
    <br />
    <h2>Любое количество колонок</h2>
    <p>
      Сетка легко превращается из 12-ти колоночной в сетку с любым другим
      количеством колонок. Например в 5-ти колончатую.
      <br />
      Достаточно лишь указать модификатор.
    </p>
    <pre class="mod--code">
&lt;div class=&quot;am-cols am-cols-5&quot;&gt;
    &lt;div class=&quot;am-col-5 am-col-xl-1&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</pre
    >
  </div>
</template>

<style scoped>
.column-grid {
}
</style>
<script setup lang="ts">
import APageHeaderWithTeleport from "@/a-library/components/layout/APageHeaderWithTeleport/APageHeaderWithTeleport.vue";
</script>
