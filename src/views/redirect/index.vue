<!--
 * @Description: 重定向
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-28 22:43:27
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-03 10:55:48
-->
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

router.replace({ path: '/' + route.params.path, query: route.query });
</script>

<template>
  <div />
</template>
