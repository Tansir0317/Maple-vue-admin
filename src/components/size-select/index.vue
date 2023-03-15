<!--
 * @Description: 大小选择
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-10 13:39:55
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-15 14:05:47
-->
<template>
  <el-dropdown id="size-select" trigger="click" @command="handleSetSize">
    <div>
      <el-tooltip effect="dark" content="布局大小" placement="bottom">
        <svg-icon name="layout" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item of state.sizeOptions"
          :key="item.value"
          :disabled="size === item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useAppStore, type sizeType } from '@/stores/modules/app';
import { reactive, computed } from 'vue';
import { ElMessage } from 'element-plus';
import SvgIcon from '@/components/svg-icon/index.vue';

const state = reactive({
  sizeOptions: [
    { label: 'Default', value: 'default' },
    { label: 'Large', value: 'large' },
    { label: 'Small', value: 'small' },
  ],
});

const handleSetSize = (size: sizeType) => {
  useAppStore().setSize(size);
  ElMessage.success('Switch Size Success');
};

const size = computed(() => {
  return useAppStore().size;
});
</script>
<style lang="scss" scoped>
:deep(.el-dropdown) {
  vertical-align: 0;
}
</style>
