(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,n){e.exports=n(241)},241:function(e,t,n){"use strict";n.r(t);n(159),n(209);var a=n(1),o=n.n(a),i=n(29),c=n.n(i),r=n(25),l=n.n(r),s=n(85),u=n(86),d=n(95),f=n(87),h=n(96),m=n(11),v=(n(240),n(94)),g=n.n(v),w=(n(84),function(e){var t=e.id,n=e.go,a=e.state;return o.a.createElement(m.e,{id:t,theme:"white"},o.a.createElement(m.f,null,"NeoWave Timetable"),o.a.createElement("img",{src:g.a,alt:"Logo",className:"logo"}),o.a.createElement(m.b,null,o.a.createElement(m.g,{top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441",placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",onClick:function(){return n()},"data-to":"classchooser"},a.class)))}),p=n(44),E=n.n(p),b=void 0,k=function(e){var t=e.id;e.go;return o.a.createElement(m.e,{id:t,theme:"white"},o.a.createElement(m.f,null,"NeoWave Timetable"),o.a.createElement(m.f,null,"\u0412\u044b\u0431\u043e\u0440 \u0441\u0442\u0440\u0430\u043d\u044b"),o.a.createElement(m.c,null,o.a.createElement(m.d,null,o.a.createElement(m.a,{onClick:function(){return b.setState({class:"\u0420\u043e\u0441\u0441\u0438\u044f",activeView:"home"})},asideContent:"\u0420\u043e\u0441\u0441\u0438\u044f"===b.state.class?o.a.createElement(E.a,{fill:"var(--accent)"}):null},"\u0420\u043e\u0441\u0441\u0438\u044f"),o.a.createElement(m.a,{onClick:function(){return b.setState({class:"\u0418\u0442\u0430\u043b\u0438\u044f",activeView:"home"})},asideContent:"\u0418\u0442\u0430\u043b\u0438\u044f"===b.state.class?o.a.createElement(E.a,{fill:"var(--accent)"}):null},"\u0418\u0442\u0430\u043b\u0438\u044f"),o.a.createElement(m.a,{onClick:function(){return b.setState({class:"\u0410\u043d\u0433\u043b\u0438\u044f",activeView:"home"})},asideContent:"\u0410\u043d\u0433\u043b\u0438\u044f"===b.state.class?o.a.createElement(E.a,{fill:"var(--accent)"}):null},"\u0410\u043d\u0433\u043b\u0438\u044f"))))},C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,class:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),l.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return o.a.createElement(m.h,{activePanel:this.state.activePanel},o.a.createElement(w,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,state:this.state}),o.a.createElement(k,{id:"classchooser",go:this.go,state:this.state}))}}]),t}(o.a.Component);function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.send("VKWebAppInit",{}),function(){if("serviceWorker"in navigator){if(new URL("/nwtimetable",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/nwtimetable","/service-worker.js");y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):W(e)})}}(),c.a.render(o.a.createElement(C,null),document.getElementById("root"))},84:function(e,t,n){},94:function(e,t,n){e.exports=n.p+"static/media/nwtt_full.6265858a.svg"}},[[158,1,2]]]);
//# sourceMappingURL=main.cb62ce89.chunk.js.map