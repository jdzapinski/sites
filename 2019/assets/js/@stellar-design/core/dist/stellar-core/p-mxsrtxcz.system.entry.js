System.register(["./p-10910887.system.js","./p-5cf15a0c.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js"],(function(e){"use strict";var t,r,l;return{setters:[function(e){t=e.r;r=e.h},function(e){l=e.c},function(){},function(){},function(){},function(){}],execute:function(){var n=e("stellar_color_library",function(){function e(e){t(this,e)}e.prototype.renderColorPallette=function(e){var t=l[e];return[r("stellar-grid",{cols:"6"},t.map((function(t,l){return r("stellar-card",{padding:"tiny"},r("div",{class:"aspect-ratio aspect-ratio--16x9 flex items-center justify-around",style:{"background-color":"var(--"+e+l+")"}},r("div",{class:"aspect-ratio--object flex items-center justify-around "},r("h5",{class:"f-invert fw6 ttu "+e+l},t))),r("div",{class:"pv3 ph4 tc nt4 bg-white relative"},r("div",{class:"dt w-100"},r("div",{class:"dtc"},r("p",{class:"f5 f4-ns mv0 black"},"var(--",e,l,")")))))})))]};e.prototype.render=function(){return r("div",null,this.renderColorPallette("gray"),this.renderColorPallette("red"),this.renderColorPallette("orange"),this.renderColorPallette("yellow"),this.renderColorPallette("lime"),this.renderColorPallette("green"),this.renderColorPallette("teal"),this.renderColorPallette("cyan"),this.renderColorPallette("blue"),this.renderColorPallette("indigo"),this.renderColorPallette("violet"),this.renderColorPallette("fuchsia"),this.renderColorPallette("pink"))};Object.defineProperty(e,"style",{get:function(){return""},enumerable:true,configurable:true});return e}())}}}));