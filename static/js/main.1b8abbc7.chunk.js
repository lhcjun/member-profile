(this.webpackJsonpteamprofile=this.webpackJsonpteamprofile||[]).push([[0],Array(20).concat([function(e,t,n){e.exports=n(45)},,,,,,,,,,function(e,t,n){},function(e,t,n){var a={"./1.png":32,"./10.png":33,"./2.png":34,"./3.png":35,"./4.png":36,"./5.png":37,"./6.png":38,"./7.png":39,"./8.png":40,"./9.png":41};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=31},function(e,t,n){e.exports=n.p+"static/media/1.1a4b47f7.png"},function(e,t,n){e.exports=n.p+"static/media/10.4861dcfa.png"},function(e,t,n){e.exports=n.p+"static/media/2.4d20df06.png"},function(e,t,n){e.exports=n.p+"static/media/3.d620c550.png"},function(e,t,n){e.exports=n.p+"static/media/4.2b5bf101.png"},function(e,t,n){e.exports=n.p+"static/media/5.3c79c479.png"},function(e,t,n){e.exports=n.p+"static/media/6.204617c8.png"},function(e,t,n){e.exports=n.p+"static/media/7.e048f58c.png"},function(e,t,n){e.exports=n.p+"static/media/8.f78dc06d.png"},function(e,t,n){e.exports=n.p+"static/media/9.fc5a9c37.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=n(3),s=n(9),l=n(18),m=n(19),u=(n(29),n(6)),p=n(7),d=n(10),h=n(8),f=n(11),E=function(){return function(e){var t;e({type:"REQUEST_MEMBERS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_MEMBERS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_MEMBERS_FAILED",payload:t})}))}},b=(n(30),n(4)),g=function(e){var t=e.name,a=e.email,c=e.bs,i=e.id;return r.a.createElement("div",{className:"tc grow br3 pa3 ma2 dib bw2 shadow-5 mv3 relative bg-white",id:"content"},r.a.createElement("div",{id:"card"},r.a.createElement("img",{alt:"member",src:n(31)("./".concat(i,".png")),className:"br-100 h4 w4 dib ba b--black-10 pa2"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),r.a.createElement("h3",null,a),r.a.createElement("p",null,c))),r.a.createElement("div",{className:"pa2 br3 shadow-5 flex justify-center items-center absolute",id:"info"},r.a.createElement("a",{href:"https://www.google.com/gmail/"},r.a.createElement(b.b,{className:"ml3 mr3 f4"})),r.a.createElement("a",{href:"https://www.facebook.com/"},r.a.createElement(b.a,{className:"mr3 f4"})),r.a.createElement("a",{href:"https://twitter.com/"},r.a.createElement(b.e,{className:"mr3 f4"})),r.a.createElement("a",{href:"https://www.linkedin.com/"},r.a.createElement(b.d,{className:"mr3 f4"})),r.a.createElement("a",{href:"https://github.com/"},r.a.createElement(b.c,{className:"mr3 f4"}))))},v=function(e){var t=e.members;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(g,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email,bs:t[n].company.bs})})),";")},w=(n(42),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Search Member",onChange:t,className:"pa3 ba br3 tc b--dark-gray bg-dark-gray near-white"}))}),y=function(e){return r.a.createElement("div",{style:{overflowY:"auto",borderTop:"1px solid #cac7c0",height:"66vh"}},e.children)},S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong..."):this.props.children}}]),t}(a.Component),O=(n(43),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestMembers()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.members,c=e.isPending,i=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?r.a.createElement("h1",{className:"f1 tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1",id:"title"},"Our Team"),r.a.createElement(w,{searchChange:n}),r.a.createElement(y,null,r.a.createElement(S,null,r.a.createElement(v,{members:i}))))}}]),t}(a.Component)),j=Object(s.b)((function(e){return{searchField:e.searchMembers.searchField,members:e.findMembers.members,isPending:e.findMembers.isPending,error:e.findMembers.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestMembers:function(){return e(E())}}}))(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M={searchField:""},N={isPending:!1,members:[],error:""},C=(n(44),Object(m.createLogger)()),_=Object(o.c)({searchMembers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},findMembers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_MEMBERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_MEMBERS_SUCCESS":return Object.assign({},e,{members:t.payload,isPending:!1});case"REQUEST_MEMBERS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),k=Object(o.d)(_,Object(o.a)(l.a,C));i.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[20,1,2]]]);
//# sourceMappingURL=main.1b8abbc7.chunk.js.map