<template>
  <div class="login">
    <div class="login_box">
      <div class="avatar-box">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="login_form">
        <el-form ref="form" :model="login" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="login.username"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="login.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="loginBtn">登录</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      login: {
        username: "admin",
        password: "123456",
      },
    };
  },

  mounted() {},
  methods: {
     loginBtn() {
    
        this.$store.dispatch("denglu",this.login)
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 304px;
  border: 1px solid black;
  border-radius: 3px;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.avatar-box {
  overflow: hidden;
  width: 130px;
  height: 130px;
  padding: 10px;
  border: 1px solid #efefef;
  border-radius: 50%;
  position: absolute;
  top: -65px;
  left: 160px;
  background: white;
  img{
    width: 100%;height: 100%;
    margin-top: 5;
  }
}
.login_form {
  position: absolute;
  top: 85px;
  width: 100%;
}
</style>