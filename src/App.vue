<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-22 10:53:52
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-15 09:16:21
-->
<template>
  <el-config-provider :locale="lang" :size="size">
    <router-view />
  </el-config-provider>
</template>
<script lang="ts" setup>
import { ElConfigProvider } from 'element-plus';
import type { Language } from 'element-plus/es/locale/index';

import zhCn from 'element-plus/dist/locale/zh-cn';
import en from 'element-plus/dist/locale/en';
import { useAppStore } from './stores/modules/app';
import { computed, ref } from 'vue';

const appStore = useAppStore();
const language: Record<string, Language> = {
  en: en,
  'zh-cn': zhCn,
};
const lang = ref(language[appStore.language]);
appStore.$subscribe((mutation, state) => {
  lang.value = language[state.language];
});

const size = computed(() => appStore.size);
</script>
