## Maple-vue-admin
vue3+element-plus+ts+pinia+webpack

### 功能

```text
- 全局功能
  - iconfont
  - 国际化多语言
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Screenfull全屏
  - 自适应收缩侧边栏
```

### 开发

```bash
# clone the project
git clone https://github.com/Tansir0317/Maple-vue-admin.git

# enter the project directory
cd Maple-vue-admin

# install dependency
npm install

# develop
npm run dev
```

### 目录

```
Maple-vue-admin
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   ├── components
│   ├── constant
│   ├── layouts
│   ├── locales
│   ├── plugins
│   ├── router
│   ├── stores
│   ├── style
│   ├── types
│   ├── utils
│   ├── views
│   ├── App.vue
│   └── main.ts
├── .eslintrc.cjs
├── .prettierrc.json
├── LICENSE
├── README.md
├── env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.config.json
├── tsconfig.json
└── vite.config.ts
```

### Pinia
项目中pinia使用全局注册 
https://github.com/Tansir0317/Maple-vue-admin/blob/main/src/stores/index.ts

并在vite.config.ts中增加打包配置，抽取到公共chunk
https://github.com/Tansir0317/Maple-vue-admin/blob/53801c5969fe9385377850fc5c55791ff7190c2e/vite.config.ts

## License

[MIT](https://github.com/Tansir0317/Maple-vue-admin/blob/main/LICENSE)

Copyright (c) 2023 Tansir0317