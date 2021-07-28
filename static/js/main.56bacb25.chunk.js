(this.webpackJsonpessae_training=this.webpackJsonpessae_training||[]).push([[0],{181:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var i,c=n(0),s=n.n(c),a=n(67),o=n.n(a),r=n(69),d=(n(74),n(12)),l=n(8),u=n.n(l),j=(n(181),n(1));function h(e){e.name;var t=e.file,n=e.audioRef,i=e.setAudioEnded;return Object(j.jsx)("audio",{className:"audio-single",controls:!0,ref:n,controlsList:"nodownload",onEnded:function(){"undefined"!==typeof i&&i(!0)},children:Object(j.jsx)("source",{src:"audio/".concat(t),type:"audio/wav"})})}function b(e){var t=e.name,n=e.file,i=e.index,c=e.choice,s=e.setChoice,a=e.audioRef,o=e.audioEnded,r=e.setAudioEnded,d=Object(j.jsx)("div",{className:"col-1"});return o&&(d=Object(j.jsx)("div",{className:"check col-1 ".concat(i===c?"selected":""),onClick:function(){return s(i)},children:Object(j.jsx)("div",{className:"inside"})})),Object(j.jsxs)("li",{className:"grid",children:[Object(j.jsx)("input",{type:"radio",id:t,value:"A",name:t}),d,Object(j.jsx)("label",{htmlFor:t,className:"col-3",children:Object(j.jsx)(h,{name:t,file:n,audioRef:a,setAudioEnded:r})})]})}function f(e){var t=e.name,n=e.files,c=e.choice,s=e.setChoice,a=e.audioRefs,o=e.audioEnded,r=e.setAudioEnded;i=s;var d=n.map((function(e,n){return Object(j.jsx)(b,{name:t,file:e,index:n,choice:c,setChoice:s,audioRef:a[n],audioEnded:o,setAudioEnded:r},n)}));return Object(j.jsx)("ul",{className:"AudioRadioButtonGroup",children:d})}n(183);function m(e,t,n,c){return Object(j.jsxs)("div",{className:"container grid",children:[Object(j.jsx)("div",{className:"section col-all",children:Object(j.jsx)(u.a,{children:"# **Congratulations!**\n\t\t\t\t\t\nYou have passed the qualifications for our study\u2014making you \n\t\t\t\t\teligible for additional compensation should you finish the audio evaluation.\n\t\t\t\t\t\n### **Instructions**\n\t\t\t\t\t\nIn this experiment, you will do a series of two-way \n\t\t\t\t\tcomparisons. In each comparison, you will first be presented a reference recording. \n\t\t\t\t\tYou will then be presented two time-stretched versions of the reference that either \n\t\t\t\t\tincrease or decrease its duration/speed. After listening to all three recordings, \n\t\t\t\t\tyou will be asked to choose the higher-quality (more natural, fewer audio artifacts) \n\t\t\t\t\ttime-stretched audio.\n\t\t\t\t\t\n**NOTE:** The time-stretched recordings will not have the \n\t\t\t\t\tsame duration as the original audio.\n\t\t\t\t\t\nOn the next page, you will receive an example task.\n\t\t\t\t\t"})}),Object(j.jsx)("div",{className:"section col-2 align-right",children:Object(j.jsx)("a",{href:"#",className:"button",onClick:function(){return function(e,t,n,c,s,a){t(e+1),e>0&&(n(),i(-1),c(!1),s(!1),a(!1))}(t,n,c)},children:"Next"})})]})}function O(e,t,n,i,c,s,a,o){return Object(j.jsxs)("div",{className:"section col-all",children:[e,Object(j.jsx)(f,{name:"test-abx",files:t,choice:n,setChoice:i,audioRefs:c,refEnded:s,audioEnded:a,setAudioEnded:o})]})}function x(e,t,n,i,s,a){var o=Object(c.useState)(-1),r=Object(d.a)(o,2),l=r[0],b=r[1],f=Object(c.useState)(""),x=Object(d.a)(f,2),p=(x[0],x[1],Object(c.useState)(!1)),v=Object(d.a)(p,2),g=v[0],y=v[1],w=Object(c.useState)(!1),N=Object(d.a)(w,2),_=N[0],E=N[1],R=Object(c.useState)(!1),A=Object(d.a)(R,2),k=A[0],S=A[1];return 0===e?m(0,e,t,a):1===e?function(e,t,n,i,c,s,a,o,r,d,l,b,f,m){var x=Object(j.jsx)(u.a,{children:"**Sample Question**"});r||(x=Object(j.jsx)(u.a,{children:"Please listen to the following reference audio in its entirety."}));var p=Object(j.jsxs)("div",{className:"section col-all",children:[x,Object(j.jsx)(h,{name:"test-abx",file:"2sets/test2/original/p232_001_mic2.wav",audioRef:e,setAudioEnded:d})]}),v=null,g=["2sets/test2/phase_vocoder_model/p232_001_mic2_0.5_noisy.wav","2sets/test2/wsola_model/p232_001_mic2_0.5_enhanced.wav"];f?v=O(Object(j.jsx)(u.a,{children:"Please select the higher-quality time-stretched audio, which is the option on the bottom."}),g,s,a,[t,n],r,f,m):l?v=O(Object(j.jsx)(u.a,{children:"Please listen to the example of a **well** time-stretched audio in its entirety."}),g,s,a,[t,n],r,f,m):r&&(v=O(Object(j.jsx)(u.a,{children:"Please listen to the example of a **poorly** time-stretched audio in its entirety."}),[g[0]],s,a,[t],r,l,b));var y=null;return-1!==s&&(y=Object(j.jsx)("div",{className:"section col-2 align-right",children:Object(j.jsx)("a",{href:"https://btangsp.github.io/essae_rating/",className:"button",children:"Next"})})),Object(j.jsxs)("div",{className:"container grid",children:[p,v,y]})}(n,i,s,0,0,l,b,0,g,y,_,E,k,S):Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(u.a,{children:"#### Thank you for your participation."})})}function p(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(c.useRef)(),a=Object(c.useRef)(),o=Object(c.useRef)();return Object(j.jsx)("div",{children:x(n,i,s,a,o,(function(e){s.current&&(s.current.pause(),s.current.load()),a.current&&(a.current.pause(),a.current.load()),o.current&&(o.current.pause(),o.current.load())}))})}n(184);function v(){return Object(j.jsx)("div",{className:"user-study",children:Object(j.jsx)(p,{})})}o.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})})}),document.getElementById("root"))},74:function(e,t,n){}},[[188,1,2]]]);
//# sourceMappingURL=main.56bacb25.chunk.js.map