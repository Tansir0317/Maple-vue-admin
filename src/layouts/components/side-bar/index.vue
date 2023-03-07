<!--
 * @Description: 菜单栏入口
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-03 13:28:03
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-22 17:07:40
-->
<template>
  <div class="has-logo sideWrap">
    <SidebarLogo :collapse="!isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="sidebar-el-menu"
        :default-active="activeMenu"
        :collapse="!isCollapse"
        :background-color="v3SidebarMenuBgColor"
        :text-color="v3SidebarMenuTextColor"
        :active-text-color="v3SidebarMenuActiveTextColor"
        unique-opened
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import SidebarLogo from './SidebarLogo.vue';
import SidebarItem from './SidebarItem.vue';
import { usePermissionStore } from '@/stores/modules/permission';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/modules/app';
import { getCssVariableValue } from '@/utils';

const v3SidebarMenuBgColor = getCssVariableValue('--v3-sidebar-menu-bg-color');
const v3SidebarMenuTextColor = getCssVariableValue(
  '--v3-sidebar-menu-text-color'
);
const v3SidebarMenuActiveTextColor = getCssVariableValue(
  '--v3-sidebar-menu-active-text-color'
);

const permissionStore = usePermissionStore();
const route = useRoute();
const appStore = useAppStore();

const routes = computed(() => {
  return permissionStore.routes;
});
console.log(
  '%c 🚕: routes -> routes ',
  'font-size:16px;background-color:#683fba;color:white;',
  routes
);

const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta !== null || meta !== undefined) {
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
  }
  return path;
});

const isCollapse = computed(() => {
  return appStore.sidebar.opened;
});
</script>
<style lang="scss" scoped>
@mixin tip-line {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: var(--v3-sidebar-menu-tip-line-bg-color);
  }
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - var(--v3-header-height));
  }
}

.el-scrollbar {
  height: 100%;

  :deep(.scrollbar-wrapper) {
    // 限制水平宽度
    overflow-x: hidden !important;

    .el-scrollbar__view {
      height: 100%;
    }
  }

  // 滚动条
  :deep(.el-scrollbar__bar) {
    &.is-horizontal {
      // 隐藏水平滚动条
      display: none;
    }
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}

:deep(.el-menu-item),
:deep(.el-sub-menu__title),
:deep(.el-sub-menu .el-menu-item) {
  height: var(--v3-sidebar-menu-item-height);
  line-height: var(--v3-sidebar-menu-item-height);

  &:hover {
    background-color: #404040 !important;
    background-color: var(--v3-sidebar-menu-hover-bg-color);
  }

  &.is-active {
    background: linear-gradient(
      90deg,
      var(--v3-tagsview-tag-active-lbg-color),
      var(--v3-tagsview-tag-active-rbg-color)
    );
  }

  * {
    vertical-align: middle;
  }
}

:deep(.el-menu-item) {
  &.is-active {
    @include tip-line;
  }
}

.el-menu--collapse {
  :deep(.el-sub-menu) {
    &.is-active {
      .el-sub-menu__title {
        color: var(--v3-sidebar-menu-active-text-color) !important;
        @include tip-line;
      }
    }
  }
}
</style>
