import{H as e,_t as t,it as n,ot as r,rt as i,xt as a}from"./chunks/framework.Bv6N2_O1.js";import"./chunks/assets.ClQyndMI.js";var o=JSON.parse(`{"title":"10 · 时序异常：抖动与冻结","description":"","frontmatter":{"layout":"doc","title":"10 · 时序异常：抖动与冻结","categories":["专栏","计算机视觉"],"tags":["抖动","冻结","光流","帧差"],"lastUpdated":true,"sidebar":true},"headers":[],"relativePath":"专栏/视频质量诊断/10-temporal-anomaly.md","filePath":"专栏/视频质量诊断/10-temporal-anomaly.md","lastUpdated":1793677093000}`),s={name:`专栏/视频质量诊断/10-temporal-anomaly.md`};function c(e,o,s,c,l,u){let d=a(`Mermaid`);return t(),i(`div`,null,[o[0]||=n("",47),r(d,{content:`flowchart TB
    subgraph shake["抖动检测"]
        A1["当前帧与上一帧"] --> B1["Farneback 光流"]
        B1 --> C1["分块统计 幅度/方差/方向"]
        C1 --> D1["窗口比例 R_shake"]
    end
    subgraph freeze["冻结检测"]
        A2["当前帧与上一帧"] --> B2["帧差 absdiff"]
        B2 --> C2["静止比例 F_t"]
        C2 --> D2["窗口比例 R_freeze"]
    end
`,height:`380px`},null,8,[`content`]),o[1]||=n("",6)])}var l=e(s,[[`render`,c]]);export{o as __pageData,l as default};