import{s as Q}from"./index-BT3ELzeM.js";import{u as Y,s as W,a as X,b as Z,c as ee,d as te,e as ae,f as oe,g as le}from"./global-BHkMkod-.js";import{B as ne,f as ie,o as w,c as k,a as u,m as _,E as se,D as f,C as ce,G as v,y as re,z as l,A as d,H as N,l as x,I as V,J as de,K as B}from"./index-D4e0-Mkf.js";import"./index-BF6pbLUq.js";var ue=function(n){var e=n.dt;return`
.p-toggleswitch {
    display: inline-block;
    width: `.concat(e("toggleswitch.width"),`;
    height: `).concat(e("toggleswitch.height"),`;
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: `).concat(e("toggleswitch.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("toggleswitch.border.color"),`;
    background: `).concat(e("toggleswitch.background"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", color ").concat(e("toggleswitch.transition.duration"),", border-color ").concat(e("toggleswitch.transition.duration"),", outline-color ").concat(e("toggleswitch.transition.duration"),", box-shadow ").concat(e("toggleswitch.transition.duration"),`;
    border-radius: `).concat(e("toggleswitch.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("toggleswitch.shadow"),`;
}

.p-toggleswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
    background: `).concat(e("toggleswitch.handle.background"),`;
    width: `).concat(e("toggleswitch.handle.size"),`;
    height: `).concat(e("toggleswitch.handle.size"),`;
    left: `).concat(e("toggleswitch.gap"),`;
    margin-top: calc(-1 * calc(`).concat(e("toggleswitch.handle.size"),` / 2));
    border-radius: `).concat(e("toggleswitch.handle.border.radius"),`;
    transition: background `).concat(e("toggleswitch.transition.duration"),", left ").concat(e("toggleswitch.slide.duration"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.background"),`;
    border-color: `).concat(e("toggleswitch.checked.border.color"),`;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.checked.background"),`;
    left: calc(`).concat(e("toggleswitch.width")," - calc(").concat(e("toggleswitch.handle.size")," + ").concat(e("toggleswitch.gap"),`));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.hover.background"),`;
    border-color: `).concat(e("toggleswitch.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.hover.background"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.checked.hover.background"),`;
    border-color: `).concat(e("toggleswitch.checked.hover.border.color"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.checked.hover.background"),`;
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: `).concat(e("toggleswitch.focus.ring.shadow"),`;
    outline: `).concat(e("toggleswitch.focus.ring.width")," ").concat(e("toggleswitch.focus.ring.style")," ").concat(e("toggleswitch.focus.ring.color"),`;
    outline-offset: `).concat(e("toggleswitch.focus.ring.offset"),`;
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: `).concat(e("toggleswitch.invalid.border.color"),`;
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: `).concat(e("toggleswitch.disabled.background"),`;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider:before {
    background: `).concat(e("toggleswitch.handle.disabled.background"),`;
}
`)},ge={root:{position:"relative"}},pe={root:function(n){var e=n.instance,m=n.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":e.checked,"p-disabled":m.disabled,"p-invalid":m.invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider"},he=ne.extend({name:"toggleswitch",theme:ue,classes:pe,inlineStyles:ge}),me={name:"BaseToggleSwitch",extends:ie,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:he,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},L={name:"ToggleSwitch",extends:me,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(n){var e=n==="root"?this.ptmi:this.ptm;return e(n,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(n){if(!this.disabled&&!this.readonly){var e=this.checked?this.falseValue:this.trueValue;this.$emit("update:modelValue",e),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){this.$emit("blur",n)}},computed:{checked:function(){return this.modelValue===this.trueValue}}},be=["data-p-checked","data-p-disabled"],fe=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function ve(i,n,e,m,g,s){return w(),k("div",_({class:i.cx("root"),style:i.sx("root")},s.getPTOptions("root"),{"data-p-checked":s.checked,"data-p-disabled":i.disabled}),[u("input",_({id:i.inputId,type:"checkbox",role:"switch",class:[i.cx("input"),i.inputClass],style:i.inputStyle,checked:s.checked,tabindex:i.tabindex,disabled:i.disabled,readonly:i.readonly,"aria-checked":s.checked,"aria-labelledby":i.ariaLabelledby,"aria-label":i.ariaLabel,"aria-invalid":i.invalid||void 0,onFocus:n[0]||(n[0]=function(){return s.onFocus&&s.onFocus.apply(s,arguments)}),onBlur:n[1]||(n[1]=function(){return s.onBlur&&s.onBlur.apply(s,arguments)}),onChange:n[2]||(n[2]=function(){return s.onChange&&s.onChange.apply(s,arguments)})},s.getPTOptions("input")),null,16,fe),u("span",_({class:i.cx("slider")},s.getPTOptions("slider")),null,16)],16,be)}L.render=ve;const we={class:"card"},ke={class:"flex flex-wrap gap-2 items-center justify-between"},ye=u("div",{class:"font-semibold text-xl mb-4"},"Plaza Stores ADMIN ",-1),Se=u("i",{class:"pi pi-search"},null,-1),Ce={class:"flex flex-col gap-6"},_e=u("label",{for:"name",class:"block font-bold mb-3"},"Name",-1),xe={key:0,class:"text-red-500"},Ve=u("label",{for:"location",class:"block font-bold mb-3"},"Location",-1),Pe={key:0,class:"text-red-500"},Te={class:"flex items-center gap-4"},Ne=u("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),Be={key:0},Le=u("br",null,null,-1),Fe={__name:"M_admin",setup(i){const n=Y(),e=se(),m=f(),g=f(!1),s=f(!1),o=f({}),y=f({global:{value:null,matchMode:B.CONTAINS},participating:{value:null,matchMode:B.EQUALS}}),p=f(!1);ce(()=>{S()});function $(){o.value={},p.value=!1,g.value=!0}function D(){g.value=!1,p.value=!1}function I(){m.value.exportCSV()}const O=()=>{var c,a;p.value=!0,o.value.id?(z(o.value),g.value=!1):(c=o==null?void 0:o.value.name)!=null&&c.trim()&&((a=o==null?void 0:o.value.location)!=null&&a.trim())&&(v.post("/api/stores",{name:o.value.name,location:o.value.location}).then(r=>{o.value.id=r.data.id,o.value.participating=!1,n.sstores.push(o.value),e.add({severity:"success",summary:"Successful",detail:"Store Created",life:3e3})}).catch(r=>{alert(r)}),g.value=!1)},F=(c,a)=>{a===!0?v.delete("/api/stores/"+c+"/participating",{params:{}}).then(r=>{console.log(r.data),e.add({severity:"success",summary:"Successful",detail:"OFF Particapation",life:3e3})}).catch(r=>{alert(r)}):v.put("/api/stores/"+c+"/participating",{params:{}}).then(r=>{console.log(r.data),e.add({severity:"success",summary:"Successful",detail:"ON Particapation",life:3e3})}).catch(r=>{alert(r)})},S=async()=>{await v.get("/api/stores",{}).then(c=>{n.sstores.splice(0),n.sstores.push(...c.data.stores)}).catch(c=>{alert(c)})};function U(c){o.value={...c},g.value=!0}function A(c){o.value={...c},s.value=!0}const z=async c=>{await v.put("/api/stores/"+c.id+"/edit",{name:c.name,location:c.location}).then(a=>{e.add({severity:"success",summary:"Successful",detail:"Store Renamed",life:3e3})}).catch(a=>{alert(a)}),M(1e3).then(()=>S())};function M(c){return new Promise(a=>setTimeout(a,c))}const R=c=>{s.value=!0,v.delete("/api/stores/delst/"+c,{}).then(a=>{e.add({severity:"warn",summary:"Successful",detail:"Store and all its product deleted from Data Base",life:4e3}),S()}).catch(a=>{alert(a)}),s.value=!1};return(c,a)=>{const r=Z,E=W,q=ee,C=te,j=ae,b=oe,G=L,H=le,K=re("RouterLink"),J=X,P=Q;return w(),k("div",null,[u("div",we,[l(E,{class:"mb-6"},{start:d(()=>[l(r,{label:"New",icon:"pi pi-plus",severity:"secondary",class:"mr-2",onClick:$})]),end:d(()=>[l(r,{label:"Export",icon:"pi pi-upload",severity:"secondary",onClick:a[0]||(a[0]=t=>I(t))})]),_:1}),l(J,{ref_key:"dt",ref:m,value:N(n).sstores,dataKey:"id",paginator:!0,rows:10,filterDisplay:"menu",filters:y.value,"onUpdate:filters":a[2]||(a[2]=t=>y.value=t),paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},{header:d(()=>[u("div",ke,[ye,l(j,null,{default:d(()=>[l(q,null,{default:d(()=>[Se]),_:1}),l(C,{modelValue:y.value.global.value,"onUpdate:modelValue":a[1]||(a[1]=t=>y.value.global.value=t),placeholder:"Search..."},null,8,["modelValue"])]),_:1})])]),default:d(()=>[l(b,{field:"id",header:"Store ID",sortable:"",style:{"min-width":"8rem"}}),l(b,{field:"name",header:"Name",sortable:"",style:{"min-width":"8rem"}}),l(b,{field:"location",header:"Location",sortable:"",style:{"min-width":"8rem"}}),l(b,{field:"participating",header:"Participating",dataType:"boolean",style:{"min-width":"4rem"}},{body:d(t=>[l(G,{class:"mr-2",onClick:h=>F(t.data.id,t.data.participating),modelValue:t.data.participating,"onUpdate:modelValue":h=>t.data.participating=h},null,8,["onClick","modelValue","onUpdate:modelValue"])]),filter:d(({filterModel:t,filterCallback:h})=>[l(H,{modelValue:t.value,"onUpdate:modelValue":T=>t.value=T,indeterminate:t.value===null,binary:"",onChange:T=>h()},null,8,["modelValue","onUpdate:modelValue","indeterminate","onChange"])]),_:1}),l(b,{header:"Add Products",style:{"min-width":"8rem"}},{body:d(t=>[l(K,{to:{name:"StoreProducts",params:{dynamic:t.data.id}}},{default:d(()=>[l(r,{label:"Products",outlined:"",rounded:"",class:"mr-2",onClick:h=>N(n).StoreINFO(t.data.id,t.data.name,t.data.location)},null,8,["onClick"])]),_:2},1032,["to"])]),_:1}),l(b,{exportable:!1,style:{"min-width":"12rem"}},{body:d(t=>[l(r,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:h=>U(t.data)},null,8,["onClick"]),l(r,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:h=>A(t.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters"])]),l(P,{visible:g.value,"onUpdate:visible":a[5]||(a[5]=t=>g.value=t),style:{width:"450px"},header:"Add Store or Edit Store ",modal:!0},{footer:d(()=>[l(r,{label:"Cancel",icon:"pi pi-times",text:"",onClick:D}),l(r,{label:"Save",icon:"pi pi-check",onClick:O})]),default:d(()=>[u("div",Ce,[u("div",null,[_e,l(C,{id:"name",modelValue:o.value.name,"onUpdate:modelValue":a[3]||(a[3]=t=>o.value.name=t),modelModifiers:{trim:!0},required:"true",invalid:p.value&&!o.value.name,fluid:""},null,8,["modelValue","invalid"]),p.value&&!o.value.name?(w(),k("small",xe,"Name is required.")):x("",!0)]),u("div",null,[Ve,l(C,{id:"location",modelValue:o.value.location,"onUpdate:modelValue":a[4]||(a[4]=t=>o.value.location=t),modelModifiers:{trim:!0},required:"true",invalid:p.value&&!o.value.location,fluid:""},null,8,["modelValue","invalid"]),p.value&&!o.value.location?(w(),k("small",Pe,"Name is required.")):x("",!0)])])]),_:1},8,["visible"]),l(P,{visible:s.value,"onUpdate:visible":a[8]||(a[8]=t=>s.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:d(()=>[l(r,{label:"No",icon:"pi pi-times",text:"",onClick:a[6]||(a[6]=t=>s.value=!1)}),l(r,{label:"Yes",icon:"pi pi-check",onClick:a[7]||(a[7]=t=>R(o.value.id))})]),default:d(()=>[u("div",Te,[Ne,o.value?(w(),k("span",Be,[V("Hey ya' sure delete yo' ? "),u("b",null,de(o.value.name),1),V("? "),Le,V(" All it's products will be deleted from the DataBase")])):x("",!0)])]),_:1},8,["visible"])])}}};export{Fe as default};
