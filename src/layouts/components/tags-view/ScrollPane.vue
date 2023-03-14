<!--
 * @Description: 标签栏滚动条
 * @Author: Tansir
 * @Date: 2021-01-05 19:11:34
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-14 13:19:54
-->
<template>
  <el-scrollbar
    ref="scrollContainerRef"
    :vertical="false"
    class="scroll-container"
    @wheel.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>
<script lang="ts" setup>
import type { ComponentInternalInstance, DefineComponent } from 'vue';
import { computed, getCurrentInstance, ref } from 'vue';

interface wheel extends WheelEvent {
  wheelDelta: number;
}

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const scrollContainerRef = ref();
const tagSpacing = 4;

const scrollWrapper = computed(() => {
  return scrollContainerRef.value.wrapRef as HTMLElement;
});

const handleScroll = (e: wheel) => {
  const eventDelta = e.wheelDelta || -e.deltaY * 40;
  scrollWrapper.value.scrollLeft =
    scrollWrapper.value.scrollLeft + eventDelta / 4;
};

const moveToCurrentTag = (currentTag: DefineComponent) => {
  const container = scrollContainerRef.value.$el as HTMLElement;
  const containerWidth = container.offsetWidth;
  const tagList = proxy?.$parent?.$refs.tag as DefineComponent[];

  let firstTag = null;
  let lastTag = null;

  // find first tag and last tag
  if (tagList.length > 0) {
    firstTag = tagList[0];
    lastTag = tagList[tagList.length - 1];
  }

  if (firstTag === currentTag) {
    scrollWrapper.value.scrollLeft = 0;
  } else if (lastTag === currentTag) {
    scrollWrapper.value.scrollLeft =
      scrollWrapper.value.scrollWidth - containerWidth;
  } else {
    // find preTag and nextTag
    const currentIndex = tagList.findIndex(
      (item: DefineComponent) => item === currentTag
    );
    const prevTag = tagList[currentIndex - 1];
    const nextTag = tagList[currentIndex + 1];

    // the tag's offsetLeft after of nextTag
    const afterNextTagOffsetLeft =
      nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing;

    // the tag's offsetLeft before of prevTag
    const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagSpacing;

    if (
      afterNextTagOffsetLeft >
      scrollWrapper.value.scrollLeft + containerWidth
    ) {
      scrollWrapper.value.scrollLeft = afterNextTagOffsetLeft - containerWidth;
    } else if (beforePrevTagOffsetLeft < scrollWrapper.value.scrollLeft) {
      scrollWrapper.value.scrollLeft = beforePrevTagOffsetLeft;
    }
  }
};

defineExpose({
  moveToCurrentTag,
});
</script>
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

  :deep(.el-scrollbar__bar.is-horizontal) {
    height: 0 !important;
  }
}
</style>
