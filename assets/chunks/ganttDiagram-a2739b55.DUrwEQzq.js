import{i as e,t}from"./rolldown-runtime.Dd_uD5pT.js";import{$t as n,E as r,I as i,Jt as a,Kt as o,Lt as s,N as c,P as l,Qt as u,Rt as d,Xt as f,Yt as p,Zt as m,_ as h,_n as g,an as _,b as v,c as y,dn as b,en as x,g as S,gn as C,hn as w,in as T,mn as E,nn as D,on as O,pn as ee,qt as te,rn as ne,s as re,sn as ie,tn as ae,u as oe,v as k,z as se}from"./theme.DQ8OCEVb.js";var ce=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_isoWeek=r()})(e,(function(){return function(e,t,n){var r=function(e){return e.add(4-e.isoWeekday(),`day`)},i=t.prototype;i.isoWeekYear=function(){return r(this).year()},i.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),`day`);var t,i,a,o,s=r(this),c=(t=this.isoWeekYear(),i=this.$u,a=(i?n.utc:n)().year(t).startOf(`year`),o=4-a.isoWeekday(),a.isoWeekday()>4&&(o+=7),a.add(o,`day`));return s.diff(c,`week`)+1},i.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var a=i.startOf;i.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return n.p(e)===`isoweek`?r?this.date(this.date()-(this.isoWeekday()-1)).startOf(`day`):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf(`day`):a.bind(this)(e,t)}}}))})),le=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_customParseFormat=r()})(e,(function(){var e={LTS:`h:mm:ss A`,LT:`h:mm A`,L:`MM/DD/YYYY`,LL:`MMMM D, YYYY`,LLL:`MMMM D, YYYY h:mm A`,LLLL:`dddd, MMMM D, YYYY h:mm A`},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},c=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||={}).offset=function(e){if(!e||e===`Z`)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return n===0?0:t[0]===`+`?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?`pm`:`PM`);return n},f={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*e}],SS:[r,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,c(`seconds`)],ss:[i,c(`seconds`)],m:[i,c(`minutes`)],mm:[i,c(`minutes`)],H:[i,c(`hours`)],h:[i,c(`hours`)],HH:[i,c(`hours`)],hh:[i,c(`hours`)],D:[i,c(`day`)],DD:[r,c(`day`)],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,``)===e&&(this.day=r)}],w:[i,c(`week`)],ww:[r,c(`week`)],M:[i,c(`month`)],MM:[r,c(`month`)],MMM:[a,function(e){var t=u(`months`),n=(u(`monthsShort`)||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw Error();this.month=n%12||n}],MMMM:[a,function(e){var t=u(`months`).indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,c(`year`)],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,c(`year`)],Z:l,ZZ:l};function p(n){for(var r=n,i=o&&o.formats,a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=f[l],d=u&&u[0],p=u&&u[1];a[c]=p?{regex:d,parser:p}:l.replace(/^\[|\]$/g,``)}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if(typeof i==`string`)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,``)}}return function(e){var t=e.afternoon;if(t!==void 0){var n=e.hours;t?n<12&&(e.hours+=12):n===12&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if(typeof s==`string`){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n,r){try{if([`x`,`X`].indexOf(t)>-1)return new Date((t===`X`?1e3:1)*e);var i=p(t)(e),a=i.year,o=i.month,s=i.day,c=i.hours,l=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,m=i.week,h=new Date,g=s||(a||o?1:h.getDate()),_=a||h.getFullYear(),v=0;a&&!o||(v=o>0?o-1:h.getMonth());var y,b=c||0,x=l||0,S=u||0,C=d||0;return f?new Date(Date.UTC(_,v,g,b,x,S,C+60*f.offset*1e3)):n?new Date(Date.UTC(_,v,g,b,x,S,C)):(y=new Date(_,v,g,b,x,S,C),m&&(y=r(y).week(m).toDate()),y)}catch{return new Date(``)}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date(``)),o={}}else if(s instanceof Array)for(var f=s.length,m=1;m<=f;m+=1){a[1]=s[m-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===f&&(this.$d=new Date(``))}else i.call(this,e)}}}))})),ue=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_advancedFormat=r()})(e,(function(){return function(e,t){var n=t.prototype,r=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return r.bind(this)(e);var i=this.$utils(),a=(e||`YYYY-MM-DDTHH:mm:ssZ`).replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case`Q`:return Math.ceil((t.$M+1)/3);case`Do`:return n.ordinal(t.$D);case`gggg`:return t.weekYear();case`GGGG`:return t.isoWeekYear();case`wo`:return n.ordinal(t.week(),`W`);case`w`:case`ww`:return i.s(t.week(),e===`w`?1:2,`0`);case`W`:case`WW`:return i.s(t.isoWeek(),e===`W`?1:2,`0`);case`k`:case`kk`:return i.s(String(t.$H===0?24:t.$H),e===`k`?1:2,`0`);case`X`:return Math.floor(t.$d.getTime()/1e3);case`x`:return t.$d.getTime();case`z`:return`[`+t.offsetName()+`]`;case`zzz`:return`[`+t.offsetName(`long`)+`]`;default:return e}}));return r.bind(this)(a)}}}))})),de=s(),A=e(d(),1),fe=e(ce(),1),pe=e(le(),1),me=e(ue(),1),he=function(){var e=function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},t=[6,8,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,32,33,35,37],n=[1,25],r=[1,26],i=[1,27],a=[1,28],o=[1,29],s=[1,30],c=[1,31],l=[1,9],u=[1,10],d=[1,11],f=[1,12],p=[1,13],m=[1,14],h=[1,15],g=[1,16],_=[1,18],v=[1,19],y=[1,20],b=[1,21],x=[1,22],S=[1,24],C=[1,32],w={trace:function(){},yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,dateFormat:19,inclusiveEndDates:20,topAxis:21,axisFormat:22,tickInterval:23,excludes:24,includes:25,todayMarker:26,title:27,acc_title:28,acc_title_value:29,acc_descr:30,acc_descr_value:31,acc_descr_multiline_value:32,section:33,clickStatement:34,taskTxt:35,taskData:36,click:37,callbackname:38,callbackargs:39,href:40,clickStatementDebug:41,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,19:`dateFormat`,20:`inclusiveEndDates`,21:`topAxis`,22:`axisFormat`,23:`tickInterval`,24:`excludes`,25:`includes`,26:`todayMarker`,27:`title`,28:`acc_title`,29:`acc_title_value`,30:`acc_descr`,31:`acc_descr_value`,32:`acc_descr_multiline_value`,33:`section`,35:`taskTxt`,36:`taskData`,37:`click`,38:`callbackname`,39:`callbackargs`,40:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[34,2],[34,3],[34,3],[34,4],[34,3],[34,4],[34,2],[41,2],[41,3],[41,3],[41,4],[41,3],[41,4],[41,2]],performAction:function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 16:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 17:r.TopAxis(),this.$=a[s].substr(8);break;case 18:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 19:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 20:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 21:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 22:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 24:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 25:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 26:case 27:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 28:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 30:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 31:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 32:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 33:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 34:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 36:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 37:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 38:case 44:this.$=a[s-1]+` `+a[s];break;case 39:case 40:case 42:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 41:case 43:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s]}},table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:l,20:u,21:d,22:f,23:p,24:m,25:h,26:g,27:_,28:v,30:y,32:b,33:x,34:23,35:S,37:C},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:33,11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:l,20:u,21:d,22:f,23:p,24:m,25:h,26:g,27:_,28:v,30:y,32:b,33:x,34:23,35:S,37:C},e(t,[2,5]),e(t,[2,6]),e(t,[2,15]),e(t,[2,16]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),{29:[1,34]},{31:[1,35]},e(t,[2,27]),e(t,[2,28]),e(t,[2,29]),{36:[1,36]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),{38:[1,37],40:[1,38]},e(t,[2,4]),e(t,[2,25]),e(t,[2,26]),e(t,[2,30]),e(t,[2,31],{39:[1,39],40:[1,40]}),e(t,[2,37],{38:[1,41]}),e(t,[2,32],{40:[1,42]}),e(t,[2,33]),e(t,[2,35],{39:[1,43]}),e(t,[2,34]),e(t,[2,36])],defaultActions:{},parseError:function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},parse:function(e){var t=this,n=[0],r=[],i=[null],a=[],o=this.table,s=``,c=0,l=0,u=2,d=1,f=a.slice.call(arguments,1),p=Object.create(this.lexer),m={yy:{}};for(var h in this.yy)Object.prototype.hasOwnProperty.call(this.yy,h)&&(m.yy[h]=this.yy[h]);p.setInput(e,m.yy),m.yy.lexer=p,m.yy.parser=this,p.yylloc===void 0&&(p.yylloc={});var g=p.yylloc;a.push(g);var _=p.options&&p.options.ranges;this.parseError=typeof m.yy.parseError==`function`?m.yy.parseError:Object.getPrototypeOf(this).parseError;function v(){var e=r.pop()||p.lex()||d;return typeof e!=`number`&&(e instanceof Array&&(r=e,e=r.pop()),e=t.symbols_[e]||e),e}for(var y,b,x,S,C={},w,T,E,D;;){if(b=n[n.length-1],this.defaultActions[b]?x=this.defaultActions[b]:(y??=v(),x=o[b]&&o[b][y]),x===void 0||!x.length||!x[0]){var O=``;for(w in D=[],o[b])this.terminals_[w]&&w>u&&D.push(`'`+this.terminals_[w]+`'`);O=p.showPosition?`Parse error on line `+(c+1)+`:
`+p.showPosition()+`
Expecting `+D.join(`, `)+`, got '`+(this.terminals_[y]||y)+`'`:`Parse error on line `+(c+1)+`: Unexpected `+(y==d?`end of input`:`'`+(this.terminals_[y]||y)+`'`),this.parseError(O,{text:p.match,token:this.terminals_[y]||y,line:p.yylineno,loc:g,expected:D})}if(x[0]instanceof Array&&x.length>1)throw Error(`Parse Error: multiple actions possible at state: `+b+`, token: `+y);switch(x[0]){case 1:n.push(y),i.push(p.yytext),a.push(p.yylloc),n.push(x[1]),y=null,l=p.yyleng,s=p.yytext,c=p.yylineno,g=p.yylloc;break;case 2:if(T=this.productions_[x[1]][1],C.$=i[i.length-T],C._$={first_line:a[a.length-(T||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(T||1)].first_column,last_column:a[a.length-1].last_column},_&&(C._$.range=[a[a.length-(T||1)].range[0],a[a.length-1].range[1]]),S=this.performAction.apply(C,[s,l,c,m.yy,x[1],i,a].concat(f)),S!==void 0)return S;T&&(n=n.slice(0,-1*T*2),i=i.slice(0,-1*T),a=a.slice(0,-1*T)),n.push(this.productions_[x[1]][0]),i.push(C.$),a.push(C._$),E=o[n[n.length-2]][n[n.length-1]],n.push(E);break;case 3:return!0}}return!0}};w.lexer=function(){return{EOF:1,parseError:function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},showPosition:function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},test_match:function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),28;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),30;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 40;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 38;case 21:this.popState();break;case 22:return 39;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 37;case 26:return 4;case 27:return 19;case 28:return 20;case 29:return 21;case 30:return 22;case 31:return 23;case 32:return 25;case 33:return 24;case 34:return 26;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return`date`;case 43:return 27;case 44:return`accDescription`;case 45:return 33;case 46:return 35;case 47:return 36;case 48:return`:`;case 49:return 6;case 50:return`INVALID`}},rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],inclusive:!0}}}}();function T(){this.yy={}}return T.prototype=w,w.Parser=T,new T}();he.parser=he;var ge=he;A.default.extend(fe.default),A.default.extend(pe.default),A.default.extend(me.default);var j=``,M=``,N=void 0,P=``,F=[],I=[],L={},R=[],z=[],B=``,V=``,_e=[`active`,`done`,`crit`,`milestone`],H=[],U=!1,W=!1,G=`sunday`,ve=0,ye=function(){R=[],z=[],B=``,H=[],q=0,Y=void 0,X=void 0,Z=[],j=``,M=``,V=``,N=void 0,P=``,F=[],I=[],U=!1,W=!1,ve=0,L={},re(),G=`sunday`},be=function(e){M=e},xe=function(){return M},Se=function(e){N=e},Ce=function(){return N},we=function(e){P=e},Te=function(){return P},Ee=function(e){j=e},De=function(){U=!0},Oe=function(){return U},ke=function(){W=!0},Ae=function(){return W},je=function(e){V=e},Me=function(){return V},Ne=function(){return j},Pe=function(e){F=e.toLowerCase().split(/[\s,]+/)},Fe=function(){return F},Ie=function(e){I=e.toLowerCase().split(/[\s,]+/)},Le=function(){return I},Re=function(){return L},ze=function(e){B=e,R.push(e)},Be=function(){return R},Ve=function(){let e=et(),t=0;for(;!e&&t<10;)e=et(),t++;return z=Z,z},He=function(e,t,n,r){return r.includes(e.format(t.trim()))?!1:e.isoWeekday()>=6&&n.includes(`weekends`)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(e.format(t.trim()))},Ue=function(e){G=e},We=function(){return G},Ge=function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,A.default)(e.startTime):(0,A.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,A.default)(e.endTime):(0,A.default)(e.endTime,t,!0);let[o,s]=Ke(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},Ke=function(e,t,n,r,i){let a=!1,o=null;for(;e<=t;)a||(o=t.toDate()),a=He(e,n,r,i),a&&(t=t.add(1,`d`)),e=e.add(1,`d`);return[t,o]},K=function(e,t,n){n=n.trim();let i=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Q(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,A.default)(n,t.trim(),!0);if(a.isValid())return a.toDate();{r.debug(`Invalid date:`+n),r.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},qe=function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},Je=function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Q(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,A.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,A.default)(e),[s,c]=qe(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},q=0,J=function(e){return e===void 0?(q+=1,`task`+q):e},Ye=function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};ot(r,i,_e);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=J(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=J(),i.startTime=K(void 0,j,r[0]),a=r[1];break;case 3:i.id=J(r[0]),i.startTime=K(void 0,j,r[1]),a=r[2]}return a&&(i.endTime=Je(i.startTime,j,a,U),i.manualEndTime=(0,A.default)(a,`YYYY-MM-DD`,!0).isValid(),Ge(i,j,I,F)),i},Xe=function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};ot(r,i,_e);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=J(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=J(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=J(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]}}return i},Y,X,Z=[],Ze={},Qe=function(e,t){let n={section:B,type:B,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=Xe(X,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=X,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.order=ve,ve++;let i=Z.push(n);X=n.id,Ze[n.id]=i-1},Q=function(e){let t=Ze[e];return Z[t]},$e=function(e,t){let n={section:B,type:B,description:e,task:e,classes:[]},r=Ye(Y,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,Y=n,z.push(n)},et=function(){let e=function(e){let t=Z[e],n=``;switch(Z[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=Q(t.prevTaskId).endTime;break;case`getStartDate`:n=K(void 0,j,Z[e].raw.startTime.startData),n&&(Z[e].startTime=n)}return Z[e].startTime&&(Z[e].endTime=Je(Z[e].startTime,j,Z[e].raw.endTime.data,U),Z[e].endTime&&(Z[e].processed=!0,Z[e].manualEndTime=(0,A.default)(Z[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),Ge(Z[e],j,I,F))),Z[e].processed},t=!0;for(let[n,r]of Z.entries())e(n),t&&=r.processed;return t},tt=function(e,t){let n=t;k().securityLevel!==`loose`&&(n=(0,de.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){Q(e)!==void 0&&(it(e,()=>{window.open(n,`_self`)}),L[e]=n)}),nt(e,`clickable`)},nt=function(e,t){e.split(`,`).forEach(function(e){let n=Q(e);n!==void 0&&n.classes.push(t)})},rt=function(e,t,n){if(k().securityLevel!==`loose`||t===void 0)return;let r=[];if(typeof n==`string`){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<r.length;e++){let t=r[e].trim();t.charAt(0)===`"`&&t.charAt(t.length-1)===`"`&&(t=t.substr(1,t.length-2)),r[e]=t}}r.length===0&&r.push(e),Q(e)!==void 0&&it(e,()=>{se.runFunc(t,...r)})},it=function(e,t){H.push(function(){let n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener(`click`,function(){t()})},function(){let n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener(`click`,function(){t()})})},at={getConfig:()=>k().gantt,clear:ye,setDateFormat:Ee,getDateFormat:Ne,enableInclusiveEndDates:De,endDatesAreInclusive:Oe,enableTopAxis:ke,topAxisEnabled:Ae,setAxisFormat:be,getAxisFormat:xe,setTickInterval:Se,getTickInterval:Ce,setTodayMarker:we,getTodayMarker:Te,setAccTitle:l,getAccTitle:h,setDiagramTitle:i,getDiagramTitle:v,setDisplayMode:je,getDisplayMode:Me,setAccDescription:c,getAccDescription:S,addSection:ze,getSections:Be,getTasks:Ve,addTask:Qe,findTaskById:Q,addTaskOrg:$e,setIncludes:Pe,getIncludes:Fe,setExcludes:Ie,getExcludes:Le,setClickEvent:function(e,t,n){e.split(`,`).forEach(function(e){rt(e,t,n)}),nt(e,`clickable`)},setLink:tt,getLinks:Re,bindFunctions:function(e){H.forEach(function(t){t(e)})},parseDuration:qe,isInvalidDate:He,setWeekday:Ue,getWeekday:We};function ot(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}var st=function(){r.debug(`Something is calling, setConf, remove the call`)},ct={monday:f,tuesday:x,wednesday:ae,thursday:n,friday:p,saturday:m,sunday:u},lt=(e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},$,ut={parser:ge,db:at,renderer:{setConf:st,draw:function(e,t,n,i){let s=k().gantt,c=k().securityLevel,l;c===`sandbox`&&(l=ee(`#i`+t));let u=ee(c===`sandbox`?l.nodes()[0].contentDocument.body:`body`),d=c===`sandbox`?l.nodes()[0].contentDocument:document,f=d.getElementById(t);$=f.parentElement.offsetWidth,$===void 0&&($=1200),s.useWidth!==void 0&&($=s.useWidth);let p=i.db.getTasks(),m=[];for(let e of p)m.push(e.type);m=fe(m);let h={},v=2*s.topPadding;if(i.db.getDisplayMode()===`compact`||s.displayMode===`compact`){let e={};for(let t of p)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=lt(e[n],t)+1;t+=r,v+=r*(s.barHeight+s.barGap),h[n]=r}}else{v+=p.length*(s.barHeight+s.barGap);for(let e of m)h[e]=p.filter(t=>t.type===e).length}f.setAttribute(`viewBox`,`0 0 `+$+` `+v);let x=u.select(`[id="${t}"]`),S=o().domain([C(p,function(e){return e.startTime}),g(p,function(e){return e.endTime})]).rangeRound([0,$-s.leftPadding-s.rightPadding]);function re(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}p.sort(re),ae(p,$,v),oe(x,v,$,s.useMaxWidth),x.append(`text`).text(i.db.getDiagramTitle()).attr(`x`,$/2).attr(`y`,s.titleTopMargin).attr(`class`,`titleText`);function ae(e,t,n){let r=s.barHeight,a=r+s.barGap,o=s.topPadding,c=s.leftPadding,l=ie().domain([0,m.length]).range([`#00B9FA`,`#F95002`]).interpolate(b);ce(a,o,c,t,n,e,i.db.getExcludes(),i.db.getIncludes()),le(c,o,t,n),se(e,a,o,c,r,l,t),ue(a,o),de(c,o,t,n)}function se(e,n,r,a,o,c,l){let u=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));x.append(`g`).selectAll(`rect`).data(u).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,t){return t=e.order,t*n+r-2}).attr(`width`,function(){return l-s.rightPadding/2}).attr(`height`,n).attr(`class`,function(e){for(let[t,n]of m.entries())if(e.type===n)return`section section`+t%s.numberSectionStyles;return`section section0`});let d=x.append(`g`).selectAll(`rect`).data(e).enter(),f=i.db.getLinks();if(d.append(`rect`).attr(`id`,function(e){return e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?S(e.startTime)+a+.5*(S(e.endTime)-S(e.startTime))-.5*o:S(e.startTime)+a}).attr(`y`,function(e,t){return t=e.order,t*n+r}).attr(`width`,function(e){return e.milestone?o:S(e.renderEndTime||e.endTime)-S(e.startTime)}).attr(`height`,o).attr(`transform-origin`,function(e,t){return t=e.order,(S(e.startTime)+a+.5*(S(e.endTime)-S(e.startTime))).toString()+`px `+(t*n+r+.5*o).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of m.entries())e.type===r&&(n=t%s.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),r+=n,r+=` `+t,`task`+r}),d.append(`text`).attr(`id`,function(e){return e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,s.fontSize).attr(`x`,function(e){let t=S(e.startTime),n=S(e.renderEndTime||e.endTime);e.milestone&&(t+=.5*(S(e.endTime)-S(e.startTime))-.5*o),e.milestone&&(n=t+o);let r=this.getBBox().width;return r>n-t?n+r+1.5*s.leftPadding>l?t+a-5:n+a+5:(n-t)/2+t+a}).attr(`y`,function(e,t){return t=e.order,t*n+s.barHeight/2+(s.fontSize/2-2)+r}).attr(`text-height`,o).attr(`class`,function(e){let t=S(e.startTime),n=S(e.endTime);e.milestone&&(n=t+o);let r=this.getBBox().width,i=``;e.classes.length>0&&(i=e.classes.join(` `));let a=0;for(let[t,n]of m.entries())e.type===n&&(a=t%s.numberSectionStyles);let c=``;return e.active&&(c=e.crit?`activeCritText`+a:`activeText`+a),e.done?c=e.crit?c+` doneCritText`+a:c+` doneText`+a:e.crit&&(c=c+` critText`+a),e.milestone&&(c+=` milestoneText`),r>n-t?n+r+1.5*s.leftPadding>l?i+` taskTextOutsideLeft taskTextOutside`+a+` `+c:i+` taskTextOutsideRight taskTextOutside`+a+` `+c+` width-`+r:i+` taskText taskText`+a+` `+c+` width-`+r}),k().securityLevel===`sandbox`){let e;e=ee(`#i`+t);let n=e.nodes()[0].contentDocument;d.filter(function(e){return f[e.id]!==void 0}).each(function(e){var t=n.querySelector(`#`+e.id),r=n.querySelector(`#`+e.id+`-text`);let i=t.parentNode;var a=n.createElement(`a`);a.setAttribute(`xlink:href`,f[e.id]),a.setAttribute(`target`,`_top`),i.appendChild(a),a.appendChild(t),a.appendChild(r)})}}function ce(e,t,n,a,o,c,l,u){if(l.length===0&&u.length===0)return;let d,f;for(let{startTime:e,endTime:t}of c)(d===void 0||e<d)&&(d=e),(f===void 0||t>f)&&(f=t);if(!d||!f)return;if((0,A.default)(f).diff((0,A.default)(d),`year`)>5){r.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let p=i.db.getDateFormat(),m=[],h=null,g=(0,A.default)(d);for(;g.valueOf()<=f;)i.db.isInvalidDate(g,p,l,u)?h?h.end=g:h={start:g,end:g}:h&&=(m.push(h),null),g=g.add(1,`d`);x.append(`g`).selectAll(`rect`).data(m).enter().append(`rect`).attr(`id`,function(e){return`exclude-`+e.start.format(`YYYY-MM-DD`)}).attr(`x`,function(e){return S(e.start)+n}).attr(`y`,s.gridLineStartPadding).attr(`width`,function(e){let t=e.end.add(1,`day`);return S(t)-S(e.start)}).attr(`height`,o-t-s.gridLineStartPadding).attr(`transform-origin`,function(t,r){return(S(t.start)+n+.5*(S(t.end)-S(t.start))).toString()+`px `+(r*e+.5*o).toString()+`px`}).attr(`class`,`exclude-range`)}function le(e,t,n,r){let o=E(S).tickSize(-r+t+s.gridLineStartPadding).tickFormat(te(i.db.getAxisFormat()||s.axisFormat||`%Y-%m-%d`)),c=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||s.tickInterval);if(c!==null){let e=c[1],t=c[2],n=i.db.getWeekday()||s.weekday;switch(t){case`millisecond`:o.ticks(O.every(e));break;case`second`:o.ticks(_.every(e));break;case`minute`:o.ticks(T.every(e));break;case`hour`:o.ticks(ne.every(e));break;case`day`:o.ticks(D.every(e));break;case`week`:o.ticks(ct[n].every(e));break;case`month`:o.ticks(a.every(e))}}if(x.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(r-50)+`)`).call(o).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),i.db.topAxisEnabled()||s.topAxis){let n=w(S).tickSize(-r+t+s.gridLineStartPadding).tickFormat(te(i.db.getAxisFormat()||s.axisFormat||`%Y-%m-%d`));if(c!==null){let e=c[1],t=c[2],r=i.db.getWeekday()||s.weekday;switch(t){case`millisecond`:n.ticks(O.every(e));break;case`second`:n.ticks(_.every(e));break;case`minute`:n.ticks(T.every(e));break;case`hour`:n.ticks(ne.every(e));break;case`day`:n.ticks(D.every(e));break;case`week`:n.ticks(ct[r].every(e));break;case`month`:n.ticks(a.every(e))}}x.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}function ue(e,t){let n=0,r=Object.keys(h).map(e=>[e,h[e]]);x.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(y.lineBreakRegex),n=-(t.length-1)/2,r=d.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=d.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,s.sectionFontSize).attr(`class`,function(e){for(let[t,n]of m.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%s.numberSectionStyles;return`sectionTitle`})}function de(e,t,n,r){let a=i.db.getTodayMarker();if(a===`off`)return;let o=x.append(`g`).attr(`class`,`today`),c=new Date,l=o.append(`line`);l.attr(`x1`,S(c)+e).attr(`x2`,S(c)+e).attr(`y1`,s.titleTopMargin).attr(`y2`,r-s.titleTopMargin).attr(`class`,`today`),a!==``&&l.attr(`style`,a.replace(/,/g,`;`))}function fe(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}}},styles:e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`};export{ut as diagram};