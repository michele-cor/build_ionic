import{K as f}from"./index-BHf6iyLP.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g="ionKeyboardDidShow",p="ionKeyboardDidHide",b=150;let r={},o={},s=!1;const v=()=>{r={},o={},s=!1},k=e=>{if(f.getEngine())y(e);else{if(!e.visualViewport)return;o=d(e.visualViewport),e.visualViewport.onresize=()=>{K(e),l()||D(e)?n(e):i(e)&&a(e)}}},y=e=>{e.addEventListener("keyboardDidShow",t=>n(e,t)),e.addEventListener("keyboardDidHide",()=>a(e))},n=(e,t)=>{E(e,t),s=!0},a=e=>{u(e),s=!1},l=()=>{const e=(r.height-o.height)*o.scale;return!s&&r.width===o.width&&e>b},D=e=>s&&!i(e),i=e=>s&&o.height===e.innerHeight,E=(e,t)=>{const c=t?t.keyboardHeight:e.innerHeight-o.height,h=new CustomEvent(g,{detail:{keyboardHeight:c}});e.dispatchEvent(h)},u=e=>{const t=new CustomEvent(p);e.dispatchEvent(t)},K=e=>{r=Object.assign({},o),o=d(e.visualViewport)},d=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale});export{p as KEYBOARD_DID_CLOSE,g as KEYBOARD_DID_OPEN,d as copyVisualViewport,i as keyboardDidClose,l as keyboardDidOpen,D as keyboardDidResize,v as resetKeyboardAssist,a as setKeyboardClose,n as setKeyboardOpen,k as startKeyboardAssist,K as trackViewportChanges};
