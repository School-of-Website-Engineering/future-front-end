<template>
    <div class="main-box">
        <div :class="['container', 'container-register', { 'is-txl': isLogin }]">
            <!--            <form>-->
            <!--                <h2 class="title">创建帐户</h2>-->
            <!--                <span class="text">或使用电子邮件进行注册</span>-->
            <!--                <input class="form__input" type="text" placeholder="用户名" />-->
            <!--                <input class="form__input" type="text" placeholder="邮箱" />-->
            <!--                <input class="form__input" type="password" placeholder="密码" />-->
            <!--                <div class="primary-btn">立即注册</div>-->
            <!--            </form>-->
            <el-form ref="registerForm" :model="registerForm" :rules="registerFormRules" class="register-form">
                <h2 class="title">创建帐户</h2>
                <span class="text">或使用电子邮件进行注册</span>
                <el-form-item prop="username">
                    <el-input
                        type="text"
                        class="form__input"
                        v-model="registerForm.username"
                        placeholder="用户名"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input
                        type="text"
                        class="form__input"
                        v-model="registerForm.email"
                        placeholder="邮箱"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        class="form__input"
                        v-model="registerForm.password"
                        placeholder="密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="primary-btn" @click="submitForm">立即注册</div>
                </el-form-item>
            </el-form>
        </div>
        <div :class="['container', 'container-login', { 'is-txl is-z200': isLogin }]">
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm" class="login-form">
                <h2 class="title">登录网站</h2>
                <span class="text">或使用电子邮件进行注册</span>
                <el-form-item prop="username">
                    <el-input class="form__input" v-model="loginForm.username" placeholder="请输入用户名"> </el-input>
                </el-form-item>
                <el-form-item prop="userEmail">
                    <el-input class="form__input" v-model="loginForm.userEmail" placeholder="请输入邮箱"> </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input class="form__input" v-model="loginForm.password" type="password" placeholder="请输入密码">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <div class="form__input_code-box">
                        <el-input
                            class="form__input form__input_code"
                            v-model="loginForm.smsCode"
                            placeholder="请输入验证码"
                        >
                        </el-input>
                        <el-button class="primary-btn-code-btn" type="primary" :loading="isLoading" @click="getCode">
                            获取验证码
                        </el-button>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="primary-btn" @click="submitForm">立即登录</div>
                </el-form-item>
            </el-form>
        </div>
        <div :class="['switch', { login: isLogin }]">
            <div class="switch__circle"></div>
            <div class="switch__circle switch__circle_top"></div>
            <div class="switch__container">
                <h2>{{ isLogin ? '你好，陌生人 !' : '欢迎回来 !' }}</h2>
                <p>
                    {{ isLogin ? '输入您的个人详细信息并开始我们的旅程' : '要与我们保持联系，请使用您的个人信息登录' }}
                </p>
                <div class="primary-btn" @click="isLogin = !isLogin">
                    {{ isLogin ? '立即注册' : '立即登录' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useUserLoginRegisterStore } from '@/store/modules/user';
import LoginService from '@/api/login-register';

const userLoginRegisterStore = useUserLoginRegisterStore();
const isLogin = ref(true);
const loginForm = reactive({
    username : 'admin',
    userEmail: '1960638223@qq.com',
    password : '54241',
    smsCode  : 0
});
const registerForm = reactive({
    name    : '',
    email   : '',
    password: ''
});

// 校验规则
const usernameRules = reactive([
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
]);

// 验证码按钮加载状态
const isLoading = ref(false);
// 登录
const login = () => {
    userLoginRegisterStore.userLogin(loginForm);
};
const register = () => {
    //ok
};
// 获取验证码
const getCode = async() => {
    isLoading.value = true;
    const res = await LoginService.getSmsCode(loginForm.userEmail);
    if (res.code === 200) {
        console.log(res);
    }
    isLoading.value = false;
};
// 提交表单
const submitForm = () => {
    if (isLogin.value) {
        login();
    } else {
        register();
    }
};
</script>

<style lang="scss" scoped>
.main-box {
    //相对定位
    position: relative;
    width: 1000px;
    //最小宽度以及最小高度
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    margin: 0 auto;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 12px;
    //溢出隐藏
    overflow: hidden;

    .container {
        //弹性布局
        display: flex;
        justify-content: center;
        align-items: center;
        //绝对定位
        position: absolute;
        top: 0;
        width: 600px;
        height: 100%;
        padding: 25px;
        background-color: #ecf0f3;
        transition: all 1.25s;

        el-form {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            color: #a0a5a8;

            .title {
                font-size: 34px;
                font-weight: 700;
                line-height: 3;
                color: #181818;
            }

            .text {
                margin-top: 30px;
                margin-bottom: 12px;
            }

            .form__input {
                width: 350px;
                height: 40px;
                margin: 4px 0;
                padding-left: 25px;
                font-size: 13px;
                letter-spacing: 0.15px;
                border: none;
                outline: none;
                font-family: 'Montserrat', sans-serif;
                background-color: #ecf0f3;
                transition: 0.25s ease;
                border-radius: 8px;
                box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;

                &::placeholder {
                    color: #a0a5a8;
                }
            }

            .form__input_code-box {
                width: 375px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .form__input_code {
                    width: 220px;
                }

                .primary-btn-code-btn {
                    //获取验证码按钮
                    width: 120px;
                    height: 40px;
                    margin: 4px 0;
                    padding-left: 25px;
                    font-size: 13px;
                    letter-spacing: 0.15px;
                    border: none;
                    outline: none;
                    font-family: 'Montserrat', sans-serif;
                    transition: 0.25s ease;
                    border-radius: 8px;
                }
            }
        }
    }

    .container-register {
        z-index: 100;
        left: calc(100% - 600px);
    }

    .container-login {
        left: calc(100% - 600px);
        z-index: 0;
    }

    .is-txl {
        left: 0;
        transition: 1.25s;
        transform-origin: right;
    }

    .is-z200 {
        z-index: 200;
        transition: 1.25s;
    }

    .switch {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 400px;
        padding: 50px;
        z-index: 200;
        transition: 1.25s;
        background-color: #ecf0f3;
        overflow: hidden;
        box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #f9f9f9;
        color: #a0a5a8;

        .switch__circle {
            position: absolute;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: #ecf0f3;
            box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
            bottom: -60%;
            left: -60%;
            transition: 1.25s;
        }

        .switch__circle_top {
            top: -30%;
            left: 60%;
            width: 300px;
            height: 300px;
        }

        .switch__container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            width: 400px;
            padding: 50px 55px;
            transition: 1.25s;

            h2 {
                font-size: 34px;
                font-weight: 700;
                line-height: 3;
                color: #181818;
            }

            p {
                font-size: 14px;
                letter-spacing: 0.25px;
                text-align: center;
                line-height: 1.6;
            }
        }
    }

    .login {
        left: calc(100% - 400px);

        .switch__circle {
            left: 0;
        }
    }

    .primary-btn {
        width: 180px;
        height: 50px;
        border-radius: 25px;
        margin-top: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        letter-spacing: 2px;
        background-color: #4b70e2;
        color: #f9f9f9;
        cursor: pointer;
        box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;

        &:hover {
            box-shadow: 4px 4px 6px 0 rgb(255 255 255 / 50%), -4px -4px 6px 0 rgb(116 125 136 / 50%),
                inset -4px -4px 6px 0 rgb(255 255 255 / 20%), inset 4px 4px 6px 0 rgb(0 0 0 / 40%);
        }
    }
}
</style>
