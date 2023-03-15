<!--
 * @Description: 语言选择
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 13:24:05
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-15 10:43:27
-->
<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <div>
      <el-tooltip effect="dark" content="语言切换" placement="bottom">
        <svg-icon name="zhongyingwen" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in state.languages"
          :key="item.value"
          :disabled="language === item.value"
          :command="item.name"
        >
          <span>{{ item.name }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { computed, reactive } from 'vue';
import { piniaStore } from '@/stores';
import { useI18n } from 'vue-i18n';
import SvgIcon from '@/components/svg-icon/index.vue';

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
