"use strict";(self["webpackChunkmankik_bath"]=self["webpackChunkmankik_bath"]||[]).push([[443],{736:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var c=a(252);const o=t=>((0,c.dD)("data-v-3db762a5"),t=t(),(0,c.Cn)(),t),n={class:""},l=o((()=>(0,c._)("header",null,"상세 기능",-1))),h={class:"button-container"};function i(t,e,a,o,i,s){const v=(0,c.up)("Footer");return(0,c.wg)(),(0,c.iD)("div",n,[l,(0,c._)("div",h,[(0,c._)("button",{onClick:e[0]||(e[0]=(...t)=>s.coldWater&&s.coldWater(...t))},"냉수"),(0,c._)("button",{onClick:e[1]||(e[1]=(...t)=>s.hotWater&&s.hotWater(...t))},"온수"),(0,c._)("button",{onClick:e[2]||(e[2]=(...t)=>s.clean&&s.clean(...t))},"청소"),(0,c._)("button",{onClick:e[3]||(e[3]=(...t)=>s.cap&&s.cap(...t))},"마개")]),(0,c.Wm)(v)])}var s=a(390),v={components:{Footer:s.Z},data(){return{cvalve:0,hvalve:0,clean_v:0,cap_V:0}},methods:{coldWater:function(){0==this.cvalve?this.cvalve=1:this.cvalve=0,this.$http.post("/web/"+this.$api+"/control",{userid:"1",bathid:"1",cap:this.cap_V,cvalve:this.cvalve,hvalve:this.hvalve,cleantime:this.clean_v}).then((t=>{console.log(t)})).catch((t=>{console.error("안녕")})),console.log("냉수")},hotWater:function(){0==this.hvalve?this.hvalve=1:this.hvalve=0,this.$http.post("/web/"+this.$api+"/control",{userid:"1",bathid:"1",cap:this.cap_V,cvalve:this.cvalve,hvalve:this.hvalve,cleantime:this.clean_v}).then((t=>{console.log(t)})).catch((t=>{console.error("안녕")})),console.log("온수")},clean:function(){0==this.clean_v&&(this.clean_v=15,this.$http.post("/web/"+this.$api+"/control",{userid:"1",bathid:"1",cap:this.cap_V,cvalve:this.cvalve,hvalve:this.hvalve,cleantime:this.clean_v}).then((t=>{console.log(t)})).catch((t=>{console.error("안녕")})),console.log("청소"))},cap:function(){0==this.cap_V?this.cap_V=1:this.cap_V=0,this.$http.post("/web/"+this.$api+"/control",{userid:"1",bathid:"1",cap:this.cap_V,cvalve:this.cvalve,hvalve:this.hvalve,cleantime:this.clean_v}).then((t=>{console.log(t)})).catch((t=>{console.error("안녕")})),console.log("cap")},function(){this.$http.get("/arduino/"+this.$api+"/control/1").then((t=>{console.log(t.data),console.log("arduino"),this.cleantime=t[0].cleantime})).catch((t=>{console.error(t)}))}},created(){setInterval(this.function,1e3)}},r=a(744);const p=(0,r.Z)(v,[["render",i],["__scopeId","data-v-3db762a5"]]);var u=p}}]);
//# sourceMappingURL=about.9ce9a4ca.js.map