import"./js/_plugin-vue_export-helper.abeb2ae0.js";import{Y as k,h as v}from"./js/vue.runtime.esm-bundler.4a881941.js";import{c as E,b as S}from"./js/vue-router.56da47b1.js";import{e as _,l as I}from"./js/index.683fda17.js";import{l as C}from"./js/index.e978df4e.js";import{l as A}from"./js/index.0b123ab1.js";import{b as D,f as P,s as x,l as L}from"./js/links.125d59c9.js";import{g as O,m as h,T as B}from"./js/postSlug.ffc044fc.js";import{i as U}from"./js/isEqual.2e0cf6d5.js";import{i as $}from"./js/isEmpty.bad2fe36.js";import{s as m,_ as s}from"./js/default-i18n.3881921e.js";import{A as p}from"./js/App.8511a251.js";import"./js/translations.6e7b2383.js";import"./js/constants.238e5b7b.js";import"./js/Caret.02d7c74a.js";import"./js/isArrayLikeObject.ab8f4241.js";import"./js/metabox.e3fb2d0a.js";import"./js/cleanForSlug.cc6d9d47.js";import"./js/toString.7b877a36.js";import"./js/_baseTrim.8725856f.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/get.038a6445.js";import"./js/_baseIsEqual.ea536a7d.js";import"./js/_getAllKeys.6b3e1125.js";import"./js/_getTag.e7f511fc.js";/* empty css                */import"./js/allowed.1a0ffdc5.js";import"./js/license.7b516004.js";import"./js/upperFirst.7faab9f8.js";import"./js/params.f0608262.js";import"./js/JsonValues.870a4901.js";import"./js/SettingsRow.f729cdc5.js";import"./js/Row.dbbe567c.js";import"./js/Checkbox.257a03d8.js";import"./js/Checkmark.aaedf5f6.js";import"./js/ScrollAndHighlight.b153b270.js";import"./js/LogoGear.49550bdb.js";import"./js/Tabs.14cdc788.js";import"./js/TruSeoScore.b474bf15.js";import"./js/Ellipse.43a094b8.js";import"./js/Information.8e84b099.js";import"./js/Slide.7ee1d0f1.js";import"./js/Index.e43d5dba.js";import"./js/MaxCounts.12b45bab.js";import"./js/Tags.cb4ba5da.js";import"./js/tags.549c2c20.js";import"./js/regex.ebd490ab.js";import"./js/debounce.dd5f3974.js";import"./js/toNumber.6056980d.js";import"./js/toFinite.85d01b55.js";import"./js/Tooltip.bcf420d9.js";import"./js/Plus.72df22c9.js";import"./js/Eye.c405e9e5.js";import"./js/RadioToggle.91b7eae7.js";import"./js/GoogleSearchPreview.f2ebbae3.js";import"./js/HtmlTagsEditor.3dd82072.js";import"./js/Editor.e4c60376.js";import"./js/UnfilteredHtml.9de32d22.js";import"./js/ProBadge.07a48e27.js";import"./js/popup.6fe74774.js";import"./js/addons.dca3a5e7.js";import"./js/Blur.647f62cf.js";import"./js/Index.18716c31.js";import"./js/WpTable.4b20f758.js";import"./js/Table.08a8d42c.js";import"./js/numbers.c7cb4085.js";import"./js/PostTypes.797a4244.js";import"./js/InternalOutbound.ac5af62d.js";import"./js/RequiredPlans.6170096f.js";import"./js/Image.5ef810c9.js";import"./js/FacebookPreview.2b219418.js";import"./js/Img.e7571f79.js";import"./js/Profile.9076f6b1.js";import"./js/ImageUploader.f588555b.js";import"./js/TwitterPreview.8ff99f03.js";import"./js/Book.fe43e5fa.js";import"./js/Settings.2d7611f8.js";import"./js/Build.b34b1a88.js";import"./js/Redirects.89d4e9ed.js";import"./js/Index.574f5502.js";import"./js/strings.da852d37.js";import"./js/isString.b49e85a4.js";import"./js/External.7626a9d9.js";import"./js/Exclamation.367f8687.js";import"./js/Gear.ba945e96.js";import"./js/Card.24b534de.js";import"./js/Upsell.7de25612.js";class T extends window.$e.modules.hookUI.Base{constructor(t,n,o){super(),this.hook=t,this.id=n,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class H extends window.$e.modules.hookData.Base{constructor(t,n,o){super(),this.hook=t,this.id=n,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function c(e,t,n){window.$e.hooks.registerUIAfter(new T(e,t,n))}function M(e,t,n){window.$e.hooks.registerDataAfter(new H(e,t,n))}let l={},d=!1;const u=()=>{const e=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(e.config.type))return;const t={...l},n=O();U(t,n)||(l=n,h())},R=()=>{const e=D();$(e.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&e.saveCurrentPost(e.currentPost).then(()=>{const t=P(),n=x();t.isUnlicensed||n.fetch()})},q=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},V=()=>{d||(d=!0,c("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",u),c("document/save/set-is-modified","aioseo-content-scraper-on-modified",u),M("document/save/save","aioseo-save",R),_.on("postSettingsUpdated",q))},j=({elementor:e,elementorModules:t})=>{if(e.config.user.introduction["aioseo-introduction"]===!0)return;const n=new t.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:m(s("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:m(s("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:s("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{n.setViewed(),n.getDialog().hide()}}});n.show()},r={icon:"eicon-calendar",name:"aioseo-limit-modified-date",param:"aioseo_limit_modified_date",title:s("Save (Don't Modify Date)","all-in-one-seo-pack")},f=e=>{const t=document.getElementById(`elementor-panel-footer-sub-menu-item-${r.name}`);t&&(t.classList.remove("elementor-disabled"),e||t.classList.add("elementor-disabled"))},W=({elementor:e,elementorCommon:t,$e:n})=>{e.once("preview:loaded",function(){e.getRegion("panel").currentView.footer.currentView.addSubMenuItem("saver-options",{icon:r.icon,name:r.name,title:r.title,callback:o=>{o.currentTarget.classList.contains("elementor-disabled")||(t.ajax.requestConstants[r.param]=!0,n.run("document/save/default"))}})}),e.on("document:loaded",o=>{f(o.container.settings.get("post_status")==="draft")}),n.commandsInternal.on("run:after",(o,a,b)=>{switch(a){case"document/save/set-is-modified":f(b.status);break;case"document/save/save":case"document/save/default":delete t.ajax.requestConstants[r.param];break}})};let i=null,w=!1;const Y=()=>{let e=window.elementor.getPreferences("ui_theme")||"auto";e==="auto"&&(e=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(t=>{t.startsWith("aioseo-elementor-")&&document.body.classList.remove(t)}),document.body.classList.add("aioseo-elementor-"+e)},z=({elementor:e,$e:t,Marionette:n})=>{t.routes.on("run:after",function(o,a){Y(),a==="panel/page-settings/aioseo"&&(i==null||i.unmount(),i=g("#elementor-panel-page-settings-controls"))}),e.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+e.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{t.routes.run("panel/page-settings/aioseo")}catch{t.routes.run("panel/page-settings/settings"),t.routes.run("panel/page-settings/aioseo")}}},"more"),e.once("preview:loaded",function(){t.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),e.hooks.addFilter("panel/elements/regionViews",o=>(o.aioseo={region:o.global.region,view:n.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){i==null||i.unmount(),i=g("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},o))},g=e=>{const t=document.querySelector(e);t.classList.add("edit-post-sidebar","aioseo-elementor-panel"),t.appendChild(document.createElement("div"));const n=E({history:S(),routes:[{path:"/",component:p}]});let o=k({name:"Standalone/Elementor",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>v(p)});return o=I(o),o=C(o),o=A(o),o.use(n),n.app=o,L(o,n),V(),o.config.globalProperties.$truSeo=new B,o.mount(`${e} > div`),h(),o},y=()=>{z(window),j(window),W(window)};window.elementor&&(setTimeout(y),w=!0);(function(e){w||e(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(y)})})})(window.jQuery);
