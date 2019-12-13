# 🌈 k-progress

> A Vue plugin, linear progress bar.

English | [简体中文](./README-CN.md) 

## 📦 Install
```
npm install -S k-progress
```

## 🔨 Begin Start
```
// main.js
import 'kProgress';
```

## 📔 Attributes
|  Attribute   |      Type      |  Default  |          Optional           |                  explain                  |
| :----------: | :------------: | :-------: | :-------------------------: | :---------------------------------------: |
|   percent    |     Number     |     0     |            0-100            |            Percent (Required)             |
| line-height  |     Number     |     6     |                             |            Progress bar height            |
|     type     |     String     |           | `success` `warning` `error` |             Progress bar type             |
|    color     | String / Array |           |                             |            Progress bar color             |
|   bg-color   |     String     | `#ebeef5` |         Color code          |       Progress bar background color       |
|  show-text   |    Boolean     |  `true`   |                             |     Whether to show progress bar text     |
|    format    |    Function    |           |                             | Custom text display, parameter is percent |
|    active    |    Boolean     |  `false`  |                             |     Whether to enable dynamic effects     |
| active-color | String / Array |           |                             |           Dynamic effect color            |

## 🖊 Explain
If you are in use, find the problem, welcome to correct!
- [Issues](https://github.com/xrkffgg/k-progress/issues) 
- [PR](https://github.com/xrkffgg/k-progress/pulls)

## LICENSE
[MIT](https://github.com/xrkffgg/k-progress/blob/master/LICENSE)