import{t as e}from"./channel.C7RSXnb3.js";import{A as t,Dt as n,E as r,Ft as i,R as a,c as o,dn as s,fn as c,m as l,mn as u,ot as d,pn as f,v as p,w as m,x as h,z as g,zt as _}from"./Mermaid.C-9Bo34N.js";import{t as v}from"./graphlib.MW22oeFV.js";import{t as y}from"./index-5325376f.BG2SmoHP.js";function b(e){return typeof e==`string`?new c([document.querySelectorAll(e)],[document.documentElement]):new c([u(e)],f)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var r=t.graph();if(d(r)){var i=r.transition;if(n(i))return i(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,n,i,a,s,c){let u=a.select(`[id="${i}"]`),d=Object.keys(e);for(let i of d){let a=e[i],d=`default`;a.classes.length>0&&(d=a.classes.join(` `)),d+=` flowchart-label`;let f=h(a.styles),m=a.text===void 0?a.id:a.text,g;if(r.info(`vertex`,a,a.labelType),a.labelType===`markdown`)r.info(`vertex`,a,a.labelType);else if(l(p().flowchart.htmlLabels))g=O(u,{label:m}).node(),g.parentNode.removeChild(g);else{let e=s.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,f.labelStyle.replace(`color:`,`fill:`));let t=m.split(o.lineBreakRegex);for(let n of t){let t=s.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(a.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await t(m,p());n.setNode(a.id,{labelStyle:f.labelStyle,shape:v,labelText:y,labelType:a.labelType,rx:_,ry:_,class:d,style:f.style,id:a.id,link:a.link,linkTarget:a.linkTarget,tooltip:c.db.getTooltip(a.id)||``,domId:c.db.lookUpDomId(a.id),haveCallback:a.haveCallback,width:a.type===`group`?500:void 0,dir:a.dir,type:a.type,props:a.props,padding:p().flowchart.padding}),r.info(`setNode`,{labelStyle:f.labelStyle,labelType:a.labelType,shape:v,labelText:y,rx:_,ry:_,class:d,style:f.style,id:a.id,domId:c.db.lookUpDomId(a.id),width:a.type===`group`?500:void 0,type:a.type,dir:a.dir,props:a.props,padding:p().flowchart.padding})}},M=async function(e,n,i){r.info(`abc78 edges = `,e);let a=0,s={},c,l;if(e.defaultStyle!==void 0){let t=h(e.defaultStyle);c=t.style,l=t.labelStyle}for(let i of e){a++;let u=`L-`+i.start+`-`+i.end;s[u]===void 0?(s[u]=0,r.info(`abc78 new entry`,u,s[u])):(s[u]++,r.info(`abc78 new entry`,u,s[u]));let d=u+`-`+s[u];r.info(`abc78 new link id to be used is`,u,d,s[u]);let f=`LS-`+i.start,g=`LE-`+i.end,v={style:``,labelStyle:``};switch(v.minlen=i.length||1,v.arrowhead=i.type===`arrow_open`?`none`:`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,i.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`}let y=``,b=``;switch(i.stroke){case`normal`:y=`fill:none;`,c!==void 0&&(y=c),l!==void 0&&(b=l),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`}if(i.style!==void 0){let e=h(i.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,v.curve=i.interpolate===void 0?e.defaultInterpolate===void 0?m(k.curve,_):m(e.defaultInterpolate,_):m(i.interpolate,_),i.text===void 0?i.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=i.labelType,v.label=await t(i.text.replace(o.lineBreakRegex,`
`),p()),i.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=d,v.classes=`flowchart-link `+f+` `+g,n.setEdge(i.start,i.end,v,a)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,n,i){r.info(`Drawing flowchart`);let o=i.db.getDirection();o===void 0&&(o=`TD`);let{securityLevel:c,flowchart:l}=p(),u=l.nodeSpacing||50,d=l.rankSpacing||50,f;c===`sandbox`&&(f=s(`#i`+t));let m=s(c===`sandbox`?f.nodes()[0].contentDocument.body:`body`),h=c===`sandbox`?f.nodes()[0].contentDocument:document,_=new v({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:u,ranksep:d,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=i.db.getSubGraphs();r.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],r.info(`Subgraph - `,x),i.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=i.db.getVertices(),w=i.db.getEdges();r.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)r.info(`Setting up subgraphs`,x.nodes[e],x.id),_.setParent(x.nodes[e],x.id)}await j(C,_,t,m,h,i),await M(w,_);let E=m.select(`[id="${t}"]`),D=m.select(`#`+t+` g`);if(await y(D,_,[`point`,`circle`,`cross`],`flowchart`,t),g.insertTitle(E,`flowchartTitleText`,l.titleTopMargin,i.db.getDiagramTitle()),a(_,E,l.diagramPadding,l.useMaxWidth),i.db.indexNodes(`subGraph`+T),!l.htmlLabels){let e=h.querySelectorAll(`[id="`+t+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=h.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let n=C[e];if(n.link){let r=s(`#`+t+` [id="`+e+`"]`);if(r){let e=h.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,n.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,n.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),c===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):n.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,n.linkTarget);let t=r.insert(function(){return e},`:first-child`),i=r.select(`.label-container`);i&&t.append(function(){return i.node()});let a=r.select(`.label`);a&&t.append(function(){return a.node()})}}})}},P=(t,n)=>{let r=e,a=r(t,`r`),o=r(t,`g`),s=r(t,`b`);return i(a,o,s,n)},F=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${P(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{T as a,x as c,E as i,b as l,F as n,D as o,O as r,S as s,N as t};