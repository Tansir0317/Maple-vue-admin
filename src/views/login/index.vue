<!--
 * @Description: 登录页面
 * @Version: 1.0
 * @Autor: Tansir
 * @Date: 2023-02-17 09:14:31
 * @LastEditors: Tansir
 * @LastEditTime: 2023-02-17 15:46:11
-->
<template>
  <div class="login-container">
    <div class="login-card">
      <lang-select></lang-select>
      <div class="content">
        <el-form :model="formLabelAlign" @keyup.enter="handleLogin">
          <el-form-item>
            <el-input
              v-model="formLabelAlign.username"
              :placeholder="t('login.username')"
              type="text"
              size="large"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formLabelAlign.password"
              :placeholder="t('login.password')"
              type="password"
              size="large"
              show-password
              :prefix-icon="Lock"
            />
          </el-form-item>
          <el-button type="primary" size="large" @click.prevent="handleLogin">
            {{ t('login.loginIn') }}
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';
import LangSelect from '@/components/lang-select/index.vue';

const { t } = useI18n();
const formLabelAlign = reactive({
  username: null,
  password: null,
});

const handleLogin = () => {
  console.log('登录');
};
</script>
<style lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: pink;
    overflow: hidden;
    .content {
      padding: 50px;
    }
    .el-button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
