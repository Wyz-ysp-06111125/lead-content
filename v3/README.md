# 博客前端

## 下载依赖
```
npm install
```

### 运行项目
```
npm run serve
```

### 编译项目
```
npm run build
```

### 目录结构

src 为主要代码

assets 静态资源图片等

components 全局组件
  - ImageItem 图文样式组件
  - TextItem  文本样式组件

layout  页面整体布局
  - NavBar 顶部导航
  - Footer 底部内容
  - index  主要出口

mock  页面所使用静态数据
  - about 关于页面数据
  - images 图文列表数据
  - textNews 文本新闻数据
  - message 留言板内容

router 路由配置

store vuex(暂时无用)

utils 工具函数
  - index 封装自定义函数

const 常量
  - index 导出常量

views 所有页面
  - HomeView 首页
  - AboutView 关于
  - ImageView 图文
  - ImageDetail 图文详情
  - TextDetail 新闻详情
  - MessageBoard 留言板

### 一级文件

App.vue 程序页面入口-全局样式

main.js 项目入口文件 引入第三方库等

config.js 配置网站默认标题 与 底部文案 logo文案