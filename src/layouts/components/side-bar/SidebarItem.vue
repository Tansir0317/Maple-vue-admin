<!--
 * @Description: 菜单栏
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2022-03-22 17:24:22
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-07 14:47:14
-->
<template>
  <div
    v-if="!item.meta?.hidden"
    :class="{
      'simple-mode': !isCollapse,
      'first-level': isFirstLevel,
    }"
  >
    <template
      v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children"
    >
      <SidebarItemLink
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <svg
            v-if="theOnlyOneChild.meta.icon"
            class="svg-icon"
            aria-hidden="true"
            font-size="18px"
          >
            <use :xlink:href="'#' + theOnlyOneChild.meta.icon" />
          </svg>
          <template v-if="theOnlyOneChild.meta.title" #title>
            {{ t('route.' + theOnlyOneChild.meta.title) }}
          </template>
        </el-menu-item>
      </SidebarItemLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <svg
          v-if="item.meta?.icon"
          class="svg-icon"
          aria-hidden="true"
          font-size="18px"
        >
          <use :xlink:href="'#' + item.meta?.icon" />
        </svg>
        <span v-if="item.meta?.title">{{ t('route.' + item.meta.title) }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :is-collapse="isCollapse"
          :is-first-level="false"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </template>
    </el-sub-menu>
  </div>
</template>
<script lang="ts" setup>
import path from 'path-browserify';
import SidebarItemLink from './SidebarItemLink.vue';
import type { RouteRecordRaw } from 'vue-router';
import { computed } from 'vue';
import type { PropType, ComputedRef } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
  isCollapse: {
    type: Boolean,
    default: false,
  },
  isFirstLevel: {
    type: Boolean,
    default: true,
  },
  basePath: {
    type: String,
    default: '',
  },
});

const alwaysShowRootMenu = computed(() => {
  return props.item.meta && props.item.meta.alwaysShow;
});

const showingChildNumber: ComputedRef<number | boolean> = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter((item) => {
      return !(item.meta && item.meta.hidden);
    });
    return showingChildren.length;
  }
  return 0;
});

const theOnlyOneChild: ComputedRef = computed(() => {
  if (showingChildNumber.value > 1) {
    return null;
  }
  if (props.item?.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child;
      }
    }
  }
  return { ...props.item, path: '' };
});

const resolvePath = (routePath: string) => {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath as string)) {
    return props.basePath;
  }
  return path.resolve(props.basePath, routePath);
};

const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path);
</script>

<style lang="scss" scoped>
.svg-icon {
  min-width: 1em;
  max-width: 1em;
  height: 1em;
  margin-right: 12px;
  font-size: 18px;
}
.simple-mode {
  &.first-level {
    :deep(.el-sub-menu) {
      .el-sub-menu__icon-arrow {
        display: none;
      }
      span {
        visibility: hidden;
      }
    }
  }
}
</style>
