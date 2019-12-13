# 🌈 k-progress

> 一个 Vue 插件，线性进度条。

[English](./README.md) | 简体中文
## 📦 安 装
```
npm install -S k-progress
```

## 🔨 开始使用
```
// main.js
import 'kProgress';
```
## 📔 参 数
|    参 数     |     类 型      |  默认值   |             可选值              |             说 明             |
| :----------: | :------------: | :-------: | :-----------------------------: | :---------------------------: |
|   percent    |     Number     |     0     |              0-100              |        百分比（必填）         |
| line-height  |     Number     |     6     |                                 |          进度条高度           |
|     type     |     String     |           | `success` / `warning` / `error` |          进度条类型           |
|    color     | String / Array |           |                                 |          进度条颜色           |
|   bg-color   |     String     | `#ebeef5` |            颜色代码             |        进度条背景颜色         |
|  show-text   |    Boolean     |  `true`   |                                 |      是否显示进度条文字       |
|    format    |    Function    |           |                                 | 自定义文字显示，参数为percent |
|    active    |    Boolean     |  `false`  |                                 |         是否开启动效          |
| active-color | String / Array |           |                                 |           动效颜色            |

## 🖊 说 明
若您在使用中，发现问题，欢迎指正！ 
- [Issues](https://github.com/xrkffgg/k-progress/issues) 
- [PR](https://github.com/xrkffgg/k-progress/pulls)

## LICENSE
[MIT](https://github.com/xrkffgg/k-progress/blob/master/LICENSE)