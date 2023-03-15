<!--
 * @Description: svg-icon
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-03-15 10:16:18
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-15 10:16:52
-->
<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>
