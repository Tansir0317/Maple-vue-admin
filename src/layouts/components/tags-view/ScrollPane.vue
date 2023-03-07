<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-05 19:11:34
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-07 15:47:34
-->
<template>
  <el-scrollbar
    ref="scrollContainerRef"
    :vertical="false"
    class="scroll-container"
  >
    <slot />
  </el-scrollbar>
</template>

<style lang="scss" scoped>

.scroll-container {
  .el-scrollbar__bar {
    bottom: 0px;
  }

  .el-scrollbar__wrap {
    height: 49px;
  }
}
</style>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
