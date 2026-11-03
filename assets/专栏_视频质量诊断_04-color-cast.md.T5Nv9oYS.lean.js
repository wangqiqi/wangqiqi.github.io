import{H as e,_t as t,it as n,ot as r,rt as i,xt as a}from"./chunks/framework.Bv6N2_O1.js";import"./chunks/assets.ClQyndMI.js";var o=JSON.parse(`{"title":"04 · 偏色检测","description":"","frontmatter":{"layout":"doc","title":"04 · 偏色检测","categories":["专栏","计算机视觉"],"tags":["偏色","Lab","白平衡"],"lastUpdated":true,"sidebar":true},"headers":[],"relativePath":"专栏/视频质量诊断/04-color-cast.md","filePath":"专栏/视频质量诊断/04-color-cast.md","lastUpdated":1793677093000}`),s={name:`专栏/视频质量诊断/04-color-cast.md`};function c(e,o,s,c,l,u){let d=a(`Mermaid`);return t(),i(`div`,null,[o[0]||=n("",21),r(d,{content:`flowchart LR
    A[BGR 图像] --> B[cvtColor → Lab]
    B --> C[提取 a*, b* 平面]
    C --> D[计算 D, M]
    D --> E[K = D / M]
    E --> F{K > T?}
    F -->|是| G[偏色告警]
`,height:`380px`},null,8,[`content`]),o[1]||=n("",12)])}var l=e(s,[[`render`,c]]);export{o as __pageData,l as default};