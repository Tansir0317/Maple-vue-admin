<!--
 * @Description: 主视图
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-10 10:55:09
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 14:36:44
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <component :is="Component" :key="key" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
import { useTagsViewStateStore } from '@/stores/modules/tagsview';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const tagsViewStateStore = useTagsViewStateStore();
const route = useRoute();
const cachedViews = computed(() => {
  return tagsViewStateStore.cachedViews;
});

const key = () => {
  return route.path;
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - var(--v3-navigationbar-height));
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--v3-body-bg-color);
}

.fixed-header + .app-main {
  padding-top: var(--v3-navigationbar-height);
  height: 100vh;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - var(--v3-header-height));
  }

  .fixed-header + .app-main {
    padding-top: var(--v3-header-height);
  }
}
</style>
