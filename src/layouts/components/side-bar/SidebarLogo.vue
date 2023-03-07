<!--
 * @Description: 菜单栏Logo
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-03 13:53:56
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-24 10:44:50
-->
<template>
  <div class="sidebar-logo-container" :class="{ collapse: props.collapse }">
    <transition name="sidebar-logo-fade">
      <router-link
        v-if="props.collapse"
        class="sidebar-logo-link"
        key="collapse"
        to="/"
      >
        <img src="../../../assets/logo.svg" class="sidebar-logo" />
      </router-link>
      <router-link v-else class="sidebar-logo-link" key="expand" to="/">
        <img src="../../../assets/logo.svg" class="sidebar-logo" />
        <p class="sidebar-logo-text">Maple-vue-admin</p>
      </router-link>
    </transition>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  collapse: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: var(--v3-header-height);
  line-height: var(--v3-header-height);
  background-color: var(--v3-sidebarlogo-bg-color);
  text-align: center;
  overflow: hidden;
  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & .sidebar-logo {
      display: inline-block;
      height: 50%;
    }
    & .sidebar-logo-text {
      display: inline-block;
      margin-left: 5px;
      color: #435ebe;
      font-weight: 600;
      line-height: 50px;
      font-size: 16px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}

.collapse {
  .sidebar-logo {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    display: inline-block;
  }
  .sidebar-logo-text {
    display: none;
  }
}
</style>
