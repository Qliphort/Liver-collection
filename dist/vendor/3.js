(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this;this.get=function(t){if(name="store."+e.name+"."+t,null!==localStorage.getItem(name))try{return JSON.parse(localStorage.getItem(name))}catch(e){return null}},this.set=function(t,l){if(void 0===l)e.remove(t);else{if("function"==typeof l)l=null;else try{l=JSON.stringify(l)}catch(e){l=null}localStorage.setItem("store."+e.name+"."+t,l)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",l=localStorage.length-1;l>=0;l--)localStorage.key(l).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(l));return e},this.toObject=function(){for(var t={},l=void 0,a=void 0,n="store."+e.name+".",r=localStorage.length-1;r>=0;r--)localStorage.key(r).substring(0,n.length)===n&&(l=localStorage.key(r).substring(n.length),void 0!==(a=e.get(l))&&(t[l]=a));return t},this.fromObject=function(t,l){for(var a in!0!==l&&e.removeAll(),t)t.hasOwnProperty(a)&&e.set(a,t[a]);return e}};t.default=function e(t,l){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a.call(this),this.name=t,void 0!==l)for(var n in l)l.hasOwnProperty(n)&&void 0===this.get(n)&&this.set(n,l[n])}},187:function(e,t,l){(e.exports=l(46)(!1)).push([e.i,".Option{}",""])},188:function(e,t,l){var a=l(187);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};l(45)(a,n);a.locals&&(e.exports=a.locals)},36:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(l(203)),n=i(l(54)),r=i(l(135)),o=i(l(201));l(198),l(195),l(194),l(191);var u=l(1),f=i(u);l(188);var c=i(l(12));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.Header,d=o.default.Content,m=o.default.Footer,p=o.default.Sider,y=r.default.SubMenu,h=((chrome.extension?chrome.extension.getBackgroundPage():{store:new c.default("options")}).store,function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.componentDidMount=function(){},l.onCollapse=function(e){console.log(e),l.setState({collapsed:e})},l.render=function(){return f.default.createElement(o.default,{style:{minHeight:"100vh"}},f.default.createElement(p,{collapsible:!0,collapsed:l.state.collapsed,onCollapse:l.onCollapse},f.default.createElement("div",{className:"logo"}),f.default.createElement(r.default,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},f.default.createElement(r.default.Item,{key:"1"},f.default.createElement(n.default,{type:"pie-chart"}),f.default.createElement("span",null,"Option 1")),f.default.createElement(r.default.Item,{key:"2"},f.default.createElement(n.default,{type:"desktop"}),f.default.createElement("span",null,"Option 2")),f.default.createElement(y,{key:"sub1",title:f.default.createElement("span",null,f.default.createElement(n.default,{type:"user"}),f.default.createElement("span",null,"User"))},f.default.createElement(r.default.Item,{key:"3"},"Tom"),f.default.createElement(r.default.Item,{key:"4"},"Bill"),f.default.createElement(r.default.Item,{key:"5"},"Alex")),f.default.createElement(y,{key:"sub2",title:f.default.createElement("span",null,f.default.createElement(n.default,{type:"team"}),f.default.createElement("span",null,"Team"))},f.default.createElement(r.default.Item,{key:"6"},"Team 1"),f.default.createElement(r.default.Item,{key:"8"},"Team 2")),f.default.createElement(r.default.Item,{key:"9"},f.default.createElement(n.default,{type:"file"}),f.default.createElement("span",null,"File")))),f.default.createElement(o.default,null,f.default.createElement(s,{style:{background:"#fff",padding:0}}),f.default.createElement(d,{style:{margin:"0 16px"}},f.default.createElement(a.default,{style:{margin:"16px 0"}},f.default.createElement(a.default.Item,null,"User"),f.default.createElement(a.default.Item,null,"Bill")),f.default.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},"Bill is a cat.")),f.default.createElement(m,{style:{textAlign:"center"}},f.default.createElement("div",null,"贫穷使我们相遇，但后来，只有你发出了母猪的声音"),f.default.createElement("div",null,"Poverty makes us meet, but later, only you come out of the closet."))))},l.state={collapsed:!1},l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),t}());t.default=h}}]);