# 🌈 k-progress

> 一个 Vue 插件，线性进度条。

![](https://img.shields.io/npm/v/k-progress?color=success&style=flat-square)
![](https://img.shields.io/github/languages/top/xrkffgg/k-progress?style=flat-square)
![](https://img.shields.io/github/languages/code-size/xrkffgg/k-progress?color=orange&style=flat-square)
![](https://img.shields.io/github/stars/xrkffgg/k-progress?color=blueviolet&style=flat-square)
![](https://img.shields.io/github/license/xrkffgg/k-progress?color=red&style=flat-square)
![](https://img.shields.io/npm/dt/k-progress?color=ff69b4&style=flat-square)

[English](./README.md) | 简体中文

## 📚 教 程
[k-progress](https://xrkffgg.github.io/Knotes/course/k-progress.html)

## 📦 安 装
```
npm install -S k-progress
```

## 🔨 开始使用
```
// main.js
import 'k-progress';
import 'k-progress/dist/k-progress.css';
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

## 🖊 欢 迎
感谢您的使用，若您发现问题任何问题，欢迎指正！ 
- [Issues](https://github.com/xrkffgg/k-progress/issues) 
- [PR](https://github.com/xrkffgg/k-progress/pulls)

## LICENSE
[MIT](https://github.com/xrkffgg/k-progress/blob/master/LICENSE)