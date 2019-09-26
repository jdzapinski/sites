var __awaiter=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,c){function s(e){try{u(i.next(e))}catch(e){c(e)}}function r(e){try{u(i["throw"](e))}catch(e){c(e)}}function u(e){e.done?n(e.value):o(e.value).then(s,r)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},i,o,c,s;return s={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function r(e){return function(t){return u([e,t])}}function u(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(c=s[0]&2?o["return"]:s[0]?o["throw"]||((c=o["return"])&&c.call(o),0):o.next)&&!(c=c.call(o,s[1])).done)return c;if(o=0,c)s=[s[0]&2,c.value];switch(s[0]){case 0:case 1:c=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(c=n.trys,c=c.length>0&&c[c.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!c||s[1]>c[0]&&s[1]<c[3])){n.label=s[1];break}if(s[0]===6&&n.label<c[1]){n.label=c[1];c=s;break}if(c&&n.label<c[2]){n.label=c[2];n.ops.push(s);break}if(c[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];o=0}finally{i=c=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-94e3dad1.system.js","./p-5cf15a0c.system.js","./p-752b9e3e.system.js","./p-fdba8b89.system.js","./p-bd9c4de0.system.js","./p-49be6f75.system.js","./p-c4dffc26.system.js","./p-69f4f799.system.js"],(function(e){"use strict";var t,n,i,o,c,s;return{setters:[function(e){t=e.r;n=e.e;i=e.h;o=e.g},function(e){c=e.b},function(){},function(){},function(){},function(){},function(){},function(e){s=e.T}],execute:function(){var r=e("stellar_toggle_option",function(){function e(e){var i=this;t(this,e);this.type="checkbox";this.checked=false;this.checkedDefault=false;this.dark=false;this.for="";this.default="";this.selectedCopy="Selected!";this._type="checkbox";this.focused=false;this.blur=0;this.ease=c({end:10,start:-1,duration:250,tick:function(e){i.blur=e.value},complete:function(){i.blur=0}});this.changeToggle=n(this,"changeToggle",7)}e.prototype.componentWillLoad=function(){this.updateRealType()};e.prototype.componentDidLoad=function(){this.input=this.element.querySelector("input.input");if(this.checkedDefault){this.checked=this.checkedDefault;this.changeToggle.emit({element:this.element,value:this.value,checked:this.checked})}};e.prototype.updateRealType=function(){if(this.type==="radio-block"){this._type="radio"}else if(this.type==="checkbox-block"){this._type="checkbox"}else{this._type=this.type}};e.prototype.confirm=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(this.input.checked!==this.checked){this.checked=this.input.checked}return[2]}))}))};e.prototype.updateSelected=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.input.checked=e;this.onToggleChange();return[2]}))}))};e.prototype.onToggleChange=function(){this.checked=this.input.checked;this.ease.start();this.changeToggle.emit({element:this.element,value:this.checked?this.value:undefined,checked:this.checked})};e.prototype.onFocus=function(){this.focused=true};e.prototype.onBlur=function(){this.focused=false};e.prototype.onClick=function(){this.input.checked=!this.input.checked;this.onToggleChange()};e.prototype.onKeyDown=function(e){if(e.key==="Enter"){e.preventDefault();e.stopPropagation();this.input.checked=!this.input.checked;this.onToggleChange()}};e.prototype.renderCheckbox=function(){if(this.type==="checkbox"||this.type==="radio"){return i("div",{class:this.focused?"box focused":"box"},i("div",{class:this.checked?"indicator active":"indicator"},this.type==="checkbox"&&i("stellar-asset",{name:"checkmark"})))}};e.prototype.renderRadioBlock=function(){if(this.type==="radio-block"){return i("div",{class:"wrapper"},i("div",{class:this.focused?"box focused":"box"},i("div",{class:this.checked?"indicator active":"indicator"})),i("div",{class:"block-content"},i("slot",null)))}};e.prototype.renderCheckBlock=function(){if(this.type==="checkbox-block"){return i("div",{class:"wrapper"},i("div",{class:this.focused?"box focused":"box"},i("div",{class:this.checked?"indicator active":"indicator"},i("stellar-asset",{name:"checkmark",block:true}))),i("div",{class:"block-content"},i("slot",null)))}};e.prototype.render=function(){var e=this;return i("button",{type:"button",onClick:function(){return e.onClick()},onKeyDown:function(t){return e.onKeyDown(t)}},i("input",{type:"hidden",name:this.for+"["+this.name+"]",value:this.default}),i("input",{class:"input",type:this._type,id:this.for+"_"+this.name+"_"+this.value,name:this.for+"["+this.name+"]",checked:this.checked,value:this.value,required:this.required,onChange:function(e){e.stopPropagation();e.preventDefault()},onKeyDown:function(t){return e.onKeyDown(t)}}),this.renderCheckbox(),["radio","checkbox"].indexOf(this.type)!==-1&&i("p",null,i("slot",null)),this.renderRadioBlock(),this.renderCheckBlock(),["radio","checkbox"].indexOf(this.type)===-1&&i("stellar-blur",{horizontal:this.blur,class:this.checked?"status active":"status"},i("stellar-tag",{size:"small",color:"theme-base5"},this.selectedCopy)),this.tooltip&&i("stellar-tooltip",{align:"bottom-left"},this.tooltip))};Object.defineProperty(e.prototype,"element",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"stellar-toggle-option{--background:var(--gray0);--hover-background:var(--gray1);--border:var(--gray1);--focus:var(--gray5);--check-bg:var(--white);--check-subject-bg:var(--theme-base5);-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;font-family:inherit;position:relative}stellar-toggle-option[type*=block]{overflow:hidden}stellar-toggle-option *{-webkit-box-sizing:border-box;box-sizing:border-box}stellar-toggle-option+stellar-toggle-option{margin-top:10px}stellar-toggle-option[type=checkbox-block]+stellar-toggle-option[type=checkbox-block],stellar-toggle-option[type=radio-block]+stellar-toggle-option[type=radio-block]{margin-top:0}stellar-toggle-option stellar-asset{--icon-color:#fff}stellar-toggle-option input{display:block;position:relative;overflow:hidden;width:0;height:0;opacity:0}stellar-toggle-option span{color:var(--gray9);font-weight:300}stellar-toggle-option .box{display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex:0 0 2rem;flex:0 0 2rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:all .15s var(--ease) 0s;transition:all .15s var(--ease) 0s;margin:0 7.5px 0 .2px;border:1px solid var(--background);-webkit-box-shadow:0 0 0 1px var(--border);box-shadow:0 0 0 1px var(--border);background:var(--check-bg) 50% 50%/5px 4px no-repeat;width:2rem;height:2rem;border-radius:100%;overflow:hidden}stellar-toggle-option:focus-within .box,stellar-toggle-option:hover .box,stellar-toggle-option[checked] .box{border:1px solid var(--background);-webkit-box-shadow:0 0 0 1px var(--focus),0 0 0 3px rgba(0,0,0,.125);box-shadow:0 0 0 1px var(--focus),0 0 0 3px rgba(0,0,0,.125)}stellar-toggle-option .box .indicator{position:absolute;top:50%;left:50%;height:100%;width:100%;-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:all .15s var(--ease) 0s;transition:all .15s var(--ease) 0s}stellar-toggle-option img{min-width:4rem}stellar-toggle-option .box .indicator *{height:100%;width:100%;display:-ms-flexbox;display:flex}stellar-toggle-option .box.focus{border:1px solid #000;-webkit-box-shadow:0 0 0 2px var(--theme-base3);box-shadow:0 0 0 2px var(--theme-base3)}stellar-toggle-option button{cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:0;outline:0}stellar-toggle-option[type*=checkbox] .box .bg,stellar-toggle-option[type=radio] .box .bg{background:var(--check-subject-bg);color:var(--background)}stellar-toggle-option[type*=checkbox] .box .active,stellar-toggle-option[type=radio] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);background:var(--check-subject-bg);color:var(--background);width:calc(100% - .5rem);height:calc(100% - .5rem);border-radius:100%}stellar-toggle-option[type*=checkbox] .box .active{border-radius:2px;width:calc(100% + 2px);height:calc(100% + 2px)}stellar-toggle-option[type*=checkbox] .box{-ms-flex:0 0 2rem;flex:0 0 2rem;width:2rem;height:2rem;font-size:2rem;color:var(--check-bg);border-radius:.3rem}stellar-toggle-option[type*=checkbox] .box stellar-asset{-webkit-transition:-webkit-transform .35s var(--ease) 0ms;transition:-webkit-transform .35s var(--ease) 0ms;transition:transform .35s var(--ease) 0ms;transition:transform .35s var(--ease) 0ms,-webkit-transform .35s var(--ease) 0ms;-webkit-transform:scale(0);transform:scale(0)}stellar-toggle-option[type=checkbox-block] .box stellar-asset{height:3rem;width:3rem;font-size:3rem;-ms-flex-item-align:center;align-self:center;margin:auto;display:-ms-flexbox;display:flex}stellar-toggle-option .status stellar-tag{display:block}stellar-toggle-option .status{position:absolute;right:0;top:0;-webkit-transform:translate(calc(100% + 1rem));transform:translate(calc(100% + 1rem));-webkit-transition:all 125ms var(--ease) 0ms;transition:all 125ms var(--ease) 0ms}stellar-toggle-option .status.active{-webkit-transform:translate(0);transform:translate(0)}stellar-toggle-option[type=checkbox] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}stellar-toggle-option[type*=checkbox] .box .active stellar-asset{-webkit-transform:scale(1);transform:scale(1)}stellar-toggle-option[type*=block] button{position:relative;border:1px solid var(--border);width:100%;height:100%}stellar-toggle-option[type*=block] button,stellar-toggle-option[type*=block] button .wrapper{-webkit-transition:all .2s var(--ease) 0s;transition:all .2s var(--ease) 0s}stellar-toggle-option[type*=block]:focus,stellar-toggle-option[type*=block]:hover{-webkit-box-shadow:0 2px 6px 0 rgba(72,72,73,.15);box-shadow:0 2px 6px 0 rgba(72,72,73,.15)}stellar-toggle-option[type*=block]:focus-within .wrapper,stellar-toggle-option[type*=block] button:focus .wrapper,stellar-toggle-option[type*=block] button:hover .wrapper{background:var(--hover-background)}stellar-toggle-option[type*=block] button:active{border-color:var(--gray2)}stellar-toggle-option[type*=block] .wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;background:var(--background);padding:1.5rem;width:100%;height:100%}stellar-toggle-option[type*=block] .block-content{display:grid;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-right:10px;grid-template-columns:1fr;grid-gap:1rem}stellar-toggle-option[type*=block] .box{-ms-flex:0 0 3rem;flex:0 0 3rem;-ms-flex-order:-1;order:-1;margin-right:1.5rem;width:3rem;height:3rem;color:var(--theme-base5);background:var(--check-bg)}stellar-toggle-option[type*=block] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}stellar-toggle-option[type*=block][icon] .wrapper{-ms-flex-pack:justify;justify-content:space-between}stellar-toggle-option[type*=block][icon] .block-content{-ms-flex-pack:justify;justify-content:space-between;grid-template-columns:1fr 4fr}stellar-toggle-option[type*=block][icon] .box{-ms-flex-order:3;order:3;margin-right:0;margin-left:1.5rem}stellar-toggle-option[type*=block] copy-wrap{position:relative;z-index:2}stellar-toggle-option[type*=block][inline]{margin:0}stellar-toggle-option[type*=block][inline] button{padding-top:3rem;padding-bottom:3rem}stellar-toggle-option[type*=block][size=small] button{padding-top:2rem;padding-bottom:2rem}stellar-toggle-option[type*=block][checked]{z-index:3;border-color:var(--background)}stellar-toggle-option[type*=block][checked] .box{border:0;-webkit-box-shadow:0 0 0 1px var(--border);box-shadow:0 0 0 1px var(--border);background:var(--background);color:#fff}stellar-toggle-option[type=radio-block] .box .active{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);background:var(--theme-base5);width:calc(100% - .5rem);height:calc(100% - .5rem);border-radius:100%}stellar-toggle-option[type=radio-block][checked] .box .indicator{background:#fff}stellar-toggle-option[inline]{margin-top:0;margin-right:3rem}stellar-toggle-option[single]{margin:0}stellar-toggle-option[inline] button{display:-ms-inline-flexbox;display:inline-flex}stellar-toggle-option[single] .box{margin:0}stellar-toggle-option[disabled]{opacity:.75;-webkit-filter:grayscale(100%);filter:grayscale(100%);pointer-events:none}stellar-toggle-option copy-wrap *{color:var(--black)}stellar-toggle-option[dark]{--background:var(--black-alt);--hover-background:var(--black-alt);--border:var(--gray9)}stellar-toggle-option[dark] copy-wrap *{color:#fff}stellar-toggle-option[dark] .box{background:var(--black)}stellar-toggle-option[dark][type*=checkbox] .box .active stellar-asset{color:var(--black)}"},enumerable:true,configurable:true});return e}());s.injectProps(r,["dark"])}}}));