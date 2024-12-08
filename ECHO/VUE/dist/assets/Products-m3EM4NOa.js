import{s as z}from"./index-BT3ELzeM.js";import{u as H,s as J,a as Q,b as W,c as X,d as Z,e as ee,f as te,h as le}from"./global-BHkMkod-.js";import{C as se,N as oe,L as ae,O as ie,E as ne,D as u,G as g,o as m,c as v,a,J as b,H as V,z as l,A as n,I as D,l as y,K as re}from"./index-D4e0-Mkf.js";import"./index-BF6pbLUq.js";const ue=a("div",null,null,-1),de={class:"card"},ce=a("h5",{class:"m-0"},"Products page for the Store :",-1),pe={class:"flex flex-wrap gap-2 items-center justify-between"},me=a("i",{class:"pi pi-search"},null,-1),ve={class:"flex flex-col gap-6"},fe=a("label",{for:"name",class:"block font-bold mb-3"},"Name",-1),be={key:0,class:"text-red-500"},ye=a("label",{for:"description",class:"block font-bold mb-3"},"Description",-1),_e={key:0,class:"text-red-500"},ke=a("label",{for:"sku",class:"block font-bold mb-3"},"SKU",-1),he={key:0,class:"text-red-500"},ge={class:"grid grid-cols-12 gap-4"},xe={class:"col-span-6"},Pe=a("label",{for:"price",class:"block font-bold mb-3"},"Price",-1),we={class:"flex items-center gap-4"},Ce=a("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),Se={key:0},Ve={class:"flex items-center gap-4"},De=a("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1),Ne={key:0},Me={__name:"Products",setup(Ue){se(()=>{w()});const R=oe(),N=H(),_=ae([]),U=ie(),k=ne(),$=u(),d=u(!1),x=u(!1),f=u(!1),t=u({}),p=u(),P=u({global:{value:null,matchMode:re.CONTAINS}}),r=u(!1);function L(o){if(o)return o.toLocaleString("en-US",{style:"currency",currency:"EUR"})}function T(){t.value={},r.value=!1,d.value=!0}function M(){d.value=!1,r.value=!1}function E(o){t.value={...o},d.value=!0}function q(){$.value.exportCSV()}function B(){f.value=!0}const w=()=>{g.get("/api/stores/"+U.params.dynamic+"/products",{}).then(o=>{_.splice(0),_.push(...o.data.products)}).catch(o=>{alert(o)})},K=()=>{var o,e;r.value=!0,t.value.id?(O(t.value),d.value=!1):(o=t==null?void 0:t.value.name)!=null&&o.trim()&&((e=t==null?void 0:t.value.description)!=null&&e.trim())&&(g.post("/api/stores/"+U.params.dynamic+"/products",{name:t.value.name,description:t.value.description,sku:t.value.sku,price:t.value.price}).then(i=>{t.value.id=i.data.id,_.push(t.value),k.add({severity:"success",summary:"Successful",detail:"Product added",life:3e3})}).catch(i=>{alert(i)}),d.value=!1)};function A(){const o=["id"],e=p.value.map(i=>Object.fromEntries(o.map(h=>[h,i[h]])));g.post("/api/stores/delprods",{Ids:e}).then(i=>{k.add({severity:"success",summary:"Successful",detail:"SelectedProducts Deleted",life:3e3}),w(),k.add({severity:"info",summary:"Successful",detail:"DataBase Refreshed ",life:4e3})}).catch(i=>{alert(i)}),f.value=!1,p.value=null}const O=async o=>{await g.put("/api/stores/"+o.id+"/editproduct",{storeId:o.storeId,name:o.name,description:o.description,sku:o.sku,price:o.price}).then(e=>{k.add({severity:"success",summary:"Successful",detail:"Product Edited ",life:3e3})}).catch(e=>{alert(e)}),F(1e3).then(()=>w())};function F(o){return new Promise(e=>setTimeout(e,o))}return(o,e)=>{const i=W,h=J,j=X,C=Z,G=ee,c=te,Y=Q,I=le,S=z;return m(),v("div",null,[ue,a("div",de,[ce,a("pre",null,`                
                Name:     `+b(V(N).name)+` 
                Location: `+b(V(N).location)+` 
                ID:       `+b(o.$route.params.dynamic)+`  
            `,1),l(h,{class:"mb-6"},{start:n(()=>[l(i,{label:"Stores",icon:"pi pi-backward",severity:"secondary",class:"mr-2",onClick:e[0]||(e[0]=s=>V(R).back())}),l(i,{label:"New",icon:"pi pi-plus",severity:"secondary",class:"mr-2",onClick:T}),l(i,{label:"Delete",icon:"pi pi-trash",severity:"secondary",onClick:B,disabled:!p.value||!p.value.length},null,8,["disabled"])]),end:n(()=>[l(i,{label:"Export",icon:"pi pi-upload",severity:"secondary",onClick:e[1]||(e[1]=s=>q(s))})]),_:1}),l(Y,{ref_key:"dt",ref:$,selection:p.value,"onUpdate:selection":e[3]||(e[3]=s=>p.value=s),value:_,dataKey:"id",paginator:!0,rows:10,filters:P.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},{header:n(()=>[a("div",pe,[l(G,null,{default:n(()=>[l(j,null,{default:n(()=>[me]),_:1}),l(C,{modelValue:P.value.global.value,"onUpdate:modelValue":e[2]||(e[2]=s=>P.value.global.value=s),placeholder:"Search..."},null,8,["modelValue"])]),_:1})])]),default:n(()=>[l(c,{selectionMode:"multiple",style:{width:"2rem"},exportable:!1}),l(c,{field:"id",header:"Product ID",style:{"min-width":"16rem"}}),l(c,{field:"name",header:"Name",sortable:"",style:{"min-width":"6rem"}}),l(c,{field:"description",header:"Description",sortable:"",style:{"min-width":"6rem"}}),l(c,{field:"sku",header:"SKU",sortable:"",style:{"min-width":"6rem"}}),l(c,{field:"price",header:"Price",sortable:"",style:{"min-width":"6rem"}},{body:n(s=>[D(b(L(s.data.price)),1)]),_:1}),l(c,{exportable:!1,style:{"min-width":"12rem"}},{body:n(s=>[l(i,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:$e=>E(s.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","filters"])]),l(S,{visible:d.value,"onUpdate:visible":e[8]||(e[8]=s=>d.value=s),style:{width:"450px"},header:"Product Details",modal:!0},{footer:n(()=>[l(i,{label:"Cancel",icon:"pi pi-times",text:"",onClick:M}),l(i,{label:"Save",icon:"pi pi-check",onClick:K})]),default:n(()=>[a("div",ve,[a("div",null,[fe,l(C,{id:"name",modelValue:t.value.name,"onUpdate:modelValue":e[4]||(e[4]=s=>t.value.name=s),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:r.value&&!t.value.name,fluid:""},null,8,["modelValue","invalid"]),r.value&&!t.value.name?(m(),v("small",be,"Name is required.")):y("",!0)]),a("div",null,[ye,l(C,{id:"description",modelValue:t.value.description,"onUpdate:modelValue":e[5]||(e[5]=s=>t.value.description=s),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:r.value&&!t.value.name,fluid:""},null,8,["modelValue","invalid"]),r.value&&!t.value.description?(m(),v("small",_e,"Description is required.")):y("",!0)]),a("div",null,[ke,l(I,{id:"sku",modelValue:t.value.sku,"onUpdate:modelValue":e[6]||(e[6]=s=>t.value.sku=s),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:r.value&&!t.value.sku,min:0,fluid:""},null,8,["modelValue","invalid"]),r.value&&!t.value.sku?(m(),v("small",he,"SKU is required.")):y("",!0)]),a("div",ge,[a("div",xe,[Pe,l(I,{id:"price",modelValue:t.value.price,"onUpdate:modelValue":e[7]||(e[7]=s=>t.value.price=s),mode:"currency",currency:"EUR",locale:"en-US",min:0,fluid:""},null,8,["modelValue"])])])])]),_:1},8,["visible"]),l(S,{visible:x.value,"onUpdate:visible":e[10]||(e[10]=s=>x.value=s),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[l(i,{label:"No",icon:"pi pi-times",text:"",onClick:e[9]||(e[9]=s=>x.value=!1)}),l(i,{label:"Yes",icon:"pi pi-check",onClick:o.deleteProduct},null,8,["onClick"])]),default:n(()=>[a("div",we,[Ce,t.value?(m(),v("span",Se,[D("Are you sure you want to delete "),a("b",null,b(t.value.name),1),D("?")])):y("",!0)])]),_:1},8,["visible"]),l(S,{visible:f.value,"onUpdate:visible":e[12]||(e[12]=s=>f.value=s),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[l(i,{label:"No",icon:"pi pi-times",text:"",onClick:e[11]||(e[11]=s=>f.value=!1)}),l(i,{label:"Yes",icon:"pi pi-check",text:"",onClick:A})]),default:n(()=>[a("div",Ve,[De,t.value?(m(),v("span",Ne,"Are you sure you want to delete the selected products?")):y("",!0)])]),_:1},8,["visible"])])}}};export{Me as default};
