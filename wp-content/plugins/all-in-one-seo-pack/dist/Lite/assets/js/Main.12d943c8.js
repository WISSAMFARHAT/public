import{E as p}from"./links.125d59c9.js";import{a as i}from"./addons.dca3a5e7.js";import{R as m,a as u}from"./RequiresUpdate.ff3e05b0.js";import{C as _}from"./Index.1686d412.js";import{a as l}from"./Header.352ae96d.js";import{o,c as s,x as d,C as f,l as g,k as h,q as x}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as n}from"./_plugin-vue_export-helper.abeb2ae0.js";import k from"./Overview.da371a82.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.ab8f4241.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./RequiresUpdate.1e32247d.js";import"./license.7b516004.js";import"./allowed.1a0ffdc5.js";/* empty css             */import"./params.f0608262.js";import"./Ellipse.43a094b8.js";import"./index.e978df4e.js";import"./Caret.02d7c74a.js";import"./ScrollAndHighlight.b153b270.js";import"./LogoGear.49550bdb.js";import"./Logo.0d9f9e6e.js";import"./Support.af6a4f04.js";import"./Tabs.14cdc788.js";import"./TruSeoScore.b474bf15.js";import"./Information.8e84b099.js";import"./Slide.7ee1d0f1.js";import"./Url.73f3b490.js";import"./Date.7ab09fdd.js";import"./constants.238e5b7b.js";import"./Exclamation.367f8687.js";import"./Gear.ba945e96.js";import"./AnimatedNumber.5b54d9b9.js";import"./numbers.c7cb4085.js";import"./AddonConditions.a980b8ca.js";import"./Index.18716c31.js";import"./Row.dbbe567c.js";import"./Blur.647f62cf.js";import"./Card.24b534de.js";import"./Tooltip.bcf420d9.js";import"./InternalOutbound.ac5af62d.js";import"./DonutChartWithLegend.ccf57598.js";import"./SeoSiteScore.f2154b15.js";import"./Row.643c0321.js";import"./RequiredPlans.6170096f.js";const v={};function $(t,e){return o(),s("div")}const A=n(v,[["render",$]]),y={};function b(t,e){return o(),s("div")}const S=n(y,[["render",b]]),C={};function R(t,e){return o(),s("div")}const T=n(C,[["render",R]]),w={};function L(t,e){return o(),s("div")}const M=n(w,[["render",L]]);const P={setup(){return{linkAssistantStore:p()}},components:{CoreMain:_,CoreProcessingPopup:l,DomainsReport:A,LinksReport:S,Overview:k,PostReport:T,Settings:M},mixins:[m,u],data(){return{strings:{pageName:this.$t.__("Link Assistant",this.$td)}}},computed:{excludedTabs(){const t=(i.isActive("aioseo-link-assistant")?this.getExcludedUpdateTabs("aioseo-link-assistant"):this.getExcludedActivationTabs("aioseo-link-assistant"))||[];return t.push("post-report"),t}},mounted(){window.aioseoBus.$on("changes-saved",()=>{this.linkAssistantStore.getMenuData()}),this.$isPro&&this.linkAssistantStore.suggestionsScan.percent!==100&&i.isActive("aioseo-link-assistant")&&!i.requiresUpgrade("aioseo-link-assistant")&&i.hasMinimumVersion("aioseo-link-assistant")&&this.linkAssistantStore.pollSuggestionsScan()}},q={class:"aioseo-link-assistant"};function B(t,e,E,U,r,a){const c=d("core-main");return o(),s("div",q,[f(c,{"page-name":r.strings.pageName,"exclude-tabs":a.excludedTabs,showTabs:t.$route.name!=="post-report"},{default:g(()=>[(o(),h(x(t.$route.name)))]),_:1},8,["page-name","exclude-tabs","showTabs"])])}const Lt=n(P,[["render",B]]);export{Lt as default};
