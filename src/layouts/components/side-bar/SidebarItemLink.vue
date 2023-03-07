<!--
 * @Description: 菜单栏跳转
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-06 17:20:29
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-22 16:45:44
-->
<template>
  <a
    v-if="isExternal(props.to)"
    :href="props.to"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
  <router-link v-else :to="props.to">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils/validate';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
