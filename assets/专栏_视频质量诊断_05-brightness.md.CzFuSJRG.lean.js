import{H as e,_t as t,it as n,ot as r,rt as i,xt as a}from"./chunks/framework.Bv6N2_O1.js";import"./chunks/assets.ClQyndMI.js";var o=JSON.parse(`{"title":"05 · 过亮与过暗检测","description":"","frontmatter":{"layout":"doc","title":"05 · 过亮与过暗检测","categories":["专栏","计算机视觉"],"tags":["亮度","直方图","曝光"],"lastUpdated":true,"sidebar":true},"headers":[],"relativePath":"专栏/视频质量诊断/05-brightness.md","filePath":"专栏/视频质量诊断/05-brightness.md","lastUpdated":1793678055000}`),s={name:`专栏/视频质量诊断/05-brightness.md`};function c(e,o,s,c,l,u){let d=a(`Mermaid`);return t(),i(`div`,null,[o[0]||=n("",27),r(d,{content:`flowchart TD
    A[计算 R_dark, R_bright] --> B{R_dark > T_dark?}
    B -->|是| C[过暗，取消过亮标志]
    B -->|否| D{R_bright > T_bright?}
    D -->|是| E[过亮]
    D -->|否| F[亮度正常]
`,height:`380px`},null,8,[`content`]),o[1]||=n("",12)])}var l=e(s,[[`render`,c]]);export{o as __pageData,l as default};