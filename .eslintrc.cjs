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
                // 一行最多 120 字符
                printWidth               : 120,
                // 使用空格缩进
                tabWidth                 : 4,
                // 不使用 tab 缩进，而使用空格
                useTabs                  : false,
                // 行尾需要有分号
                semi                     : true,
                // 使用单引号代替双引号
                singleQuote              : true,
                // 对象的 key 仅在必要时用引号
                quoteProps               : 'as-needed',
                // jsx 不使用单引号，而使用双引号
                jsxSingleQuote           : false,
                // 末尾使用逗号
                trailingComma            : 'all',
                // 大括号内的首尾需要空格 { foo: bar }
                bracketSpacing           : true,
                // jsx 标签的反尖括号需要换行
                jsxBracketSameLine       : false,
                // 箭头函数，只有一个参数的时候，也需要括号
                arrowParens              : 'always',
                // 每个文件格式化的范围是文件的全部内容
                rangeStart               : 0,
                rangeEnd                 : Infinity,
                // 不需要写文件开头的 @prettier
                requirePragma            : false,
                // 不需要自动在文件开头插入 @prettier
                insertPragma             : false,
                // 使用默认的折行标准
                proseWrap                : 'preserve',
                // 根据显示样式决定 html 要不要折行
                htmlWhitespaceSensitivity: 'css',
                // 换行符使用 lf
                endOfLine                : 'auto'
            }
        ],
        'comma-dangle'                          : ['warn', 'never'],
        eqeqeq                                  : 'warn',
        'arrow-parens'                          : 0,
        'generator-star-spacing'                : 0,
        'vue/no-deprecated-v-on-native-modifier': 'off',

        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        indent                       : [1, 4, { SwitchCase: 1 }],
        'space-before-function-paren': ['warn', 'never'],
        'no-constant-condition'      : ['warn'],
        'no-empty'                   : ['off'],
        'comma-spacing'              : ['warn', { after: true }],
        'key-spacing'                : [
            'warn',
            {
                singleLine: {},
                multiLine : { align: 'colon' }
            }
        ]
    }
};
