# 插图来源说明

> 本地样例源自内部测试集（`tests/fixtures/`），**均已脱敏**后用于博客发布。

| 本地路径 | 缺陷类型 | 脱敏方式 |
|---------|---------|---------|
| `samples/normal_01.jpg` | 正常基线 | 裁切上下 OSD 条 |
| `samples/blur_01.jpg` | 模糊 | 裁切顶部 OSD |
| `samples/noise_01.jpg` | 噪声 | **合成**雪花噪声（替换原「阳光」水印图） |
| `samples/color_cast_01.jpg` | 偏色 | 裁切上下 OSD 条 |
| `samples/over_bright_01.jpg` | 过亮 | 裁切上下 OSD 条 |
| `samples/over_dark_01.jpg` | 过暗 | 无敏感信息，原样保留 |
| `samples/low_contrast_01.jpg` | 低对比度 | 裁切上下 OSD + 去除「中国天气」水印 |
| `samples/blue_screen_01.jpg` | 蓝屏 | 无敏感信息，原样保留 |
| `samples/mosaic_01.jpg` | 马赛克（备用） | 裁切 OSD + 中心裁切 |
| `samples/corrupt_display_01.jpg` | 花屏（备用） | 裁切 OSD + 中心裁切 |
| `samples/occlusion_01.jpg` | 遮挡 | 去除右下角地理位置水印 + 右上角时间戳 |
| `../optical-flow.png` | 光流示意 | 自绘 SVG 导出，无实拍 |

**外链（08 章）**

| 用途 | 来源 |
|------|------|
| JPEG 宏块效应 | [The macroblocking effect (JPEG).png](https://commons.wikimedia.org/wiki/File:The_macroblocking_effect_(JPEG).png) · Public Domain |
| 解码花屏 | [Decodierfehler Videowiedergabe 4K-Video 20230824.png](https://commons.wikimedia.org/wiki/File:Decodierfehler_Videowiedergabe_4K-Video_20230824.png) · Public Domain |

**时序类**（抖动 / 冻结）暂无单帧 fixture，见 `10-temporal-anomaly` 中的 SVG / PNG 示意。
