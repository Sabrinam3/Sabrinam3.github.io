(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/exterior3.91eabc96.jpeg"},119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(68),r=a.n(i),s=(a(95),a(69)),c=a.n(s),m=(a(97),a(70)),o=a.n(m),u=(a(98),a(71)),d=a.n(u),p=a(72),E=a.n(p),v=a(17),g=a.n(v),b=a(73),h=a.n(b),N=(a(99),a(74)),f=a.n(N),P=a(75),x=a.n(P),y=a(76),I=a.n(y),j=(a(100),a(77)),O=a.n(j),k=a(78),S=a.n(k),w=a(79),C=a.n(w),q=a(80),L=a.n(q),W=a(81),T=a.n(W),D=a(82),A=a.n(D),F=(a(66),a(9)),Q=a(171),R=a(170),B=a(182),z=a(169),M=a(172),_=a(175),H=a(176),Y=a(174),U=a(179);function Z(e){return l.a.createElement(Y.a,null,l.a.createElement(U.a,{id:"demo-row-radio-buttons-group-label"},"Preferred Contact Method"),l.a.createElement(_.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",onChange:e.onRadioChange},l.a.createElement(H.a,{value:"phone",control:l.a.createElement(M.a,{checked:e.phoneSelected}),label:"Phone"}),l.a.createElement(H.a,{value:"email",control:l.a.createElement(M.a,{checked:!e.phoneSelected}),label:"Email"})))}var J=a(180),$=a(178);function G(e){return l.a.createElement(Y.a,null,l.a.createElement(U.a,{id:"demo-row-radio-buttons-group-label"},e.label),l.a.createElement($.a,{value:e.alignment,exclusive:!0,onChange:function(t,a){e.setAlignment(a)}},e.options.map(function(e,t){return l.a.createElement(J.a,{value:e,key:t},e)})))}var X=a(110),K=Object(Q.a)(function(e){return{notchedOutline:{borderWidth:"1px",borderColor:"#65bcb1 !important",color:"white !important"},label:{color:"white !important",fontFamily:"Playfair Display"},input:{color:"white !important"}}}),V=["Residential","Commercial"],ee=["Interior","Exterior","Both"];function te(){var e=K(),t=Object(n.useState)(""),a=Object(F.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(!0),c=Object(F.a)(s,2),m=c[0],o=c[1],u=Object(n.useState)("unspecified"),d=Object(F.a)(u,2),p=d[0],E=d[1],v=Object(n.useState)("unspecified"),g=Object(F.a)(v,2),b=g[0],h=g[1],N=Object(n.useState)(""),f=Object(F.a)(N,2),P=f[0],x=f[1],y=Object(n.useState)(""),I=Object(F.a)(y,2),j=I[0],O=I[1],k=Object(n.useState)(""),S=Object(F.a)(k,2),w=S[0],C=S[1],q=Object(n.useState)(""),L=Object(F.a)(q,2),W=L[0],T=L[1],D=Object(n.useState)(""),A=Object(F.a)(D,2),Q=A[0],M=A[1],_=Object(n.useState)(""),H=Object(F.a)(_,2),Y=H[0],U=H[1],J=Object(n.useState)(""),$=Object(F.a)(J,2),te=$[0],ae=($[1],Object(n.useState)("")),ne=Object(F.a)(ae,2),le=ne[0],ie=ne[1],re=function(e){"Next"===e?(document.getElementById("form-stage1").style.display="none",document.getElementById("form-stage2").style.display="block"):"Previous"===e&&(document.getElementById("form-stage1").style.display="block",document.getElementById("form-stage2").style.display="none",ie(""))},se=function(){if(function(){var e=""!==i,t=m?""!==P&&/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(P):""!==j&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(j);return T(e?"":"Enter your name"),m&&!t&&M("Enter a valid phone number"),m||t||U("Enter a valid email address"),e&&t}()){var e={from_name:i,reply_to:m?P:j,message_html:w,job_type:p,job_detail:b};X.a.send("gmail","ThielotPainting",e,"user_SdhrQXfrPZb4mn1plcyk9").then(function(e){ie("Thank you! Talk to you soon."),r(""),x(""),O(""),C("")},function(e){ie("There was a problem submitting the form. Try again or call me directly at (519)-859-9458")})}else ie("Fix validation errors and submit again")};return l.a.createElement("div",{className:"form-section"},l.a.createElement("div",{id:"form-stage1"},l.a.createElement("h5",null,"Step 1 - Tell us About Your Project(optional)"),l.a.createElement("div",{className:"form-box"},l.a.createElement(G,{options:V,label:"What Type of Property Needs Painting?",alignment:p,setAlignment:E})),l.a.createElement("div",{className:"form-box"},l.a.createElement(G,{options:ee,label:"What Needs Painting?",alignment:b,setAlignment:h})),l.a.createElement("div",{className:"form-btn-box"},l.a.createElement("button",{className:"button1",value:"Next",onClick:function(e){return re(e.target.value)}},"Next"))),l.a.createElement("div",{id:"form-stage2"},l.a.createElement("h5",null,"Step 2 - Tell Us How To Reach You"),l.a.createElement("div",{className:"form-box"},l.a.createElement(Z,{onRadioChange:function(e){"email"===e.target.value?(document.getElementById("email-box").style.display="block",document.getElementById("phone-box").style.display="none",o(!1)):(document.getElementById("email-box").style.display="none",document.getElementById("phone-box").style.display="block",o(!0))},phoneSelected:m})),l.a.createElement("div",{className:"form-box"},l.a.createElement(R.a,{type:"text",value:i,variant:"outlined",InputProps:{classes:{notchedOutline:e.notchedOutline,input:e.input}},InputLabelProps:{classes:{root:e.label}},name:"name",onChange:function(e){return r(e.target.value)},label:"Your Name",autoFocus:!0,required:!0,error:""!==W,helperText:W})),l.a.createElement("div",{className:"form-box",id:"phone-box"},l.a.createElement(R.a,{type:"tel",value:P,variant:"outlined",fullWidth:!0,InputProps:{classes:{notchedOutline:e.notchedOutline,input:e.input}},InputLabelProps:{classes:{root:e.label}},name:"phone",onChange:function(e){return x(e.target.value)},label:"Phone Number",error:""!==Q,helperText:Q})),l.a.createElement("div",{className:"form-box",id:"email-box"},l.a.createElement(R.a,{type:"email",value:j,variant:"outlined",fullWidth:!0,InputProps:{classes:{notchedOutline:e.notchedOutline,input:e.input}},InputLabelProps:{classes:{root:e.label}},name:"email",onChange:function(e){return O(e.target.value)},label:"Email Address",error:""!==Y,helperText:Y})),l.a.createElement("div",{className:"form-box"},l.a.createElement(B.a,null,l.a.createElement(z.a,{id:"demo-row-radio-buttons-group-label"},"Tell Us More About Your Project (optional)"),l.a.createElement(R.a,{type:"text",value:w,variant:"outlined",fullWidth:!0,multiline:!0,minRows:5,InputProps:{classes:{notchedOutline:e.notchedOutline,input:e.input}},InputLabelProps:{classes:{root:e.label}},name:"message",onInput:function(e){return C(e.target.value)},error:""!==te,helperText:te}))),l.a.createElement("div",{className:"form-btn-box"},l.a.createElement("button",{className:"button1",value:"Previous",onClick:function(e){return re(e.target.value)}},"Previous"),l.a.createElement("button",{className:"button1",value:"Submit",onClick:function(e){return se()}},"Submit")),l.a.createElement("h4",null,le)))}var ae=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement("img",{src:c.a,className:"App-logo",alt:"ThieLot Painting Logo"}),l.a.createElement("div",{className:"nav-tel"},l.a.createElement("a",{href:"tel:5198599458"},l.a.createElement("p",null,"(519) 859-9458")),l.a.createElement("a",{href:"tel:5198599458"},l.a.createElement("p",null,"Call Now for a ",l.a.createElement("span",{className:"nav-emphasis"},"Free")," Estimate")))),l.a.createElement("div",{className:"contact-mobile-bar"},l.a.createElement("a",{href:"tel:5198599458"},l.a.createElement("p",null,"Call Now for a ",l.a.createElement("span",{className:"nav-emphasis"},"Free")," Estimate"))),l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"video-overlay"},l.a.createElement("div",null,l.a.createElement("h1",null,"ThieLot Painting",l.a.createElement("span",null,".")),l.a.createElement("p",null,"Premiere Residential and Commercial Painting Services"),l.a.createElement("div",{className:"contact-desktop-span"},l.a.createElement("a",{href:"#contact"},l.a.createElement("button",{className:"button1"},"Get a Free Estimate"))))),l.a.createElement("video",{src:o.a,type:"video/mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0})),l.a.createElement("main",null,l.a.createElement("section",{id:"mission-section"},l.a.createElement("h2",{className:"subheading"},"Our Mission"),l.a.createElement("h3",{className:"slogan"},"Doing the Project Properly the"," ",l.a.createElement("span",{className:"nav-emphasis-dark"},"First Time")),l.a.createElement("div",{className:"mission-statement"},l.a.createElement("div",null,l.a.createElement("p",null,"At ThieLot Painting, we take pride in"," ",l.a.createElement("span",{className:"nav-emphasis"},"every project"),". That is why we bring top quality workmanship and meticulous attention to detail to every job - large or small. We remain dedicated to delivering the"," ",l.a.createElement("span",{className:"nav-emphasis"},"best quality")," at the most"," ",l.a.createElement("span",{className:"nav-emphasis"},"competitive price")," by combining current technology with old fashioned values and service. We are a family run business with over"," ",l.a.createElement("span",{className:"nav-emphasis"},"x years "),"of industry experience and knowledge. Let us help make your home or business look its best!"," "))),l.a.createElement("div",{className:"services-preview"},l.a.createElement("div",{className:"services-preview-inner"},l.a.createElement("div",{className:"img-hover-zoom img-hover-zoom--blur"},l.a.createElement("img",{src:O.a,alt:""})),l.a.createElement("h3",null,"Interior Painting"),l.a.createElement("a",{href:"#interior"},l.a.createElement("button",{className:"button3"},"Learn More"))),l.a.createElement("div",{className:"services-preview-inner"},l.a.createElement("div",{className:"img-hover-zoom img-hover-zoom--blur"},l.a.createElement("img",{src:S.a,alt:""})),l.a.createElement("h3",null,"Exterior Painting"),l.a.createElement("a",{href:"#exterior"},l.a.createElement("button",{className:"button3"},"Learn More"))),l.a.createElement("div",{className:"services-preview-inner"},l.a.createElement("div",{className:"img-hover-zoom img-hover-zoom--blur"},l.a.createElement("img",{src:C.a,alt:""})),l.a.createElement("h3",null,"Commercial Painting"),l.a.createElement("a",{href:"#commercial"},l.a.createElement("button",{className:"button3"},"Learn More"))))),l.a.createElement("div",{className:"free-estimate-bar"},l.a.createElement("div",null,l.a.createElement("h3",null,"ThieLot Painting Delivers the Highest Level of Professionalism and Quality"),l.a.createElement("h4",null,"We provide our expert opinion at every stage of the project and are always willing to provide a free estimate"),l.a.createElement("a",{href:"#contact"},l.a.createElement("button",{className:"button1"},"Contact Us Now")))),l.a.createElement("section",{className:"feature"},l.a.createElement("h2",{className:"subheading-2"},"Why ThieLot Painting?"),l.a.createElement("div",{className:"feature-inner"},l.a.createElement("div",null,l.a.createElement("div",{className:"feature-container"},l.a.createElement("img",{src:h.a,alt:""}),l.a.createElement("h3",null,"Free Estimates")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.")),l.a.createElement("div",null,l.a.createElement("div",{className:"feature-container"},l.a.createElement("img",{src:E.a,alt:""}),l.a.createElement("h3",null,"Superior Customer Service")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.")),l.a.createElement("div",null,l.a.createElement("div",{className:"feature-container"},l.a.createElement("img",{src:d.a,alt:""}),l.a.createElement("h3",null,"Competitive Pricing")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.")),l.a.createElement("div",null,l.a.createElement("div",{className:"feature-container"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("h3",null,"Top Quality Workmanship")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo.")))),l.a.createElement("section",{className:"services-section"},l.a.createElement("div",{className:"services-top-bar"},l.a.createElement("div",null,l.a.createElement("h2",{className:"subheading"},l.a.createElement("span",{className:"nav-emphasis-dark"},"Residential")," Painting Services"))),l.a.createElement("p",null,"ThieLot Paining provides"," ",l.a.createElement("span",{className:"nav-emphasis-dark"},"top-quality "),"residential painting services in London, Ontario and surrounding area"," "),l.a.createElement("div",{className:"services-overlay"},l.a.createElement("div",{className:"services-img"},l.a.createElement("div",{className:"services-img-overlay"},l.a.createElement("h4",null,"Residential Painting Services"),l.a.createElement("button",{className:"button1"},"Free Quote")),l.a.createElement("img",{src:f.a,alt:""})),l.a.createElement("div",{className:"services-img"},l.a.createElement("div",{className:"services-img-overlay"},l.a.createElement("h4",null,"Residential Painting Services"),l.a.createElement("button",{className:"button1"},"Free Quote")),l.a.createElement("img",{src:I.a,alt:""})),l.a.createElement("div",{className:"services-img"},l.a.createElement("div",{className:"services-img-overlay"},l.a.createElement("h4",null,"Residential Painting Services"),l.a.createElement("button",{className:"button1"},"Free Quote")),l.a.createElement("img",{src:x.a,alt:""}))),l.a.createElement("div",{className:"spacer-link",id:"interior"}),l.a.createElement("div",{className:"services-sub-text"},l.a.createElement("h3",null,l.a.createElement("span",{className:"nav-emphasis-dark"},"Interior")," Painting"),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam."),l.a.createElement("h4",null,"Interior Painting"," ",l.a.createElement("span",{className:"nav-emphasis-dark"},"Services")," Include:"),l.a.createElement("div",{className:"services-list-container"},l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting"))),l.a.createElement("h5",null,"Have something else in mind? Ask us about it!"),l.a.createElement("a",{href:"#contact"},l.a.createElement("button",{className:"button1"},"Interior Painting Quote"))),l.a.createElement("div",{className:"spacer-link",id:"exterior"}),l.a.createElement("div",{className:"services-sub-text"},l.a.createElement("h3",null,l.a.createElement("span",{className:"nav-emphasis-dark"},"Exterior")," Painting"),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam."),l.a.createElement("h4",null,"Exterior Painting"," ",l.a.createElement("span",{className:"nav-emphasis-dark"},"Services")," Include:"),l.a.createElement("div",{className:"services-list-container"},l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting"))),l.a.createElement("h5",null,"Have something else in mind? Ask us about it!"),l.a.createElement("a",{href:"#contact"},l.a.createElement("button",{className:"button1"},"Exterior Painting Quote"))),l.a.createElement("div",{className:"commercial-section"},l.a.createElement("div",{className:"services-top-bar"},l.a.createElement("div",null,l.a.createElement("h2",{className:"subheading"},l.a.createElement("span",{className:"nav-emphasis-dark"},"Commercial")," Painting Services"))),l.a.createElement("p",null,"ThieLot Paining provides"," ",l.a.createElement("span",{className:"nav-emphasis-dark"},"top-quality "),"commercial painting services to businesses in London, Ontario and surrounding area"," "),l.a.createElement("div",{className:"services-overlay"},l.a.createElement("div",{className:"services-img"},l.a.createElement("div",{className:"services-img-overlay"},l.a.createElement("h4",null,"Commercial Painting Services"),l.a.createElement("button",{className:"button1"},"Free Quote")),l.a.createElement("img",{src:L.a,alt:""})),l.a.createElement("div",{className:"services-img"},l.a.createElement("div",{className:"services-img-overlay"},l.a.createElement("h4",null,"Commercial Painting Services"),l.a.createElement("button",{className:"button1"},"Free Quote")),l.a.createElement("img",{src:T.a,alt:""})),l.a.createElement("div",{className:"services-img"},l.a.createElement("div",{className:"services-img-overlay"},l.a.createElement("h4",null,"Commercial Painting Services"),l.a.createElement("button",{className:"button1"},"Free Quote")),l.a.createElement("img",{src:A.a,alt:""}))),l.a.createElement("div",{className:"spacer-link",id:"commercial"}),l.a.createElement("div",{className:"services-sub-text"},l.a.createElement("h3",null,l.a.createElement("span",{className:"nav-emphasis-dark"},"Commercial")," Painting"),l.a.createElement("h5",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eget lorem vestibulum, faucibus odio et, maximus orci. Curabitur nec tellus feugiat, semper ex vel, dictum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ante lobortis, vulputate lectus quis, commodo diam."),l.a.createElement("h4",null,"Commercial Painting"," ",l.a.createElement("span",{className:"nav-emphasis-dark"},"Services")," Include:"),l.a.createElement("div",{className:"services-list-container"},l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting")),l.a.createElement("div",{className:"services-list-item"},l.a.createElement("img",{src:g.a,alt:""}),l.a.createElement("p",null,"Interior Wall Painting"))),l.a.createElement("h5",null,"Have something else in mind? Ask us about it!"),l.a.createElement("a",{href:"#contact"},l.a.createElement("button",{className:"button1"},"Commercial Painting Quote"))))),l.a.createElement("section",{className:"contact-section",id:"contact"},l.a.createElement("h3",null,"Submit a Service Inquiry"),l.a.createElement(te,null))))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ae,null)))},17:function(e,t,a){e.exports=a.p+"static/media/paintbrush.54049a5f.svg"},66:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/logo.416716e7.png"},70:function(e,t,a){e.exports=a.p+"static/media/hero.d97ec9ef.mp4"},71:function(e,t,a){e.exports=a.p+"static/media/dollar.fdd3ab84.svg"},72:function(e,t,a){e.exports=a.p+"static/media/handshake.426f4490.svg"},73:function(e,t,a){e.exports=a.p+"static/media/invoice.d4b2df01.svg"},74:function(e,t,a){e.exports=a.p+"static/media/interior.59334e0f.jpeg"},75:function(e,t,a){e.exports=a.p+"static/media/exterior.0d6eac6c.jpeg"},76:function(e,t,a){e.exports=a.p+"static/media/exterior1.cdebecee.jpeg"},77:function(e,t,a){e.exports=a.p+"static/media/interiorxx.54094c73.jpeg"},78:function(e,t,a){e.exports=a.p+"static/media/exterior-feature.9a5da93a.jpeg"},79:function(e,t,a){e.exports=a.p+"static/media/commercial-feature.52e8be97.jpeg"},80:function(e,t,a){e.exports=a.p+"static/media/commercial1.8564c8e5.jpeg"},81:function(e,t,a){e.exports=a.p+"static/media/commercial2.bc12f11b.jpeg"},82:function(e,t,a){e.exports=a.p+"static/media/commercial3.b637464d.jpeg"},87:function(e,t,a){e.exports=a(119)},95:function(e,t,a){},97:function(e,t,a){e.exports=a.p+"static/media/logo-small.a7b3cbf7.png"},98:function(e,t,a){e.exports=a.p+"static/media/mission.916c7b88.jpeg"},99:function(e,t,a){e.exports=a.p+"static/media/arrow-right.952dbb39.svg"}},[[87,2,1]]]);
//# sourceMappingURL=main.b2bd6bd0.chunk.js.map