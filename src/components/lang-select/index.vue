<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 13:24:05
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-22 10:56:05
-->
<template>
  <el-dropdown>
    <svg class="icon" aria-hidden="true" font-size="30px">
      <use xlink:href="#icon-zhongyingwen" />
    </svg>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in state.languages" :key="item.value" :disabled="language === item.value">
          <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { piniaStore } from '@/stores';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const appStore = piniaStore.useAppStore;

const state = reactive({
  languages: [
    {
      name: 'en',
      value: 'en',
    },
    {
      name: '中文',
      value: 'zh-cn',
    },
  ],
});

const language = computed(() => {
  return appStore.language;
});

const handleSetLanguage = (lang: string) => {
  locale.value = lang;
  appStore.setLanguageStore(lang);
};
</script>
