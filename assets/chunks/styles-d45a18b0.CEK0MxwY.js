import{A as e,Dt as t,E as n,Ft as r,It as i,R as a,Ut as o,c as s,fn as c,m as l,ot as u,pn as d,v as f,w as p,x as m,z as h}from"./theme.Bu7UcelG.js";import{t as g}from"./graphlib.Br8oieNr.js";import{t as _}from"./index-5325376f.BafwKEAO.js";function v(e,t){return!!e.children(t).length}function y(e){return x(e.v)+`:`+x(e.w)+`:`+x(e.name)}var b=/:/g;function x(e){return e?String(e).replace(b,`\\:`):``}function S(e,t){t&&e.attr(`style`,t)}function C(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function w(e,n){var r=n.graph();if(u(r)){var i=r.transition;if(t(i))return i(e)}return e}function T(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}S(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var E={},D=function(e){let t=Object.keys(e);for(let n of t)E[n]=e[n]},O=async function(t,r,i,a,o,c){let u=a.select(`[id="${i}"]`),d=Object.keys(t);for(let i of d){let a=t[i],d=`default`;a.classes.length>0&&(d=a.classes.join(` `)),d+=` flowchart-label`;let p=m(a.styles),h=a.text===void 0?a.id:a.text,g;if(n.info(`vertex`,a,a.labelType),a.labelType===`markdown`)n.info(`vertex`,a,a.labelType);else if(l(f().flowchart.htmlLabels))g=T(u,{label:h}).node(),g.parentNode.removeChild(g);else{let e=o.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,p.labelStyle.replace(`color:`,`fill:`));let t=h.split(s.lineBreakRegex);for(let n of t){let t=o.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(a.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await e(h,f());r.setNode(a.id,{labelStyle:p.labelStyle,shape:v,labelText:y,labelType:a.labelType,rx:_,ry:_,class:d,style:p.style,id:a.id,link:a.link,linkTarget:a.linkTarget,tooltip:c.db.getTooltip(a.id)||``,domId:c.db.lookUpDomId(a.id),haveCallback:a.haveCallback,width:a.type===`group`?500:void 0,dir:a.dir,type:a.type,props:a.props,padding:f().flowchart.padding}),n.info(`setNode`,{labelStyle:p.labelStyle,labelType:a.labelType,shape:v,labelText:y,rx:_,ry:_,class:d,style:p.style,id:a.id,domId:c.db.lookUpDomId(a.id),width:a.type===`group`?500:void 0,type:a.type,dir:a.dir,props:a.props,padding:f().flowchart.padding})}},k=async function(t,r,i){n.info(`abc78 edges = `,t);let a=0,c={},l,u;if(t.defaultStyle!==void 0){let e=m(t.defaultStyle);l=e.style,u=e.labelStyle}for(let i of t){a++;let d=`L-`+i.start+`-`+i.end;c[d]===void 0?(c[d]=0,n.info(`abc78 new entry`,d,c[d])):(c[d]++,n.info(`abc78 new entry`,d,c[d]));let h=d+`-`+c[d];n.info(`abc78 new link id to be used is`,d,h,c[d]);let g=`LS-`+i.start,_=`LE-`+i.end,v={style:``,labelStyle:``};switch(v.minlen=i.length||1,v.arrowhead=i.type===`arrow_open`?`none`:`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,i.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`}let y=``,b=``;switch(i.stroke){case`normal`:y=`fill:none;`,l!==void 0&&(y=l),u!==void 0&&(b=u),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`}if(i.style!==void 0){let e=m(i.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,v.curve=i.interpolate===void 0?t.defaultInterpolate===void 0?p(E.curve,o):p(t.defaultInterpolate,o):p(i.interpolate,o),i.text===void 0?i.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=i.labelType,v.label=await e(i.text.replace(s.lineBreakRegex,`
`),f()),i.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=h,v.classes=`flowchart-link `+g+` `+_,r.setEdge(i.start,i.end,v,a)}},A={setConf:D,addVertices:O,addEdges:k,getClasses:function(e,t){return t.db.getClasses()},draw:async function(e,t,r,i){n.info(`Drawing flowchart`);let o=i.db.getDirection();o===void 0&&(o=`TD`);let{securityLevel:s,flowchart:l}=f(),u=l.nodeSpacing||50,p=l.rankSpacing||50,m;s===`sandbox`&&(m=d(`#i`+t));let v=d(s===`sandbox`?m.nodes()[0].contentDocument.body:`body`),y=s===`sandbox`?m.nodes()[0].contentDocument:document,b=new g({multigraph:!0,compound:!0}).setGraph({rankdir:o,nodesep:u,ranksep:p,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=i.db.getSubGraphs();n.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],n.info(`Subgraph - `,x),i.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=i.db.getVertices(),w=i.db.getEdges();n.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],c(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)n.info(`Setting up subgraphs`,x.nodes[e],x.id),b.setParent(x.nodes[e],x.id)}await O(C,b,t,v,y,i),await k(w,b);let E=v.select(`[id="${t}"]`),D=v.select(`#`+t+` g`);if(await _(D,b,[`point`,`circle`,`cross`],`flowchart`,t),h.insertTitle(E,`flowchartTitleText`,l.titleTopMargin,i.db.getDiagramTitle()),a(b,E,l.diagramPadding,l.useMaxWidth),i.db.indexNodes(`subGraph`+T),!l.htmlLabels){let e=y.querySelectorAll(`[id="`+t+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=y.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let n=C[e];if(n.link){let r=d(`#`+t+` [id="`+e+`"]`);if(r){let e=y.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,n.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,n.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),s===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):n.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,n.linkTarget);let t=r.insert(function(){return e},`:first-child`),i=r.select(`.label-container`);i&&t.append(function(){return i.node()});let a=r.select(`.label`);a&&t.append(function(){return a.node()})}}})}},j=(e,t)=>{let n=r,a=n(e,`r`),o=n(e,`g`),s=n(e,`b`);return i(a,o,s,t)},M=e=>`.label {
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
    background-color: ${j(e.edgeLabelBackground,.5)};
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
`;export{S as a,v as c,C as i,M as n,w as o,T as r,y as s,A as t};