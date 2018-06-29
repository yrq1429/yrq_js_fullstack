<template>
    <div class="login-container">
        <el-form class="login-form" autocomplete :model="loginForm" :rules="loginRules" label-position="left" ref="loginForm">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <!-- username规则里面key的名字 -->
            <el-form-item prop="username">
                <el-input name="username" type="text" v-model="loginForm.username"  placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input name="password" type="password" v-model="loginForm.password"  placeholder="请输入密码" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin" :loading="isLoading" >登录</el-button>
            <div class="tips">
                <span>用户名：admin</span>
                <span>密码：111111</span>
            </div>
            <div class="tips">
                <span>用户名：editor</span>
                <span>密码：111111</span>
            </div>
            <el-button class="thirdparty-button" type="primary" @click="showDialog=true" >第三方登录</el-button>
            <el-dialog title="第三方登录" :visible.sync="showDialog" append-to-body>
                <!-- :visible.sync="showDialog" 将visible与showDialog同步 -->
                微信，QQ，微博
                <br>
            </el-dialog>
        </el-form>
    </div>
</template>
<script>
// 解构 
import { isvalidUsername } from "@/utils/validate";
export default {
    data() {
        const validateUsername = (rule, value, callback) => {
            if (!isvalidUsername(value)) {
                callback(new Error('请输入正确的用户名'))
            }else {
                callback();
            }
        };
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('密码太少啦，至少6位'))
            }else {
                callback();
            }
        };
        return {
            loginForm: {
                username: '',
                password: ''
            },
            showDialog: false,
            isLoading: false,
            loginRules: {
                username: [{
                    required: true,
                    trigger: 'blur',
                    validator: validateUsername
                }],
                password: [{
                    required: true,
                    // blur表示离开
                    trigger: 'blur',
                    validator: validatePassword
                }]
            },
        }
    },
    methods: {
        handleLogin() {
            // 做什么? 验证数据 $refs=>找到元素
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.isLoading = true
                    setTimeout(() => {
                        this.isLoading = false
                    }, 2000);
                    console.log("提交");
                    
                }else {
                    console.log("error submit");
                    return false;
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}

</style>


