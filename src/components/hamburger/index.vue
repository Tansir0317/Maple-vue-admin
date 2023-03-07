<!--
 * @Description: 折叠边栏按钮
 * @Author: ZY
 * @Date: 2020-12-23 16:25:41
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 15:45:51
-->

<template>
  <div :class="[{ 'is-active': props.isActive }]" @click="toggleClick">
    <svg class="icon" aria-hidden="true" font-size="18px">
      <use xlink:href="#icon-zhedie2" />
    </svg>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['toggle-click']);

const toggleClick = () => {
  emit('toggle-click');
};
</script>
<style lang="scss" scoped>
.icon {
  vertical-align: middle;
}

.is-active {
  transform: rotate(180deg);
}
</style>
