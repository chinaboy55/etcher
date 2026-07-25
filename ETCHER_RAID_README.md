# Etcher RAID 修改记录

> 日期: 2026-07-25  
> 目的: 解除 Etcher 对 RAID 设备的隐藏，使其可以烧录到 RAID 阵列

---

## 背景

HP 服务器使用 RAID 阵列作为存储，但 BalenaEtcher 在 v1.4.2 之后默认屏蔽了 RAID 设备（`busType === 'RAID'` 的设备不会显示在列表中），以防止误烧录。

## 修改原理

### 屏蔽位置

`etcher-sdk` 包的 `build/scanner/adapters/block-device.js` 中有一行关键过滤：

```javascript
drive.busType !== 'RAID' &&  // ← 删除这行即可解除屏蔽
```

### 修改方式

采用 **patch-package 方案**：在项目根目录创建 `patch-etcher-sdk.js` 脚本，作为 `npm install` 的 `postinstall` 钩子，安装依赖后自动去掉 RAID 过滤。

### 相关文件

| 文件 | 作用 |
|------|------|
| `patch-etcher-sdk.js` | postinstall 脚本，自动修改 `node_modules/etcher-sdk` |
| `package.json` | 添加了 `"postinstall": "node patch-etcher-sdk.js"` |

## 修复的编译问题

编译过程中发现以下问题并修复：

1. **`.gitignore` 忽略 `typings/` 目录** — 导致 `lib/shared/typings/source-selector.ts` 等类型文件未被提交
2. **`path-is-inside` 类型声明缺失** — 在 `typings/path-is-inside/index.d.ts` 补充
3. **`import * as` 与 `export =` 不兼容** — 将 `import * as pathIsInside` 改为 `import pathIsInside = require('path-is-inside')`

## 分支说明

| 分支 | 内容 |
|------|------|
| `master` | 原始代码，未修改 |
| `allow-raid` | 修改版，含 RAID 补丁 |

## 分支操作记录

```
97a6806 initial commit: balenaEtcher v2.1.6 source
59e2cf6 add postinstall patch to allow RAID drives
a4466c0 add build workflow
eaef631 fix: include typings in git
1a48b5a fix: add esModuleInterop and skipLibCheck
a8f7a50 fix: use require import for path-is-inside
```

## GitHub Actions 编译

- 使用自定义 workflow: `.github/workflows/build.yml`
- 在 GitHub Actions 上编译出跨平台安装包（Ubuntu / Windows）
- 未使用项目自带的 Flowzone（fork 缺少密钥）

## 安装包

| 平台 | 大小 | SHA256 |
|------|------|--------|
| Ubuntu 22.04 | 373 MB | `1b555e6e353fd55db3416016c08635fa0c4f2694d14388f036a3039886e762f3` |
| Windows 2022 | 483 MB | `25c255db00ce4224b07565985f086ab271b4fa4310ecf66f1c2bb1f9634d3ee9` |

## Fork 地址

- https://github.com/chinaboy55/etcher

---

## 使用说明

1. 从 GitHub Actions 下载对应平台的安装包（Artifact）
2. 安装后打开，RAID 设备会自动显示在驱动选择列表中
3. 注意：去掉了 RAID 屏蔽保护，烧录时请确认目标盘无误
