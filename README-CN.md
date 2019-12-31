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
```bash
npm install -S k-progress
# or
yarn add k-progress
```

## 🔨 开始使用
```js
// main.js
import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);
```
## 📔 参 数
|    参 数     |           类 型           |  默认值   |             可选值              |                                       说 明                                       |
| :----------: | :-----------------------: | :-------: | :-----------------------------: | :-------------------------------------------------------------------------------: |
|   percent    |          Number           |     0     |              0-100              |                                  百分比（必填）                                   |
| line-height  |          Number           |     6     |                                 |                                    进度条高度                                     |
|     type     |          String           |  `line`   |         `line` / `lump`         |                                    进度条类型                                     |
|    status    |          String           |           | `success` / `warning` / `error` |                                    进度条状态                                     |
|    color     | String / Array / Function |           |                                 | 进度条颜色；当使用`Array`时，限制个数为 6；当使用 `Function` 时，参数为 `percent` |
|  color-flow  |          Boolean          |  `false`  |                                 |                                 是否开启颜色流动                                  |
| flow-second  |          Number           |     5     |               1-6               |                        流动所需时间，即时间越小，速度越快                         |
|   bg-color   |          String           | `#ebeef5` |            颜色代码             |                                  进度条背景颜色                                   |
|    border    |          Boolean          |  `true`   |                                 |                                     是否圆弧                                      |
|  show-text   |          Boolean          |  `true`   |                                 |                                是否显示进度条文字                                 |
|    format    |         Function          |           |                                 |                         自定义文字显示，参数为 `percent`                          |
|  cut-width   |          Number           |     1     |                                 |                                    `lump` 宽度                                    |
|  cut-color   |          String           | `#ebeef5` |            颜色代码             |                                    `lump` 颜色                                    |
|    active    |          Boolean          |  `false`  |                                 |                                   是否开启动效                                    |
| active-color |          String           |           |                                 |                                     动效颜色                                      |

## 📒 更新日志
[更新日志](./CHANGELOG-CN.md)

## 🖊 欢 迎
感谢您的使用，若您发现问题任何问题，欢迎指正！ 
- [Issues](https://github.com/xrkffgg/k-progress/issues) 
- [PR](https://github.com/xrkffgg/k-progress/pulls)

## LICENSE
[MIT](https://github.com/xrkffgg/k-progress/blob/master/LICENSE)