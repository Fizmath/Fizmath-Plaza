import{s as T}from"./index-BT3ELzeM.js";import{u as U,s as M,a as P,b as F,c as j,d as z,e as G,f as K}from"./global-BHkMkod-.js";import{s as L}from"./index-DS5S4VkY.js";import{D as n,E as q,L as H,M as J,G as x,o as k,c as Q,a as o,z as e,A as s,F as Y,I as b,J as W,H as y,j as X,l as Z,K as ee}from"./index-D4e0-Mkf.js";import"./index-BF6pbLUq.js";const te={class:"card"},ae=o("div",{class:"font-semibold text-xl mb-4"},"Plaza ORDERS Admin ",-1),se={class:"flex flex-wrap justify-start gap-4"},le=o("i",{class:"pi pi-search"},null,-1),re={class:"p-4"},oe=o("div",{class:"flex items-center gap-4"},[o("i",{class:"pi pi-exclamation-triangle !text-3xl"}),o("span",null,[b("Are you sure you want to delete the "),o("b",null,"selected Orders"),b(),o("br"),b(" from the DataBase ?")])],-1),me={__name:"O_admin",setup(de){const S=n(),u=U(),p=q(),_=H([]),g=n(!0),C=n([]),c=n(!1),i=n(),m=n({global:{value:null,matchMode:ee.CONTAINS}});J(()=>{v()});function O(){c.value=!0}function $(d){return d.toLocaleString("en-US",{style:"currency",currency:"EUR"})}const v=d=>{x.post("api/ordering/all",{eventSourcing:d}).then(a=>{_.splice(0),_.push(...a.data.orders)}).catch(a=>{alert(a)}),g.value=!d,p.add({severity:"success",summary:"Successful",detail:"Orders Retrieved",life:3e3})};function R(){S.value.exportCSV()}const I=d=>{x.delete("/api/ordering/"+d,{}).then(a=>{}).catch(a=>{alert(a)}),p.add({severity:"success",summary:"Successful",detail:"Orders Cancelled",life:3e3})};function N(){const d=["orderid"],a=i.value.map(r=>Object.fromEntries(d.map(f=>[f,r[f]])));x.post("/api/ordering/removebyd",{Ids:a}).then(r=>{p.add({severity:"success",summary:"Successful",detail:"Selected Orders Deleted",life:3e3}),v(),p.add({severity:"info",summary:"Successful",detail:"DataBase Refreshed ",life:4e3})}).catch(r=>{alert(r)}),c.value=!1,i.value=null}return(d,a)=>{const r=F,f=M,V=j,B=z,A=G,l=K,h=L,w=P,E=T;return k(),Q(Y,null,[o("div",te,[ae,e(f,{class:"mb-6"},{start:s(()=>[e(r,{label:"Refresh",icon:"pi pi-database",severity:"secondary",class:"mr-2",onClick:a[0]||(a[0]=t=>v(!1))}),e(r,{label:"Event Sourcing",icon:"pi pi-database",severity:"secondary",class:"mr-2",onClick:a[1]||(a[1]=t=>v(!0))}),e(r,{label:"Delete",icon:"pi pi-trash",severity:"secondary",onClick:O,disabled:!i.value||!i.value.length},null,8,["disabled"])]),end:s(()=>[e(r,{label:"Export",icon:"pi pi-upload",severity:"secondary",onClick:a[2]||(a[2]=t=>R(t))})]),_:1}),e(w,{ref_key:"dt",ref:S,selection:i.value,"onUpdate:selection":a[4]||(a[4]=t=>i.value=t),expandedRows:C.value,"onUpdate:expandedRows":a[5]||(a[5]=t=>C.value=t),value:_,dataKey:"createdAt",filters:m.value,"onUpdate:filters":a[6]||(a[6]=t=>m.value=t),tableStyle:"min-width: 60rem"},{header:s(()=>[o("div",se,[e(A,null,{default:s(()=>[e(V,null,{default:s(()=>[le]),_:1}),e(B,{modelValue:m.value.global.value,"onUpdate:modelValue":a[3]||(a[3]=t=>m.value.global.value=t),placeholder:"Search...",style:{width:"400px"}},null,8,["modelValue"])]),_:1})])]),expansion:s(t=>[o("div",re,[e(w,{value:t.data.items},{default:s(()=>[e(l,{field:"storeName",header:"storename"}),e(l,{field:"productName",header:"Product"}),e(l,{field:"quantity",header:"Quantity"}),e(l,{field:"price",header:"Price",sortable:""},{body:s(D=>[b(W($(D.data.price)),1)]),_:2},1024)]),_:2},1032,["value"])])]),default:s(()=>[e(l,{selectionMode:"multiple",style:{width:"2rem"},exportable:!1}),e(l,{expander:"",style:{width:"5rem"}}),e(l,{field:"orderid",header:"Order ID"}),e(l,{field:"createdAt",header:"Date Created",sortable:""}),e(l,{field:"statusP",header:"Payment Status"},{body:s(t=>[e(h,{value:t.data.statusP,severity:y(u).OrderSeverity(t.data.statusP)},null,8,["value","severity"])]),_:1}),e(l,{field:"statusS",header:"Delivery Status"},{body:s(t=>[e(h,{value:t.data.statusS,severity:y(u).OrderSeverity(t.data.statusS)},null,8,["value","severity"])]),_:1}),e(l,{field:"statuss",header:"Order Status"},{body:s(t=>[e(h,{value:t.data.status,severity:y(u).OrderSeverity(t.data.status)},null,8,["value","severity"])]),_:1}),e(l,{style:{"min-width":"4rem"}},{body:s(t=>[g.value?(k(),X(r,{key:0,label:"Cancel",icon:"pi pi-times",disabled:y(u).AllowCancel(t.data.status),outlined:"",rounded:"",severity:"danger",onClick:D=>I(t.data.orderid)},null,8,["disabled","onClick"])):Z("",!0)]),_:1}),e(l,{field:"customerId",header:"Customer ID"})]),_:1},8,["selection","expandedRows","value","filters"])]),e(E,{visible:c.value,"onUpdate:visible":a[8]||(a[8]=t=>c.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:s(()=>[e(r,{label:"No",icon:"pi pi-times",text:"",onClick:a[7]||(a[7]=t=>c.value=!1)}),e(r,{label:"Yes",icon:"pi pi-check",text:"",onClick:N})]),default:s(()=>[oe]),_:1},8,["visible"])],64)}}};export{me as default};
