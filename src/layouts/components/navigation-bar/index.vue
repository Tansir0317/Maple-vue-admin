<!--
 * @Description: 导航栏
 * @Author: ZY
 * @Date: 2020-12-17 15:52:19
 * @LastEditors: Tansir
 * @LastEditTime: 2023-03-07 15:02:24
-->
<template>
  <div class="navbar">
    <Hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggle-click="state.toggleSideBar"
    />
    <BreadCrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <!-- <error-log class="errLog-container right-menu-item hover-effect" /> -->
        <Screenfull class="right-menu-item hover-effect" />
        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <SizeSelect class="right-menu-item hover-effect" />
        </el-tooltip>
        <LangSelect class="right-menu-item hover-effect" />
      </template>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <!-- <img :src="avatar" class="user-avatar" /> -->
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- <router-link to="/profile/">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link> -->
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="state.logout">
              <span style="display: block">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BreadCrumb from '../bread-crumb/index.vue';
import Hamburger from '@/components/hamburger/index.vue';
import Screenfull from '@/components/screenfull/index.vue';
import SizeSelect from '@/components/size-select/index.vue';
import LangSelect from '@/components/lang-select/index.vue';
import { useAppStore } from '@/stores/modules/app';
import { useRouter } from 'vue-router';
import { computed, reactive } from 'vue';

const appStore = useAppStore();
const router = useRouter();

const state = reactive({
  toggleSideBar: () => {
    appStore.toggleSidebar(false);
  },
  logout: () => {
    router.push({ name: 'Login' });
  },
});

const sidebar = computed(() => {
  return appStore.sidebar;
});
const device = computed(() => {
  return appStore.device.toString();
});
</script>

<style lang="scss" scoped>
.navbar {
  height: var(--v3-navigationbar-height);
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 50px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      .avatar-wrapper {
        margin-top: 5px;
        margin-right: 16px;
        margin-left: 16px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
