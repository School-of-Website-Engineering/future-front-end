<template>
    <div class="home">
        <div class="homepage">
            <div class="homepage_logo">
                <a href="https://www.4399.com/">
                    <img src="@/assets/logo.png" alt="" />
                </a>
            </div>
            <div class="homepage_menu">
                <ul>
                    <li>主页</li>
                    <li>主页</li>
                    <li>主页</li>
                    <li>主页</li>
                    <li>主页</li>
                    <li>主页</li>
                    <li>主页</li>
                    <li>主页</li>
                </ul>
            </div>
            <button class="homepage_button" @click="$router.push('login')">登录</button>
        </div>
        <div class="hometext">
            <h2>想象这样一个场所......</h2>
            <p class="center-text">
                在这里，您可以加入校园俱乐部、游戏群组，或是世界级艺术社区。在这里，您也能邀三<br />五好友一起共度欢乐时光。在这里，您可以轻而易举地每日谈天说地，时常消遣娱乐。
            </p>
            <div class="hometext_Download">
                <button><i class="fa-solid fa-download"></i> 下载PC端</button>
                <button @click="$router.push('main/@me')">在你的浏览器中打开</button>
            </div>
        </div>
        <div class="background_img">
            <img src="../../assets/background_1.svg" alt="" class="background_1" />
            <img src="../../assets/background_2.svg" alt="" class="background_2" />
            <img src="../../assets/background_3.svg" alt="" class="background_3" />
        </div>
        <!-- 暂时性站位 -->
        <div class="leave"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.home {
    background-color: rgb(64, 78, 237);
    .homepage {
        width: 100%;
        font-size: 16px;
        display: flex;
        justify-content: space-around;

        .homepage_logo {
            a {
                img {
                    width: 150px;
                }
            }
        }

        .homepage_menu {
            ul {
                display: flex;

                li {
                    margin: 25px;
                    cursor: pointer;
                    color: white;
                }
            }
        }

        .homepage_button {
            width: 50px;
            margin: 15px;
            padding: 10px;
            border-radius: 35px;
            border: none;
            cursor: pointer;
        }
    }

    .hometext {
        h2 {
            font-size: 56px;
            text-align: center;
            margin: 100px 50px 50px;
            color: white;
        }

        p {
            font-size: 20px;
            width: 800px;
            margin: 0 auto;
            text-align: center;
            color: white;
            overflow-wrap: break-word; /* 新版本的 CSS 规范中推荐将该属性用于替代 word-wrap */
        }

        .hometext_Download {
            text-align: center;
            margin: 50px auto;
            &:nth-child(2) {
                /*内层被遮挡的元素设置auto 实现点击被遮挡的内层元素*/
                pointer-events: auto;
            }
            button {
                cursor: pointer;
                font-size: 24px;
                margin: 15px;
                padding: 15px 32px;
                border-radius: 41px;
                border: none;
                color: black;
                &:nth-child(2) {
                    background-color: #23272a;
                    color: #fffff2;
                }
            }
        }
    }

    .background_img {
        width: 100%;
        margin: 0 auto;

        .background_1 {
            /*外层被遮挡的svg设置none*/
            pointer-events: none;
            width: 100%;
            position: absolute;
            bottom: 0;
        }

        .background_2 {
            width: 500px;
            position: absolute;
            bottom: 0;
            left: -200px;
            overflow: hidden;
        }

        .background_3 {
            width: 500px;
            position: absolute;
            bottom: 0;
            right: 0;
            overflow: hidden;
        }
    }

    /*
          暂时性站位
      */
    .leave {
        width: 100%;
        height: 212px;
    }
}
</style>
