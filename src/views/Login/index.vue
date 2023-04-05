<template>
    <div class="main-box">
        <div :class="['container', 'container-register', { 'is-txl': isLogin }]">
            <form class="register-form" @submit.prevent="submitFormRegister">
                <h2 class="title">创建帐户</h2>
                <span class="text">或使用电子邮件进行注册</span>
                <div class="input-box">
                    <div v-if="errors.username" class="error__message">
                        {{ errors.username }}
                    </div>
                    <input
                        class="form__input"
                        type="text"
                        placeholder="用户名"
                        v-model="registerForm.username"
                        :class="{ input__error: errors.username }"
                        @focus="errors.username = ''"
                    />
                </div>
                <div class="input-box">
                    <div v-if="errors.email" class="error__message">
                        {{ errors.email }}
                    </div>
                    <input
                        class="form__input"
                        type="text"
                        placeholder="邮箱"
                        v-model="registerForm.email"
                        :class="{ input__error: errors.email }"
                        @focus="errors.email = ''"
                    />
                </div>
                <div class="input-box">
                    <div v-if="errors.password" class="error__message">
                        {{ errors.password }}
                    </div>
                    <input
                        class="form__input"
                        type="password"
                        placeholder="密码"
                        v-model="registerForm.password"
                        :class="{ input__error: errors.password }"
                        @focus="errors.password = ''"
                    />
                </div>
                <div class="sms-code">
                    <div v-if="errors.smsCode" class="error__message">
                        {{ errors.smsCode }}
                    </div>
                    <input
                        class="form__input"
                        type="text"
                        placeholder="验证码"
                        v-model="registerForm.smsCode"
                        :class="{ input__error: errors.smsCode }"
                        @focus="errors.smsCode = ''"
                    />
                    <el-button @click="getEmailSms" :disabled="isLoding" class="primary-btn">{{ getSms }}</el-button>
                </div>
                <div class="primary-btn" @click="submitFormRegister">立即注册</div>
            </form>
        </div>
        <div :class="['container', 'container-login', { 'is-txl is-z200': isLogin }]">
            <form class="login-form" @submit.prevent="submitForm">
                <h2 class="title">登录网站</h2>
                <span class="text">或在左侧进行注册</span>

                <div class="input-box">
                    <div v-if="errors.username" class="error__message">
                        {{ errors.username }}
                    </div>
                    <input
                        class="form__input"
                        type="text"
                        placeholder="用户名"
                        v-model="loginForm.username"
                        :class="{ input__error: errors.username }"
                        @focus="errors.username = ''"
                    />
                </div>
                <div class="input-box">
                    <div v-if="errors.email" class="error__message">
                        {{ errors.email }}
                    </div>
                    <input
                        class="form__input"
                        type="text"
                        placeholder="邮箱"
                        v-model="loginForm.email"
                        :class="{ input__error: errors.email }"
                        @focus="errors.email = ''"
                    />
                </div>
                <div class="input-box">
                    <div v-if="errors.password" class="error__message">
                        {{ errors.password }}
                    </div>
                    <input
                        class="form__input"
                        type="password"
                        placeholder="密码"
                        v-model="loginForm.password"
                        :class="{ input__error: errors.password }"
                        @focus="errors.password = ''"
                    />
                </div>
                <div class="sms-code">
                    <div v-if="errors.smsCode" class="error__message">
                        {{ errors.smsCode }}
                    </div>
                    <input
                        class="form__input"
                        type="text"
                        placeholder="验证码"
                        v-model="loginForm.smsCode"
                        :class="{ input__error: errors.smsCode }"
                        @focus="errors.smsCode = ''"
                    />
                    <el-button @click="getEmailSms" :disabled="isLoding" class="primary-btn">{{ getSms }}</el-button>
                </div>
                <div class="primary-btn" @click="submitForm">立即登录</div>
            </form>
        </div>
        <div :class="['switch', { login: isLogin }]">
            <div class="switch__circle"></div>
            <div class="switch__circle switch__circle_top"></div>
            <div class="switch__container">
                <h2>{{ isLogin ? '你好，陌生人 !' : '欢迎回来 !' }}</h2>
                <p>
                    {{ isLogin ? '输入您的个人详细信息并开始我们的旅程' : '要与我们保持联系，请使用您的个人信息登录' }}
                </p>
                <div class="primary-btn" @click="isErrorShow">
                    {{ isLogin ? '立即注册' : '立即登录' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import LoginService from "@/api/login-register";
import { useUserLoginRegisterStore } from "@/store/modules/user";

const userLoginRegisterStore = useUserLoginRegisterStore();

export default {
    name: "LoginBox",
    data() {
        return {
            isLogin  : true,
            loginForm: {
                username: "admin",
                email   : "1960638223@qq.com",
                password: "123456789o",
                smsCode : "123456"
            },
            registerForm: {
                name    : "adi",
                email   : "1960638223@qq.com",
                password: "123456",
                smsCode : "123456",
                role    : "man"
            },
            isLoding: false,
            getSms  : "获取验证码",
            errors  : {
                //错误信息
                username: "",
                email   : "",
                password: "",
                smsCode : ""
            },
            rules: {
                username: { required: true, message: "请输入用户名" },
                email   : { required: true, type: "email", message: "请输入正确的邮箱地址" },
                password: { required: true, message: "请输入密码" },
                smsCode : { required: true, message: "请输入验证码" }
            }
        };
    },
    methods: {
        login() {
            userLoginRegisterStore.userLogin(this.loginForm);
        },
        async register() {
            const { code, reason } = await LoginService.getRegister(this.registerForm);
            if (code === 200) {
                this.$message.success(reason);
                this.$router.push("./main");
            } else {
                this.$message.error(reason);
            }
        },
        /**
         * @description: 获取邮箱验证码
         */
        async getEmailSms() {
            //     每切换一次登录注册，就重新清空倒计时
            if (this.isLoding) return;
            this.isLoding = true;
            let time = 60;
            this.getSms = `${time}s`;
            const timer = setInterval(() => {
                time--;
                this.getSms = `${time}s`;
                if (time <= 0) {
                    clearInterval(timer);
                    this.getSms = "获取验证码";
                    this.isLoding = false;
                }
            }, 1000);
            const { data, reason, code } = await LoginService.getSmsCode(this.loginForm.email);
            if (code === 200) {
                this.$message.success(reason);
                console.log(data);
            } else {
                this.$message.error(reason);
            }
        },

        /**
         * @description: 表单验证
         * @return {Boolean} true:验证通过 false:验证失败
         * */
        validateForm() {
            let valid = true;
            this.errors = {};
            for (let field in this.rules) {
                if (this.rules[field].required && !this.loginForm[field]) {
                    this.errors[field] = this.rules[field].message;
                    valid = false;
                } else if (this.rules[field].type === "email" && !this.validateEmail(this.loginForm[field])) {
                    this.errors[field] = this.rules[field].message;
                    valid = false;
                }
            }
            return valid;
        },
        /**
         * 注册表单验证
         * @return {Boolean} true:验证通过 false:验证失败
         * */
        validateFormRegister() {
            let valid = true;
            this.errors = {};
            for (let field in this.rules) {
                if (this.rules[field].required && !this.registerForm[field]) {
                    this.errors[field] = this.rules[field].message;
                    valid = false;
                } else if (this.rules[field].type === "email" && !this.validateEmail(this.registerForm[field])) {
                    this.errors[field] = this.rules[field].message;
                    valid = false;
                }
            }
            return valid;
        },
        /**
         * @description: 邮箱验证
         * @param {String} email
         * @return {Boolean} true:验证通过 false:验证失败
         * */
        validateEmail(email) {
            const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return reg.test(email);
        },
        submitForm() {
            if (this.validateForm()) {
                // 执行登录操作
                this.login();
            }
        },
        submitFormRegister() {
            if (this.validateFormRegister()) {
                // 执行注册操作
                this.register();
            }
        },
        // 点击后切换登录注册，切换时清空表单,并清空错误信息
        isErrorShow() {
            this.isLogin = !this.isLogin;
            this.loginForm = {
                username: "",
                email   : "",
                password: "",
                smsCode : ""
            };
            this.registerForm = {
                name    : "",
                email   : "",
                password: ""
            };
            this.errors = {
                username: "",
                email   : "",
                password: "",
                smsCode : ""
            };
        }
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

        form {
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

            .sms-code {
                width: 370px;

                input {
                    width: 265px;
                }

                .primary-btn {
                    //登录按钮
                    width: 85px;
                    height: 30px;
                    font-size: 11px;
                    margin-top: 0;
                }
            }

            .form__input {
                width: 350px;
                height: 40px;
                margin: 14px 0;
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

.error__message {
    //    错误信息提示，显示在父元素的下方
    position: absolute;
    left: 140px;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    color: #ff0000;
    text-align: center;
    margin-right: 5px;
}

//输入框
.input-box {
    width: 380px;
    display: flex;
    justify-content: flex-end;

    &:last-child {
        width: 550px;
    }
}
</style>
