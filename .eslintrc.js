module.exports = {
    // 环境
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    // 使用的扩展库
    "extends": ["airbnb"],
    // 解析器用于解析代码
    parser: "babel-eslint",
    // 解析器配置
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    // 第三方插件
    "plugins": [
        "react"
    ],
    // 规则
    "rules": {
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-indent": [ // 解决react里面的缩进问题
            "error",
            "tab"
        ],
        "react/jsx-indent-props": [ //
            "error",
            "tab"
        ],
        "no-tabs": "off", // 禁止缩进错误
        // 允许使用 for in
        "no-restricted-syntax": 0,
        "guard-for-in": 0,
        // 允许在 .js 和 .jsx 文件中使用 jsx
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        // 不区分是否是 无状态组件
        "react/prefer-stateless-function": 0
    }
};