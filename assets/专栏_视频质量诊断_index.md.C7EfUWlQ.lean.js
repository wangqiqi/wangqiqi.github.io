import{Ct as e,H as t,at as n,ct as r,ot as i,yt as a}from"./chunks/framework.C56o9mkq.js";var o=JSON.parse(`{"title":"视频质量诊断 · 技术专题","description":"","frontmatter":{"layout":"doc","title":"视频质量诊断 · 技术专题","categories":["专栏","计算机视觉"],"tags":["视频质量评估","传统图像处理","OpenCV"],"lastUpdated":true,"sidebar":true},"headers":[],"relativePath":"专栏/视频质量诊断/index.md","filePath":"专栏/视频质量诊断/index.md","lastUpdated":1787585500000}`),s={name:`专栏/视频质量诊断/index.md`};function c(t,o,s,c,l,u){let d=e(`Mermaid`);return a(),n(`div`,null,[o[0]||=i("",6),r(d,{content:`flowchart TB
    A[输入视频帧] --> B[预处理]
    B --> C[单帧检测]
    B --> D[时序检测]
    C --> C1[清晰度 / 噪声]
    C --> C2[色彩 / 亮度 / 对比度]
    C --> C3[蓝屏 / 块效应 / 遮挡]
    D --> D1[光流 → 抖动]
    D --> D2[帧差 → 冻结]
    C1 --> E[阈值判定]
    C2 --> E
    C3 --> E
    D1 --> E
    D2 --> E
    E --> F[异常报告]
`,height:`380px`},null,8,[`content`]),o[1]||=i("",10)])}var l=t(s,[[`render`,c]]);export{o as __pageData,l as default};