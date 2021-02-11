(self.webpackChunk=self.webpackChunk||[]).push([[782],{6782:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var a=o(5166),r={class:"flex justify-between items-center"},n={class:"text-3xl text-black-lightest font-semibold tracking-wide"},c={class:"text-black-lightest"},l=(0,a.createTextVNode)(" Maintained by "),s={class:"mt-1 text-grey-dark font-light"},i={key:0,class:"text-grey-dark font-light"};const d={name:"ProjectHeader",components:{IconLaunch:o(6194).Z},props:{project:{type:Object,required:!0}},render:function(e,t,o,d,p,u){var h=(0,a.resolveComponent)("IconLaunch");return(0,a.openBlock)(),(0,a.createBlock)("section",{id:"project-".concat(o.project.namespace,"-").concat(o.project.name),class:"items-center pb-6"},[(0,a.createVNode)("div",r,[(0,a.createVNode)("h2",n,[(0,a.createVNode)("a",{href:o.project.url,"aria-label":"Launch"},[(0,a.createTextVNode)((0,a.toDisplayString)(o.project.namespace)+" | "+(0,a.toDisplayString)(o.project.name)+" ",1),(0,a.createVNode)(h)],8,["href"])]),(0,a.createVNode)("p",c,[l,((0,a.openBlock)(!0),(0,a.createBlock)(a.Fragment,null,(0,a.renderList)(o.project.maintainers,(function(e){return(0,a.openBlock)(),(0,a.createBlock)("a",{key:e,class:"text-indigo no-underline",href:"https://github.com/".concat(e),target:"_blank"}," @"+(0,a.toDisplayString)(e),9,["href"])})),128))])]),(0,a.createVNode)("p",s," Synced "+(0,a.toDisplayString)(e.$luxon.fromISO(o.project.updated_at).toRelative()),1),o.project.hasDownloads?((0,a.openBlock)(),(0,a.createBlock)("p",i,(0,a.toDisplayString)((new Intl.NumberFormat).format(o.project.downloads_total))+" downloads ("+(0,a.toDisplayString)((new Intl.NumberFormat).format(o.project.downloads_last_30_days))+" per month) ",1)):(0,a.createCommentVNode)("",!0)],8,["id"])}},p=d},6194:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var a=o(5166),r=(0,a.createVNode)("svg",{class:"fill-current text-grey-blue-darkest inline-block w-6 h-6",height:"32",viewBox:"0 0 16 16",width:"32","aria-hidden":"true"},[(0,a.createVNode)("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})],-1),n=(0,a.createVNode)("span",{class:"sr-only"}," Open on GitHub ",-1);const c={name:"IconLaunch",render:function(e,t,o,c,l,s){return(0,a.openBlock)(),(0,a.createBlock)("span",null,[r,n])}},l=c}}]);