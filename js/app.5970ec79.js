(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/twosteppedigital-org.github.io/soccer-league/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},5202:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("Menu"),a("v-main",[a("v-container",[a("router-view")],1)],1),a("v-footer",{attrs:{color:"purple"}},[a("p",{staticClass:"white--text text-center"},[t._v("Copyright © 2021 foot-stats.netlify.com all right reserved. All informations showing\n      in this site are provided by the "),a("a",{staticClass:"white--text",attrs:{href:"https://www.football-data.org"}},[t._v("Football-Data.org API")])])])],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"menu"}},[a("v-toolbar",{attrs:{color:"purple",dark:"","max-height":"64"}},[a("v-toolbar-title",[a("router-link",{attrs:{to:"/"}},[t._v("Soccer League")])],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{staticClass:"d-none d-sm-flex",attrs:{text:""}},[a("router-link",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Home")])],1),a("v-btn",{staticClass:"d-none d-sm-flex",attrs:{text:""}},[a("router-link",{staticClass:"white--text",attrs:{to:"/live"}},[t._v("LIVE")])],1),a("v-btn",{staticClass:"d-none d-sm-flex",attrs:{text:""}},[a("router-link",{staticClass:"white--text",attrs:{to:"/myteams"}},[t._v("My Teams")])],1),a("v-btn",{staticClass:"d-flex d-sm-none",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",[t._v("mdi-menu")])],1)],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:"",color:"primary"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item-content",[a("v-list-item",[a("v-list-item-title",{staticClass:"title"},[a("router-link",{staticClass:"white--text",attrs:{to:"/"}},[t._v("Home")])],1)],1),a("v-list-item",[a("v-list-item-title",{staticClass:"title"},[a("router-link",{staticClass:"white--text",attrs:{to:"/live"}},[t._v("LIVE")])],1)],1),a("v-list-item",[a("v-list-item-title",{staticClass:"title"},[a("router-link",{staticClass:"white--text",attrs:{to:"/myteams"}},[t._v("My Teams")])],1)],1)],1)],1)],1)],1)},s=[],l={name:"Menu",data(){return{drawer:!1}}},c=l,u=a("2877"),d=a("6544"),p=a.n(d),m=a("8336"),f=a("132d"),v=a("8860"),h=a("da13"),b=a("5d23"),C=a("f774"),w=a("2fa4"),g=a("71d9"),_=a("2a7f"),T=Object(u["a"])(c,i,s,!1,null,null,null),x=T.exports;p()(T,{VBtn:m["a"],VIcon:f["a"],VList:v["a"],VListItem:h["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VNavigationDrawer:C["a"],VSpacer:w["a"],VToolbar:g["a"],VToolbarItems:_["a"],VToolbarTitle:_["b"]});var y={components:{Menu:x}},O=y,V=(a("5c0b"),a("7496")),I=a("a523"),L=a("553a"),E=a("f6c4"),k=Object(u["a"])(O,o,n,!1,null,null,null),S=k.exports;p()(k,{VApp:V["a"],VContainer:I["a"],VFooter:L["a"],VMain:E["a"]});var j=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[t.competitionList?a("Card",{attrs:{data:t.competitionList}}):t._e()],1)},P=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:"","justify-space-between":""}},t._l(t.data,(function(e){return a("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md4:""}},[a("v-card",{on:{click:function(a){return t.$store.commit("SET_COMPETITION_LIST",e.code)}}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-card-title",[t._v(t._s(e.name))]),a("v-card-text",[t._v(t._s(e.area.name))])],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-img",{staticClass:"flag",attrs:{"aspect-ratio":16/9,width:t.width,src:e.area.ensignUrl}})],1)],1)],1)],1)})),1)],1)},N=[],A={name:"Card",props:["data"],data:()=>({}),methods:{updateCurrentLeague(t){this.$store.dispatch("setCurrentCompetition",t)}}},R=A,F=(a("9421"),a("b0af")),D=a("99d9"),H=a("62ad"),J=a("0e8f"),U=a("adda"),X=a("a722"),B=a("0fd9"),q=Object(u["a"])(R,$,N,!1,null,"7b981186",null),z=q.exports;p()(q,{VCard:F["a"],VCardText:D["a"],VCardTitle:D["b"],VCol:H["a"],VContainer:I["a"],VFlex:J["a"],VImg:U["a"],VLayout:X["a"],VRow:B["a"]});var G=a("2f62"),K={name:"home",components:{Card:z},mounted(){this.$store.dispatch("loadCompetitionList")},computed:{...Object(G["b"])(["competitionList"])}},Q=K,W=Object(u["a"])(Q,M,P,!1,null,null,null),Y=W.exports;r["a"].use(j["a"]);var Z=new j["a"]({routes:[{path:"/",name:"home",component:Y}]}),tt=a("bc3a"),et=a.n(tt);r["a"].use(G["a"]);var at=new G["a"].Store({state:{competitionList:null,currentCompetition:null},actions:{loadCompetitionList:function(){et()({headers:{"X-Auth-Token":"e9c6e436a05442488ce54e147180c5c7"},method:"get",url:"https://api.football-data.org/v2/competitions"}).then(t=>this.competitionList=t.data.competitions.filter(t=>"TIER_ONE"==t.plan)).then(t=>{this.commit("SET_COMPETITION_LIST",t)}).catch(t=>this.competitionList=t)},setCurrentCompetition:t=>{(void 0).commit("SET_COMPETITION_LIST",t)},loadSelectedCompetition:t=>{et()({headers:{"X-Auth-Token":"e9c6e436a05442488ce54e147180c5c7"},method:"get",url:`https://api.football-data.org/v2/competitions/${t}/standings`}).then(t=>(void 0).competitionCode=t.data).catch(t=>(void 0).competitionCode=t.data)}},mutations:{SET_COMPETITION_LIST(t,e){t.competitionList=e},SET_CURRENT_COMPETITION(t,e){t.currentCompetition=e}},getters:{currentCompetition:t=>t.currentCompetition}}),rt=a("f309"),ot=(a("bf40"),a("fcf4"));r["a"].use(rt["a"]);var nt=new rt["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:ot["a"].green.darken1,secondary:"#ff5722",accent:"#ffeb3b",error:"#f44336",warning:"#ffc107",info:"#607d8b",success:"#8bc34a"}}}});r["a"].config.productionTip=!1,new r["a"]({router:Z,vuetify:nt,store:at,render:t=>t(S)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("5202")},7236:function(t,e,a){},9421:function(t,e,a){"use strict";a("7236")}});
//# sourceMappingURL=app.5970ec79.js.map