<!--
 * @Description: 大小选择
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-10 13:39:55
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 15:39:27
-->
<template>
  <div>
    <el-dropdown id="size-select" trigger="click" @command="handleSetSize">
      <div>
        <svg class="icon" aria-hidden="true" font-size="18px">
          <use xlink:href="#icon-layout" />
        </svg>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item of sizeOptions"
            :key="item.value"
            :command="item.value"
            :disabled="size === item.value"
          >
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div />
  </div>
</template>

<script lang="ts">
import { useTagsViewStateStore } from '@/stores/modules/tagsview';
import { useAppStore, type sizeType } from '@/stores/modules/app';
import { defineComponent, reactive, nextTick, toRefs, computed } from 'vue';
import { ElMessage } from 'element-plus';
// import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    // const route = useRoute();
    // const router = useRouter();
    function refreshView() {
      useTagsViewStateStore().delAllCachedViews;
      // const { fullPath } = route;

      nextTick(() => {
        // router.replace({
        //   path: '/redirect' + fullPath,
        // });
        window.location.reload();
      });
    }
    const state = reactive({
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Large', value: 'large' },
        { label: 'Small', value: 'small' },
      ],
      handleSetSize: (size: sizeType) => {
        useAppStore().setSize(size);
        refreshView();
        ElMessage.success('切换大小成功');
      },
    });
    const size = computed(() => {
      return useAppStore().size;
    });
    return {
      ...toRefs(state),
      size,
    };
  },
});
</script>
<style lang="scss" scoped>
:deep(.el-dropdown) {
  vertical-align: 0;
}
</style>
