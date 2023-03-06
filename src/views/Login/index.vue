<template>
  <div class="login">
    <el-row class="login-box">
      <el-col class="login-left" :span="8"><p class="login-title">CRM管理系统</p></el-col>
      <el-col class="login-right" :span="16">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 300px"
          class="login-input-box"
        >
          <el-form-item label="用户名">
            <!--						添加图标-->
            <el-input type="text" v-model="formLabelAlign.name" prefix-icon="" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="formLabelAlign.region" />
          </el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form>
        <!--				按钮-->
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

enum LabelPosition {
  Top = 'top',
  Left = 'left',
  Right = 'right',
}

const labelPosition = ref(LabelPosition.Left);

const formLabelAlign = reactive({
    name  : '',
    region: ''
});
</script>

<style lang="scss" scoped>
.login-input-box {
  margin: 0 auto;
  padding: 50px 0;

  .el-form-item {
    margin-bottom: 20px;
  }
}

.login-left {
  width: 100%;
  height: 100%;
  background-color: #7392fa;

  .login-title {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

.login {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #7392fa, #ac40ff);

  .login-box {
    //	居中
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //	宽高
    width: 700px;
    height: 440px;
    //	背景
    background: #fff;
    border-radius: 2%;
  }
}
</style>
