/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic;import{b as t}from"./chunk-7f93bab0.js";class s{constructor(){this.childOpts=[],this.selectId=`ion-sel-${i++}`,this.isExpanded=!1,this.keyFocus=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.multiple=!1,this.interface="alert",this.interfaceOptions={}}disabledChanged(){this.emitStyle()}valueChanged(){if(void 0===this.value)this.childOpts.filter(e=>e.selected).forEach(e=>{e.selected=!1}),this.text="";else{let e=!1;const t=[];this.childOpts.forEach(s=>{Array.isArray(this.value)&&this.value.includes(s.value)||s.value===this.value?(s.selected||!this.multiple&&e?!this.multiple&&e&&s.selected&&(s.selected=!1):s.selected=!0,e=!0):s.selected&&(s.selected=!1),s.selected&&t.push(s.textContent||"")}),this.text=t.join(", ")}this.ionChange.emit({value:this.value,text:this.text}),this.emitStyle()}optLoad(e){const t=e.target;this.childOpts=Array.from(this.el.querySelectorAll("ion-select-option")),null!=this.value&&Array.isArray(this.value)&&this.value.includes(t.value)||t.value===this.value?t.selected=!0:Array.isArray(this.value)&&this.multiple&&t.selected?this.value.push(t.value):void 0===this.value&&t.selected?this.value=t.value:t.selected&&(t.selected=!1)}optUnload(e){const t=this.childOpts.indexOf(e.target);t>-1&&this.childOpts.splice(t,1)}onSelect(e){this.childOpts.forEach(t=>{t===e.target?this.value=t.value:t.selected=!1})}componentWillLoad(){this.value||(this.value=this.multiple?[]:void 0),this.name=this.name||this.selectId}componentDidLoad(){this.ionStyle=t(this.ionStyle);const e=this.getLabel();if(e&&(this.labelId=e.id=this.name+"-lbl"),this.multiple){const e=this.childOpts.filter(e=>e.selected);this.value.length=0,e.forEach(e=>{this.value.push(e.value)}),this.text=e.map(e=>e.textContent).join(", ")}else{const e=this.childOpts.find(e=>e.selected);e&&(this.value=e.value,this.text=e.textContent||"")}this.emitStyle()}getLabel(){const e=this.el.closest("ion-item");return e?e.querySelector("ion-label"):null}open(e){let t=this.interface;return"action-sheet"!==t&&"popover"!==t||!this.multiple||(console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.'),t="alert"),"popover"!==t||e||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),t="alert"),"popover"===t?this.openPopover(e):"action-sheet"===t?this.openActionSheet():this.openAlert()}async openPopover(e){const t=this.interfaceOptions,s=Object.assign({},t,{component:"ion-select-popover",componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:this.value,options:this.childOpts.map(e=>({text:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled,handler:()=>{this.value=e.value,this.close()}}))},cssClass:["select-popover",t.cssClass],ev:e}),i=this.overlay=await this.popoverCtrl.create(s);return await i.present(),this.isExpanded=!0,i}async openActionSheet(){const e=this.childOpts.map(e=>({role:e.selected?"selected":"",text:e.textContent,handler:()=>{this.value=e.value}}));e.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}});const t=this.interfaceOptions,s=Object.assign({},t,{buttons:e,cssClass:["select-action-sheet",t.cssClass]}),i=this.overlay=await this.actionSheetCtrl.create(s);return await i.present(),this.isExpanded=!0,i}async openAlert(){const e=this.getLabel(),t=e?e.textContent:null,s=this.interfaceOptions,i=Object.assign({},s,{header:s.header?s.header:t,inputs:this.childOpts.map(e=>({type:this.multiple?"checkbox":"radio",label:e.textContent,value:e.value,checked:e.selected,disabled:e.disabled})),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:e=>{this.value=e}}],cssClass:["select-alert",s.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),l=this.overlay=await this.alertCtrl.create(i);return await l.present(),this.isExpanded=!0,l}close(){if(!this.overlay)return Promise.resolve();const e=this.overlay;return this.overlay=void 0,this.isExpanded=!1,e.dismiss()}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hasValue(){return Array.isArray(this.value)?this.value.length>0:null!==this.value&&void 0!==this.value&&""!==this.value}emitStyle(){this.ionStyle.emit({select:!0,"select-disabled":this.disabled,"input-has-value":this.hasValue()})}hostData(){return{class:{"select-disabled":this.disabled,"select-key":this.keyFocus}}}render(){let t=!1,s=this.selectedText||this.text;return!s&&this.placeholder&&(s=this.placeholder,t=!0),[e("div",{role:"textbox","aria-multiline":"false",class:{"select-text":!0,"select-placeholder":t}},s),e("div",{class:"select-icon",role:"presentation"},e("div",{class:"select-icon-inner"})),e("button",{type:"button",role:"combobox","aria-haspopup":"dialog","aria-expanded":this.isExpanded,"aria-labelledby":this.labelId,"aria-disabled":!!this.disabled&&"true",onClick:this.open.bind(this),onKeyUp:this.onKeyUp.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),class:"select-cover"},e("slot",null),"md"===this.mode&&e("ion-ripple-effect",{tapClick:!0})),e("input",{type:"hidden",name:this.name,value:function(e){if(null!=e)return"string"==typeof e?e:e.join(",")}(this.value)})]}static get is(){return"ion-select"}static get host(){return{theme:"select"}}static get properties(){return{actionSheetCtrl:{connect:"ion-action-sheet-controller"},alertCtrl:{connect:"ion-alert-controller"},cancelText:{type:String,attr:"cancel-text"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},interface:{type:String,attr:"interface"},interfaceOptions:{type:"Any",attr:"interface-options"},isExpanded:{state:!0},keyFocus:{state:!0},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name",mutable:!0},okText:{type:String,attr:"ok-text"},placeholder:{type:String,attr:"placeholder"},popoverCtrl:{connect:"ion-popover-controller"},selectedText:{type:String,attr:"selected-text"},text:{state:!0},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelectOptionDidLoad",method:"optLoad"},{name:"ionSelectOptionDidUnload",method:"optUnload"},{name:"ionSelect",method:"onSelect"}]}static get style(){return"ion-select{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}.item .select{max-width:45%}.select-cover{left:0;top:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer}.select-text{overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap}.item-multiple-inputs ion-select{position:relative}.item-select-disabled ion-label,.select-disabled{opacity:.4;pointer-events:none}.select-popover ion-list{margin:-1px 0}.select-option{display:none}.select button:focus{outline:0}.select-key button{border:2px solid #5e9ed6}.item-label-floating .select,.item-label-stacked .select{max-width:100%}.select-ios{padding:11px 8px 11px 16px;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif;color:var(--ion-text-ios-color,var(--ion-text-color,#000))}.select-ios .select-placeholder{color:var(--ion-text-ios-color-step-650,var(--ion-text-color-step-650,#a6a6a6))}.select-ios .select-icon{position:relative;width:12px;height:18px}.select-ios .select-icon .select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:var(--ion-text-ios-color-step-650,var(--ion-text-color-step-650,#a6a6a6));pointer-events:none}.item-label-floating .select-ios,.item-label-stacked .select-ios{padding-left:0;padding-top:8px;padding-bottom:8px}"}static get styleMode(){return"ios"}}let i=0;class l{constructor(){this.inputId=`ion-selopt-${a++}`,this.disabled=!1,this.selected=!1}componentWillLoad(){void 0===this.value&&(this.value=this.el.textContent||"")}componentDidLoad(){this.ionSelectOptionDidLoad.emit()}componentDidUnload(){this.ionSelectOptionDidUnload.emit()}hostData(){return{role:"option",id:this.inputId}}static get is(){return"ion-select-option"}static get host(){return{theme:"select-option"}}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},selected:{type:Boolean,attr:"selected"},value:{type:String,attr:"value",mutable:!0}}}static get events(){return[{name:"ionSelectOptionDidLoad",method:"ionSelectOptionDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelectOptionDidUnload",method:"ionSelectOptionDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}}let a=0;class n{constructor(){this.options=[]}onSelect(e){const t=this.options.find(t=>t.value===e.target.value);t&&t.handler&&t.handler()}render(){return e("ion-list",{"no-lines":"md"===this.mode},this.header?e("ion-list-header",null,this.header):null,this.subHeader||this.message?e("ion-item",{"text-wrap":!0},e("ion-label",null,this.subHeader?e("h3",null,this.subHeader):null,this.message?e("p",null,this.message):null)):null,e("ion-radio-group",null,this.options.map(t=>e("ion-item",null,e("ion-label",null,t.text),e("ion-radio",{checked:t.checked,value:t.value,disabled:t.disabled})))))}static get is(){return"ion-select-popover"}static get host(){return{theme:"select-popover"}}static get properties(){return{header:{type:String,attr:"header"},message:{type:String,attr:"message"},options:{type:"Any",attr:"options"},subHeader:{type:String,attr:"sub-header"}}}static get listeners(){return[{name:"ionSelect",method:"onSelect"}]}}export{s as IonSelect,l as IonSelectOption,n as IonSelectPopover};