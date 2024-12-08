import{B as nt,s as it,o,c as d,m as s,a as b,u as z,Z as V,b as at,d as Z,e as rt,f as B,g as f,h as q,i as C,R as j,r as T,w as y,j as p,k as v,l as h,F as E,n as K,p as R,q as ot,t as lt,v as st,U as $,x as ct,y as A,z as F,A as O,T as ut,C as dt,D as k}from"./index-D4e0-Mkf.js";import{F as ht,s as W,a as mt}from"./index-BF6pbLUq.js";import{s as X}from"./index-D2xRBgEF.js";var pt=function(t){var n=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(n("galleria.border.width"),`;
    border-color: `).concat(n("galleria.border.color"),`;
    border-radius: `).concat(n("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(n("galleria.nav.button.background"),`;
    color: `).concat(n("galleria.nav.button.color"),`;
    width: `).concat(n("galleria.nav.button.size"),`;
    height: `).concat(n("galleria.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(n("galleria.nav.button.size"),") / 2) ").concat(n("galleria.nav.button.gutter")," 0 ").concat(n("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(n("galleria.nav.button.hover.background"),`;
    color: `).concat(n("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(n("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.nav.button.focus.ring.width")," ").concat(n("galleria.nav.button.focus.ring.style")," ").concat(n("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(n("galleria.nav.icon.size"),`;
    width: `).concat(n("galleria.nav.icon.size"),`;
    height: `).concat(n("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(n("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(n("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(n("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(n("galleria.caption.background"),`;
    color: `).concat(n("galleria.caption.color"),`;
    padding: `).concat(n("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(n("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(n("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(n("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(n("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(n("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(n("galleria.thumbnails.content.background"),`;
    padding: `).concat(n("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("galleria.indicator.list.padding"),`;
    gap: `).concat(n("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(n("galleria.indicator.button.background"),`;
    width: `).concat(n("galleria.indicator.button.width"),`;
    height: `).concat(n("galleria.indicator.button.height"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(n("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.indicator.button.focus.ring.width")," ").concat(n("galleria.indicator.button.focus.ring.style")," ").concat(n("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(n("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(n("galleria.close.button.gutter"),`;
    background: `).concat(n("galleria.close.button.background"),`;
    color: `).concat(n("galleria.close.button.color"),`;
    width: `).concat(n("galleria.close.button.size"),`;
    height: `).concat(n("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(n("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(n("galleria.close.button.icon.size"),`;
    width: `).concat(n("galleria.close.button.icon.size"),`;
    height: `).concat(n("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(n("galleria.close.button.hover.background"),`;
    color: `).concat(n("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(n("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.close.button.focus.ring.width")," ").concat(n("galleria.close.button.focus.ring.style")," ").concat(n("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},vt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var n=t.instance,i=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},i,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,i=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,i=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===i,"p-galleria-thumbnail-item-active":n.isItemActive(i),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},bt=nt.extend({name:"galleria",theme:pt,classes:vt}),Y={name:"ChevronUpIcon",extends:it},ft=b("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1),gt=[ft];function yt(e,t,n,i,r,a){return o(),d("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),gt,16)}Y.render=yt;var It={name:"BaseGalleria",extends:B,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:bt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function I(e){return kt(e)||xt(e)||St(e)||wt()}function wt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(e,t){if(e){if(typeof e=="string")return L(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function xt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kt(e){if(Array.isArray(e))return L(e)}function L(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var J={name:"GalleriaItem",hostName:"Galleria",extends:B,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(a){return q(a,"data-p-active")===!0}),i=C(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(a){return a===i.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=C(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=I(f(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:X,ChevronRightIcon:W},directives:{ripple:j}},Pt=["disabled"],Ct=["id","aria-label","aria-roledescription"],At=["disabled"],Ot=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Bt=["tabindex"];function Tt(e,t,n,i,r,a){var m=T("ripple");return o(),d("div",s({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[b("div",s({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?y((o(),d("button",s({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(c){return a.navBackward(c)}),disabled:a.isNavBackwardDisabled()},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),p(v(n.templates.previousitemicon||"ChevronLeftIcon"),s({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,Pt)),[[m]]):h("",!0),b("div",s({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},e.ptm("item")),[n.templates.item?(o(),p(v(n.templates.item),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16,Ct),n.showItemNavigators?y((o(),d("button",s({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(c){return a.navForward(c)}),disabled:a.isNavForwardDisabled()},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),p(v(n.templates.nextitemicon||"ChevronRightIcon"),s({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,At)),[[m]]):h("",!0),n.templates.caption?(o(),d("div",s({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(o(),p(v(n.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):h("",!0)],16)):h("",!0)],16),n.showIndicators?(o(),d("ul",s({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(o(!0),d(E,null,K(n.value,function(c,l){return o(),d("li",s({key:"p-galleria-indicator-".concat(l),class:e.cx("indicator",{index:l}),"aria-label":a.ariaPageLabel(l+1),"aria-selected":n.activeIndex===l,"aria-controls":n.id+"_item_"+l,onClick:function(g){return a.onIndicatorClick(l)},onMouseenter:function(g){return a.onIndicatorMouseEnter(l)},onKeydown:function(g){return a.onIndicatorKeyDown(g,l)},ref_for:!0},e.ptm("indicator",a.getIndicatorPTOptions(l)),{"data-p-active":a.isIndicatorItemActive(l)}),[n.templates.indicator?h("",!0):(o(),d("button",s({key:0,type:"button",tabindex:n.activeIndex===l?"0":"-1",class:e.cx("indicatorButton"),ref_for:!0},e.ptm("indicatorButton",a.getIndicatorPTOptions(l))),null,16,Bt)),n.templates.indicator?(o(),p(v(n.templates.indicator),{key:1,index:l},null,8,["index"])):h("",!0)],16,Ot)}),128))],16)):h("",!0)],16)}J.render=Tt;function N(e){return Lt(e)||Nt(e)||$t(e)||Vt()}function Vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $t(e,t){if(e){if(typeof e=="string")return D(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function Nt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lt(e){if(Array.isArray(e))return D(e)}function D(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var Q={name:"GalleriaThumbnails",hostName:"Galleria",extends:B,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&R(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&R(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=n+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var i=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=N(f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(a){return q(a,"data-p-active")===!0}),i=C(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(a){return a===i.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=N(f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=C(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=f(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&Z(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){n<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",ot(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=N(this.responsiveOptions);var i=lt();this.sortedResponsiveOptions.sort(function(m,c){var l=m.breakpoint,u=c.breakpoint;return st(l,u,-1,i)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:X,ChevronRightIcon:W,ChevronUpIcon:Y,ChevronDownIcon:mt},directives:{ripple:j}};function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(i){Dt(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Dt(e,t,n){return(t=jt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jt(e){var t=Et(e,"string");return w(t)=="symbol"?t:t+""}function Et(e,t){if(w(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(w(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Kt=["disabled","aria-label"],Ft=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],zt=["tabindex","aria-label","aria-current","onClick"],Rt=["disabled","aria-label"];function _t(e,t,n,i,r,a){var m=T("ripple");return o(),d("div",s({class:e.cx("thumbnails")},e.ptm("thumbnails")),[b("div",s({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?y((o(),d("button",s({key:0,class:e.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(c){return a.navBackward(c)})},P(P({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),p(v(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),s({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,Kt)),[[m]]):h("",!0),b("div",s({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[b("div",s({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(c){return a.onTransitionEnd(c)}),onTouchstart:t[2]||(t[2]=function(c){return a.onTouchStart(c)}),onTouchmove:t[3]||(t[3]=function(c){return a.onTouchMove(c)}),onTouchend:t[4]||(t[4]=function(c){return a.onTouchEnd(c)})},e.ptm("thumbnailItems")),[(o(!0),d(E,null,K(n.value,function(c,l){return o(),d("div",s({key:"p-galleria-thumbnail-item-".concat(l),class:e.cx("thumbnailItem",{index:l,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===l,"aria-selected":n.activeIndex===l,"aria-controls":n.containerId+"_item_"+l,onKeydown:function(g){return a.onThumbnailKeydown(g,l)},ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===l,"data-p-galleria-thumbnail-item-active":a.isItemActive(l),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===l,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===l}),[b("div",s({class:e.cx("thumbnail"),tabindex:n.activeIndex===l?"0":"-1","aria-label":a.ariaPageLabel(l+1),"aria-current":n.activeIndex===l?"page":void 0,onClick:function(g){return a.onItemClick(l)},ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(o(),p(v(n.templates.thumbnail),{key:0,item:c},null,8,["item"])):h("",!0)],16,zt)],16,Ft)}),128))],16)],16),n.showThumbnailNavigators?y((o(),d("button",s({key:1,class:e.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(c){return a.navForward(c)})},P(P({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),p(v(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),s({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,Rt)),[[m]]):h("",!0)],16)],16)}Q.render=_t;function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(i){Ht(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Ht(e,t,n){return(t=Mt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Mt(e){var t=Ut(e,"string");return S(t)=="symbol"?t:t+""}function Ut(e,t){if(S(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(S(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var tt={name:"GalleriaContent",hostName:"Galleria",extends:B,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||$(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||$()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||$()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:M(M({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var i=["top","left","bottom","right"],r=i.find(function(a){return a===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:J,GalleriaThumbnails:Q,TimesIcon:ct},directives:{ripple:j}};function x(e){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(i){Gt(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Gt(e,t,n){return(t=Zt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zt(e){var t=qt(e,"string");return x(t)=="symbol"?t:t+""}function qt(e,t){if(x(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(x(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Wt=["id","aria-label","aria-roledescription"],Xt=["aria-label"],Yt=["aria-live"];function Jt(e,t,n,i,r,a){var m=A("GalleriaItem"),c=A("GalleriaThumbnails"),l=T("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(o(),d("div",s({key:0,id:r.id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},G(G({},e.$attrs.containerProps),a.getPTOptions("root"))),[e.$attrs.fullScreen?y((o(),d("button",s({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:t[0]||(t[0]=function(u){return e.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(o(),p(v(e.$attrs.templates.closeicon||"TimesIcon"),s({class:e.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,Xt)),[[l]]):h("",!0),e.$attrs.templates&&e.$attrs.templates.header?(o(),d("div",s({key:1,class:e.cx("header")},a.getPTOptions("header")),[(o(),p(v(e.$attrs.templates.header)))],16)):h("",!0),b("div",s({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[F(m,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(u){return r.activeIndex=u}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(u){return r.slideShowActive=u}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(o(),p(c,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(u){return r.activeIndex=u}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(u){return r.slideShowActive=u}),containerId:r.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):h("",!0)],16,Yt),e.$attrs.templates&&e.$attrs.templates.footer?(o(),d("div",s({key:2,class:e.cx("footer")},a.getPTOptions("footer")),[(o(),p(v(e.$attrs.templates.footer)))],16)):h("",!0)],16,Wt)):h("",!0)}tt.render=Jt;var et={name:"Galleria",extends:It,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&z(),this.mask=null,this.container&&(V.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){V.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),at(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&Z(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){V.clear(t),this.containerVisible=!1,z()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:tt,Portal:rt},directives:{focustrap:ht}},Qt=["aria-modal"];function te(e,t,n,i,r,a){var m=A("GalleriaContent"),c=A("Portal"),l=T("focustrap");return e.fullScreen?(o(),p(c,{key:0},{default:O(function(){return[r.containerVisible?(o(),d("div",s({key:0,ref:a.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[F(ut,s({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},e.ptm("transition")),{default:O(function(){return[e.visible?y((o(),p(m,s({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[l]]):h("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,Qt)):h("",!0)]}),_:1})):(o(),p(m,s({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}et.render=te;const ee={getData(){return[{itemImageSrc:"images/grpc-gateway.png",thumbnailImageSrc:"images/grpc-gateway.png",alt:"Description for Image 1",title:"Title 1"},{itemImageSrc:"images/a12.png",thumbnailImageSrc:"images/a12.png",alt:"Description for Image 2",title:"Title 2"},{itemImageSrc:"images/hexagonal.png",thumbnailImageSrc:"images/hexagonal.png",alt:"Description for Image 3",title:"Title 3"}]},getImages(){return Promise.resolve(this.getData())}},ne={class:"card flex justify-center"},ie=["src","alt"],ae=["src","alt"],re={key:0,class:"grid grid-cols-12 gap-4",style:{"max-width":"600px"}},oe=["src","alt","onClick"],de={__name:"Presentation",setup(e){dt(()=>{ee.getImages().then(m=>t.value=m)});const t=k(),n=k(0),i=k([{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]),r=k(!1),a=m=>{n.value=m,r.value=!0};return(m,c)=>{const l=et;return o(),d("div",ne,[F(l,{activeIndex:n.value,"onUpdate:activeIndex":c[0]||(c[0]=u=>n.value=u),visible:r.value,"onUpdate:visible":c[1]||(c[1]=u=>r.value=u),value:t.value,responsiveOptions:i.value,numVisible:7,containerStyle:"max-width: 1000px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1},{item:O(u=>[b("img",{src:u.item.itemImageSrc,alt:u.item.alt,style:{width:"100%",display:"block"}},null,8,ie)]),thumbnail:O(u=>[b("img",{src:u.item.thumbnailImageSrc,alt:u.item.alt,style:{display:"block"}},null,8,ae)]),_:1},8,["activeIndex","visible","value","responsiveOptions"]),t.value?(o(),d("div",re,[(o(!0),d(E,null,K(t.value,(u,g)=>(o(),d("div",{key:g,class:"col-span-4"},[b("img",{src:u.thumbnailImageSrc,alt:u.alt,style:{cursor:"pointer"},onClick:le=>a(g)},null,8,oe)]))),128))])):h("",!0)])}}};export{de as default};
