(this["webpackJsonpfire-front-end"]=this["webpackJsonpfire-front-end"]||[]).push([[0],{18:function(e,a,t){e.exports=t(35)},23:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=t(2),m=(t(23),t(1)),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"home-header"},l.a.createElement("div",{className:"home-header-text"},l.a.createElement("h1",null,"welcome to ",l.a.createElement("span",{className:"home-header-logo"},"f i r e")),l.a.createElement("h2",null,"explore \xb7 edit \xb7 create"))))},o=t(6),d=t(9),u=t(3),f="https://fireinternationalapp.herokuapp.com",h=function(e){var a=e.strain,t=e.handleSubmit,n=e.handleChange;return l.a.createElement("form",{className:"strain-form",onSubmit:t},l.a.createElement("label",{htmlFor:"name",className:"form-title"},"Strain Name"),l.a.createElement("input",{className:"form-input",placeholder:"Strain Name",defaultValue:a.name,name:"name",onChange:n,required:!0,id:"name"}),l.a.createElement("label",{htmlFor:"plantCategory",className:"form-title"},"Plant Category"),l.a.createElement("input",{className:"form-input",placeholder:"Indica | Sativa | Hybrid: Indica Dominant | Hybrid: Sativa Dominant | Hybrid: 50/50",defaultValue:a.plantCategory,name:"plantCategory",onChange:n,required:!0,id:"plantCategory"}),l.a.createElement("label",{htmlFor:"genetics",className:"form-title"},"Genetics"),l.a.createElement("input",{className:"form-input",placeholder:"Indica (%) | Sativa (%) | Hybrid (%)",defaultValue:a.genetics,name:"genetics",onChange:n,required:!0,id:"genetics"}),l.a.createElement("label",{htmlFor:"parents",className:"form-title"},"Parents"),l.a.createElement("input",{className:"form-input",placeholder:"Parents",defaultValue:a.parents,name:"parents",onChange:n,required:!0,id:"parents"}),l.a.createElement("label",{htmlFor:"thcContent",className:"form-title"},"THC Content"),l.a.createElement("input",{className:"form-input",placeholder:"THC Content",defaultValue:a.thcContent,name:"thcContent",onChange:n,required:!0,id:"thcContent"}),l.a.createElement("label",{htmlFor:"cbdContent",className:"form-title"},"CBD Content"),l.a.createElement("input",{className:"form-input",placeholder:"CBD Content",defaultValue:a.cbdContent,name:"cbdContent",onChange:n,required:!0,id:"cbdContent"}),l.a.createElement("label",{htmlFor:"smellAndFlavor",className:"form-title"},"Smell and Flavor"),l.a.createElement("input",{className:"form-input",placeholder:"Smell and Flavor",defaultValue:a.smellAndFlavor,name:"smellAndFlavor",onChange:n,required:!0,id:"smellAndFlavor"}),l.a.createElement("label",{htmlFor:"effect",className:"form-title"},"Effect"),l.a.createElement("input",{className:"form-input",placeholder:"Effect",defaultValue:a.effect,name:"effect",onChange:n,required:!0,id:"effect"}),l.a.createElement("label",{htmlFor:"description",className:"form-title"},"Description"),l.a.createElement("input",{className:"form-input",placeholder:"Description",defaultValue:a.info,name:"info",onChange:n,required:!0,id:"info"}),l.a.createElement("label",{htmlFor:"image",className:"form-title"},"Image"),l.a.createElement("input",{className:"form-input",placeholder:"Image",defaultValue:a.mainImage,name:"mainImage",onChange:n,required:!0,id:"info"}),l.a.createElement("button",{className:"submit-button",type:"submit"},"Submit"))},E=function(){var e=Object(n.useState)({name:"",plantCategory:"",genetics:"",parents:"",thcContent:"",cbdContent:"",smellAndFlavor:"",effect:"",info:"",mainImage:""}),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(null),i=Object(u.a)(c,2),s=i[0],E=i[1],p=Object(n.useState)(!1),b=Object(u.a)(p,2),g=b[0],N=b[1];return s?l.a.createElement(m.a,{to:"/strains/".concat(s)}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"create-form-header"},l.a.createElement("h2",{className:"page-title"},"Create your own Strain"),l.a.createElement("h2",{className:"form-header-1"},"We greatly appreciate all of our contributors!"),l.a.createElement("h2",{className:"form-header-2"},"Please fill out the form below to add a new strain to our database."),g&&l.a.createElement("p",null,"Something went wrong... Please try again!")),l.a.createElement(h,{strain:t,handleChange:function(e){e.persist(),r(Object(d.a)({},t,Object(o.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault();var a="".concat(f,"/strains");fetch(a,{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){E(e._id)})).catch((function(){N(!0)}))}}))},p=function(e){var a=e.match,t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],i=r[1],s=Object(n.useState)(null),E=Object(u.a)(s,2),p=E[0],b=E[1],g=Object(n.useState)(!1),N=Object(u.a)(g,2),v=N[0],y=N[1];Object(n.useEffect)((function(){window.scrollTo(0,0);var e="".concat(f,"/strains/").concat(a.params.id);fetch(e).then((function(e){return e.json()})).then((function(e){i({id:e._id,name:e.name,plantCategory:e.plantCategory,genetics:e.genetics,parents:e.parents,thcContent:e.thcContent,cbdContent:e.cbdContent,smellAndFlavor:e.smellAndFlavor,effect:e.effect,info:e.info,mainImage:e.mainImage})})).catch((function(){y(!0)}))}),[]);return p?l.a.createElement(m.a,{to:"/strains/".concat(p)}):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"edit-form-header"},l.a.createElement("h2",{className:"page-title"},"Strain Editor"),l.a.createElement("h2",{className:"form-header-1"},"We greatly appreciate all of our contributors!"),l.a.createElement("h2",{className:"form-header-2"},"Please use the form below to update ",c.name,"."),v&&l.a.createElement("p",null,"Something went wrong... Please try again!")),l.a.createElement(h,{strain:c,handleChange:function(e){e.persist(),i(Object(d.a)({},c,Object(o.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault();var a="".concat(f,"/strains/").concat(c.id);fetch(a,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){b(e._id)})).catch((function(){y(!0)}))}}))},b=function(e){var a=e.match;window.scrollTo(0,0);var t=Object(n.useState)(!1),r=Object(u.a)(t,2),c=r[0],s=r[1],o=Object(n.useState)(!1),d=Object(u.a)(o,2),h=d[0],E=d[1],p=Object(n.useState)(null),b=Object(u.a)(p,2),g=b[0],N=b[1];Object(n.useEffect)((function(){var e="".concat(f,"/strains/").concat(a.params.id);fetch(e).then((function(e){return e.json()})).then(N).catch((function(){E(!0)}))}),[]);return c?l.a.createElement(m.a,{to:"/strains"}):h?l.a.createElement("div",null,"Sorry, there was a problem getting this strain."):g?l.a.createElement("div",null,l.a.createElement("h2",{className:"page-title"},g.name),l.a.createElement("div",{className:"details-container"},l.a.createElement("img",{src:g.mainImage,className:"details-image",alt:""}),l.a.createElement("ul",{className:"details-text-1"},l.a.createElement("li",{className:"details-property"},"Genetics :"),l.a.createElement("li",{className:"details-value"},g.genetics),l.a.createElement("li",{className:"details-property"},"Parents :"),l.a.createElement("li",{className:"details-value"},g.parents)),l.a.createElement("ul",{className:"details-text-2"},l.a.createElement("li",{className:"details-property"},"THC Content :"),l.a.createElement("li",{className:"details-value"},g.thcContent),l.a.createElement("li",{className:"details-property"},"CBD Content : "),l.a.createElement("li",{className:"details-value"},g.cbdContent),l.a.createElement("li",{className:"details-property"},"Small And Flavour :"),l.a.createElement("li",{className:"details-value"},g.smellAndFlavor),l.a.createElement("li",{className:"details-property"},"Effect :"),l.a.createElement("li",{className:"details-value"},g.effect),l.a.createElement("li",{className:"details-property"},"Description :"),l.a.createElement("li",{className:"details-value"},g.info))),l.a.createElement(i.b,{className:"anchor-to-fix",to:"/strains/".concat(a.params.id,"/edit")},l.a.createElement("button",{className:"details-update-button"},"Update Strain")),l.a.createElement("button",{className:"details-delete-button",onClick:function(e){var t="".concat(f,"/strains/").concat(a.params.id);fetch(t,{method:"DELETE"}).then((function(e){s(!0)})).catch(console.error)}},"Delete Strain"),l.a.createElement("div",{className:"additional-images"},0===g.additionalImages.length?null:g.additionalImages.map((function(e,a){return l.a.createElement("img",{key:a,alt:g.name,src:e})})))):l.a.createElement("div",null,"Loading...")},g=function(e){var a=Object(n.useState)([]),t=Object(u.a)(a,2),r=t[0],c=t[1],m=Object(n.useState)(!1),s=Object(u.a)(m,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){fetch("".concat(f,"/strains")).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(){d(!0)}))}),[]),o?l.a.createElement("div",null,"Sorry, there was a problem getting strains."):0===r.length?l.a.createElement("div",null,"Loading..."):l.a.createElement("div",{className:"strains-gallery-container"},l.a.createElement("h2",{className:"strain-type"},"Indica"),r.map((function(e){return"Indica"===e.plantCategory?l.a.createElement("div",{key:e._id},l.a.createElement(i.b,{to:"/strains/".concat(e._id),className:"list-strain-name"}," ",e.name)):null})),l.a.createElement("h2",{className:"strain-type"},"Sativa"),r.map((function(e){return"Sativa"===e.plantCategory?l.a.createElement("div",{key:e._id},l.a.createElement(i.b,{to:"/strains/".concat(e._id),className:"list-strain-name"}," ",e.name)):null})),l.a.createElement("h2",{className:"strain-type"},"Hybrid: Indica Dominant"),r.map((function(e){return"Hybrid: Indica Dominant"===e.plantCategory?l.a.createElement("div",{key:e._id},l.a.createElement(i.b,{to:"/strains/".concat(e._id),className:"list-strain-name"}," ",e.name)):null})),l.a.createElement("h2",{className:"strain-type"},"Hybrid: Sativa Dominant"),r.map((function(e){return"Hybrid: Sativa Dominant"===e.plantCategory?l.a.createElement("div",{key:e._id},l.a.createElement(i.b,{to:"/strains/".concat(e._id),className:"list-strain-name"}," ",e.name)):null})),l.a.createElement("h2",{className:"strain-type"},"Hybrid: 50/50"),r.map((function(e){return"Hybrid: 50/50"===e.plantCategory?l.a.createElement("div",{key:e._id},l.a.createElement(i.b,{to:"/strains/".concat(e._id),className:"list-strain-name"}," ",e.name)):null})))},N=function(e){var a=e.isShowing,t=e.hide;return a?c.a.createPortal(l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-overlay"}),l.a.createElement("div",{className:"modal-wrapper","aria-modal":!0,"aria-hidden":!0,tabIndex:-1,role:"dialog"},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("h1",{className:"modal-header"},"| i r e"),l.a.createElement("p",{className:"modal-text"},"Before we get started, we need to verify that you're 21+. If so, please press confirm to continue."),l.a.createElement("a",{className:"modal-text",href:"https://howmanydaystill.com/its/i-turn-21"},"If not, please come back later."),l.a.createElement("button",{className:"modal-close-button",onClick:t},"confirm"))))),document.body):null},v=function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],l=a[1];return{isShowing:t,toggle:function(){l(!t)}}},y=(t(29),t(30),t(31),t(32),t(33),t(34),t(10));function C(){window.scrollTo(0,0)}var S=function(){window.scrollTo(0,0);var e=v(),a=e.isShowing,t=e.toggle;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{isShowing:a,hide:t}),l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement(i.b,{className:"links",to:"/"},l.a.createElement("h1",{className:"header-title-left"},"| i r e")),l.a.createElement("ul",{className:"header-links-right"},l.a.createElement(i.b,{className:"links",to:"/"},l.a.createElement("li",null,l.a.createElement(y.b,{alt:"home"}))),l.a.createElement(i.b,{className:"links",to:"/strains"},l.a.createElement("li",null,l.a.createElement(y.a,{alt:"all strains"}))),l.a.createElement(i.b,{className:"links",to:"/create"},l.a.createElement("li",null,l.a.createElement(y.c,{alt:"create strain",onClick:C})))))),l.a.createElement("main",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:s}),l.a.createElement(m.b,{exact:!0,path:"/create",component:E}),l.a.createElement(m.b,{exact:!0,path:"/strains/:id/edit",component:p}),l.a.createElement(m.b,{exact:!0,path:"/strains/:id",component:b}),l.a.createElement(m.b,{exact:!0,path:"/strains",component:g}))),l.a.createElement("footer",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"sign-profile-link"},l.a.createElement("a",{className:"sign-profile-link",href:"https://www.linkedin.com/in/etinamoreno/"},"ERNESTINE M")),l.a.createElement("li",{className:"sign-profile-link"},l.a.createElement("a",{className:"sign-profile-link",href:"https://www.linkedin.com/in/williamhkaufman/"},"WILLIAM K")),l.a.createElement("li",{className:"sign-profile-link"},l.a.createElement("a",{className:"sign-profile-link",href:"https://www.linkedin.com/in/andresortizmontalvo/"},"ANDR\xc9S O M"))),l.a.createElement("span",{className:"sign-date"},l.a.createElement("small",null,"20",l.a.createElement("span",{className:"sign-first-letter"},"20")))))};c.a.render(l.a.createElement(i.a,{basename:"/FIRE-front"},l.a.createElement(S,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f05c7f8a.chunk.js.map