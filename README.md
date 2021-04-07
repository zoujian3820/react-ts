# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### 实现css 在ts中增加类型检查
```bash
npm install typescript-plugin-css-modules --save-dev

tsconfig.json
    compilerOptions: {
        "plugins": [{"name": "typescript-plugin-css-modules"}]
    }
.vscode -> settings.json
    {
    "editor.formatOnSave": true, # 这个是编辑器保存自动格式代
    # 与ts相关的是下面两个
    "typescript.tsdk": "node_modules/typescript/lib",
	"typescript.enablePromptUseWorkspaceTsdk": true
    }    
```

## 用TypeScript编写React的最佳实践
https://blog.csdn.net/weixin_40906515/article/details/106798727

- ESLint / Prettier
    - 1.安装依赖
        ```bash
        npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --save-dev
        ```
    - 2.在根目录下创建一个eslintrc.js 文件并添加以下内容：
        ```javascript
        module.exports = {
            parser: '@typescript-eslint/parser', // 指定ESLint解析器
            extends: [
                'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
                'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
                'prettier/@typescript-eslint', // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
                'plugin:prettier/recommended',
            ],
            parserOptions: {
                ecmaVersion: 2018, // 允许解析最新的 ECMAScript 特性
                sourceType: 'module', // 允许使用 import
                ecmaFeatures: {
                    jsx: true, // 允许对JSX进行解析
                },
            },
            rules: {
                // 自定义规则
                // e.g. "@typescript-eslint/explicit-function-return-type": "off",
            },
            settings: {
                react: {
                    version: 'detect', // 告诉 eslint-plugin-react 自动检测 React 的版本
                },
            },
        };
        ```
    - 3.添加 Prettier 依赖
        ```bash
        npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
        ```
    - 4.在根目录下创建一个 .prettierrc.js 文件并添加以下内容：
        ```javascript
        module.exports = {
            semi: true,
            trailingComma: 'all',
            singleQuote: true,
            printWidth: 120,
            tabWidth: 4,
        };
        ```    
    - 5.VSCode 扩展和设置
    我们添加了 ESLint 和 Prettier ，下一步就是在保存时自动修复/美化我们的代码。
    首先，安装 VSCode 的 ESLint extension 和 Prettier extension 。这将使 ESLint 与您的编辑器无缝集成。
    接下来，通过将以下内容添加到您的中来更新工作区设置 .vscode/settings.json
    或者在vscode设置中搜索格式化，设置用户/作区，选保存时格式化代码
        ```json
        {
            "editor.formatOnSave": true // 保存时格式化代码
        }
        ```