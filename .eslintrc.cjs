module.exports = {
    root: true, // 停止向上查找父级目录中的配置文件
    env : {
        browser: true,
        es2021 : true,
        node   : true
    },
    extends: [
        './.eslintrc-auto-import.json', // 引入自动导入插件配置文件
        'eslint:recommended', // ESLint 推荐规则
        'plugin:vue/vue3-essential', // Vue3 推荐规则
        'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
        'plugin:prettier/recommended' // Prettier 推荐规则
    ],
    parser       : 'vue-eslint-parser', // 指定要使用的解析器
    parserOptions: {
        ecmaVersion: 12, // 支持的 ES 版本，这里是 ECMAScript 2021
        sourceType : 'module', // 模块类型，默认为 script，我们设置为 module
        parser     : '@typescript-eslint/parser' // 使用 TypeScript 解析器
    },
    plugins: ['vue', '@typescript-eslint', 'prettier'], // 引用的插件列表
    rules  : {
        'vue/multi-word-component-names'    : 'off', // 关闭多词组件名检测
        '@typescript-eslint/no-var-requires': 'off', // 关闭 require 导入警告
        'prettier/prettier'                 : [
            'off',
            {
                printWidth               : 120,
                tabWidth                 : 4,
                useTabs                  : false,
                semi                     : true,
                singleQuote              : true,
                quoteProps               : "as-needed",
                jsxSingleQuote           : false,
                trailingComma            : "all",
                bracketSpacing           : true,
                jsxBracketSameLine       : false,
                arrowParens              : "always",
                requirePragma            : false,
                insertPragma             : false,
                proseWrap                : "preserve",
                htmlWhitespaceSensitivity: "css",
                endOfLine                : "auto"
            }
        ],
        "comma-dangle"          : ["warn", "never"],
        eqeqeq                  : "warn",
        "arrow-parens"          : 0,
        "generator-star-spacing": 0,

        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        indent                       : [1, 4, { SwitchCase: 1 }],
        "space-before-function-paren": ["warn", "never"],
        "no-constant-condition"      : ["warn"],
        "no-empty"                   : ["off"],
        "comma-spacing"              : ["warn", { after: true }],
        "key-spacing"                : [
            "warn",
            {
                singleLine: {},
                multiLine : { align: "colon" }
            }
        ]
    }
};
