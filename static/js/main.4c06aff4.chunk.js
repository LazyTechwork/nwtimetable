(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a.p+"static/media/nwtt_full.6265858a.svg"},164:function(e,t,a){e.exports=a(253)},253:function(e,t,a){"use strict";a.r(t);a(165),a(216);var n=a(0),l=a.n(n),c=a(28),o=a.n(c),r=a(36),i=a.n(r),s=a(95),u=a(96),m=a(105),p=a(97),E=a(106),g=a(9),d=(a(247),a(104)),h=a.n(d),f=(a(63),function(e){return l.a.createElement(g.h,{id:e.id,theme:e.state.theme},l.a.createElement(g.i,null,"NeoWave Timetable"),l.a.createElement("img",{src:h.a,alt:"Logo",className:"logo"}),l.a.createElement(g.d,null,l.a.createElement(g.j,{top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441",placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",onClick:function(){return e.actions.go("ChooseGroup")}},e.state.group),l.a.createElement(g.c,{style:{display:"flex"}},l.a.createElement(g.a,{level:"primary",size:"l",stretched:!0,disabled:""===e.state.group,onClick:function(){return e.actions.go("Timetable")}},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))}),v=a(37),b=a.n(v),k=function(e){return l.a.createElement(g.h,{id:e.id,theme:e.state.theme},l.a.createElement(g.i,null,"NeoWave Timetable"),l.a.createElement(g.e,null,l.a.createElement(g.g,null,l.a.createElement(g.b,{onClick:function(){e.actions.setGroup({group:"10-1"})},asideContent:"10-1"===e.state.group?l.a.createElement(b.a,{fill:"var(--accent)"}):null},"10-1"),l.a.createElement(g.b,{onClick:function(){e.actions.setGroup({group:"10-2"})},asideContent:"10-2"===e.state.group?l.a.createElement(b.a,{fill:"var(--accent)"}):null},"10-2"),l.a.createElement(g.b,{onClick:function(){e.actions.setGroup({group:"10-3"})},asideContent:"10-3"===e.state.group?l.a.createElement(b.a,{fill:"var(--accent)"}):null},"10-3"),l.a.createElement(g.b,{onClick:function(){e.actions.setGroup({group:"10-4"})},asideContent:"10-4"===e.state.group?l.a.createElement(b.a,{fill:"var(--accent)"}):null},"10-4"),l.a.createElement(g.b,{onClick:function(){e.actions.setGroup({group:"10-5"})},asideContent:"10-5"===e.state.group?l.a.createElement(b.a,{fill:"var(--accent)"}):null},"10-5"))))},y=a(66),C=a.n(y),S=a(41),w=a.n(S),I=a(49),G=a.n(I),N=function(e){return l.a.createElement(g.h,{id:e.id},l.a.createElement(g.i,null,"NeoWave Timetable"),l.a.createElement(g.e,null,l.a.createElement(w.a,null,l.a.createElement("p",{className:"time"},C.a.asString("hh:mm:ss",e.state.time)),l.a.createElement("p",{className:"date text-muted"},C.a.asString("dd.MM.yyyy")," / \u0412\u044b\u0431\u0440\u0430\u043d \u043a\u043b\u0430\u0441\u0441: ",e.state.group))),l.a.createElement(g.e,null,l.a.createElement(w.a,null,l.a.createElement("p",{className:"text-danger hm-warning"},"!!! \u0414\u0418\u0420\u0415\u041a\u0422\u041e\u0420 \u041d\u0410 3 \u042d\u0422\u0410\u0416\u0415 !!!"))),l.a.createElement(g.e,null,l.a.createElement(g.g,null,l.a.createElement(g.b,null,l.a.createElement(g.f,{title:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0443\u0440\u043e\u043a"},"\u0424\u0438\u0437\u0438\u043a\u0430 (08:15 \u2013 09:00)")),l.a.createElement(g.b,null,l.a.createElement(g.f,{title:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0443\u0440\u043e\u043a"},"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (08:15 \u2013 09:00)")))),l.a.createElement(g.e,null,l.a.createElement(w.a,{style:{display:"flex"}},l.a.createElement(G.a,{size:"l",stretched:!0,style:{marginRight:8}},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0443\u0440\u043e\u043a\u043e\u0432"),l.a.createElement(G.a,{size:"l",stretched:!0,level:"secondary"},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0432\u043e\u043d\u043a\u043e\u0432"))),l.a.createElement(w.a,null,l.a.createElement(G.a,{level:"tertiary",stretched:!0,onClick:function(){e.actions.updateState({group:""}),e.actions.go("home")}},"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043b\u0430\u0441\u0441")))},T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).actions={go:function(e){a.setState({activePanel:e})},updateState:function(e){a.setState(e)},setGroup:function(e){localStorage.setItem("group",e.group),a.actions.updateState(e),a.actions.go("Timetable")}},a.state={activePanel:"home",group:"",theme:"white"},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){return e.tick()},1e3);var t=localStorage.getItem("group");console.log(localStorage),null!==t&&""!==t&&(this.setState({group:localStorage.getItem("group")}),this.actions.go("Timetable"))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return l.a.createElement(g.k,{activePanel:this.state.activePanel},l.a.createElement(f,{id:"home",state:this.state,actions:this.actions}),l.a.createElement(k,{id:"ChooseGroup",state:this.state,actions:this.actions}),l.a.createElement(N,{id:"Timetable",state:this.state,actions:this.actions}))}}]),t}(l.a.Component);i.a.send("VKWebAppInit",{}),o.a.render(l.a.createElement(T,null),document.getElementById("root"))},63:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.4c06aff4.chunk.js.map