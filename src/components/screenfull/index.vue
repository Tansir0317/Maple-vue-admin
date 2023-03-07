<!--
 * @Description: 全屏按钮
 * @Author: ZY
 * @Date: 2020-12-23 18:11:46
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 15:39:57
-->

<template>
  <div id="screenfull">
    <div v-if="isFullscreen" @click="click">
      <svg class="icon" aria-hidden="true" font-size="18px">
        <use xlink:href="#icon-quxiaoquanping_o" />
      </svg>
    </div>
    <div @click="click" v-else>
      <svg class="icon" aria-hidden="true" font-size="18px">
        <use xlink:href="#icon-quanping_o" />
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import screenfull from 'screenfull';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const sf = screenfull;
const isFullscreen = ref(false);

const click = () => {
  if (!sf.isEnabled) {
    ElMessage({
      message: 'you browser can not work',
      type: 'warning',
    });
    return false;
  }
  sf.toggle();
};

const change = () => {
  if (sf.isEnabled) {
    isFullscreen.value = sf.isFullscreen;
  }
};

onMounted(() => {
  if (sf.isEnabled) {
    sf.on('change', change);
  }
});

onBeforeUnmount(() => {
  if (sf.isEnabled) {
    sf.off('change', change);
  }
});
</script>
