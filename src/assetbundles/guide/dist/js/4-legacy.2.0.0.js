(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{10:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(2),i=n(24),s=n.n(i),o=n(25),l=n.n(o),c=(n(26),!1);function d(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=!1;if(""!==t.getAttribute("data-lazy-animate")&&c){var i=JSON.parse(t.getAttribute("data-lazy-animate"))||{},s=i.anim||!1,o=i.targets?document.querySelectorAll(i.targets):i.target?document.querySelector(i.target):t;a=i.reset||!1,n&&(i.staticOnLoad,1)&&(i.delay=i.speed=0),s?requestAnimationFrame(function(){return c.animate(s,o,i)}):Object(r.e)("Animation function not passed in:",s)}Object(r.a)(t,"c_animate--animated"),a||(t.removeAttribute("data-lazy-animate"),e&&e.unobserve(t))}function h(t,e){if(t.hasAttribute("data-srcset")){var n=t.getAttribute("data-srcset");t.setAttribute("srcset",n),(a=t).style.paddingTop="",a.style.maxWidth="",t.removeAttribute("data-srcset"),Object(r.c)("Lazy srcset",n)}var a;if(t.hasAttribute("data-src")){var i=t.getAttribute("data-src");t.setAttribute("src",i),t.removeAttribute("data-src"),Object(r.c)("Lazy src",i)}t.removeAttribute("data-lazy-load"),null!==e&&e.unobserve(t)}var m=function(){function t(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s()(this,t),this.animateMargin=a.animateMargin||"-100px",this.animateThreshold=a.animateThreshold||0,this.loadMargin=a.loadMargin||"50%",this.loadThreshold=a.loadThreshold||0,this.createImagePlaceholders(),this.loadElements=a.loadElements||document.querySelectorAll("[data-lazy-load]"),this.loadElements.length>0&&(this.loadObserver=new IntersectionObserver(function(t){t.forEach(function(t){Object(r.c)("Lazy loading element",t),t.isIntersecting&&h(t.target,e.loadObserver)})},{rootMargin:this.loadMargin,threshold:this.loadThreshold}),this.loadElements.forEach(function(t){d(t)?h(t,null):e.loadObserver.observe(t)})),this.animateElements=a.animateElements||document.querySelectorAll("[data-lazy-animate]"),this.animateElements.length>0&&Promise.all([n.e(0),n.e(2)]).then(n.bind(null,41)).then(function(t){c=t,e.animateObserver=new IntersectionObserver(function(t){t.forEach(function(t){Object(r.c)("Lazy animating element",t),t.isIntersecting&&u(t.target,e.animateObserver)})},{rootMargin:e.animateMargin,threshold:e.animateThreshold}),e.animateElements.forEach(function(t){var n=JSON.parse(t.getAttribute("data-lazy-animate"))||{};d(t)?u(t,n.reset?e.animateObserver:null,!0):e.animateObserver.observe(t)})}).catch(function(t){return Object(r.e)("An error occurred while loading the component")})}return l()(t,[{key:"createImagePlaceholders",value:function(){var t=document.querySelectorAll("img[data-lazy-load]");Array.prototype.forEach.call(t,function(t,e){if(t.getAttribute("data-width")&&t.getAttribute("data-height")){var n=t.getAttribute("data-width"),a=t.getAttribute("data-height");t.style.paddingTop=a/n*100+"%",t.style.maxWidth=t.getAttribute("data-width")+"px"}})}},{key:"updateAnimate",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(e?document.querySelectorAll(e+" [data-lazy-animate],"+e+"[data-lazy-animate]"):this.animateElements).forEach(function(n){e?u(n,null,c):d(n)?u(n,t.animateObserver,c):t.loadObserver.observe(n)})}},{key:"updateLoad",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(e?document.querySelectorAll(e+" [data-lazy-load],"+e+"[data-lazy-load]"):this.loadElements).forEach(function(n){e?h(n,null):d(n)?h(n,t.loadObserver):t.loadObserver.observe(n)})}}]),t}();Object(r.c)("Lazy Loading");var f=n(18),g={data:function(){return{currentSize:{},sizes:{}}},props:{mqSizes:{required:!0},rootClass:{default:""}},computed:{wrapperClasses:function(){var t=this,e=[];return this.currentSize.classes&&this.currentSize.classes.forEach(function(n){e.push(t.rootClass+"--"+n)}),e},wrapperStyles:function(){var t={};return this.currentSize.styles&&(t=this.currentSize.styles),t}},methods:{},created:function(){this.sizes=JSON.parse(this.mqSizes)},mounted:function(){var t=this;new f.a(function(e){var n=!0,a=!1,i=void 0;try{for(var s,o=function(){var e=s.value,n=e.contentRect,a=n.left,i=n.top,o=n.width,l=n.height;Object(r.c)("Resizing",e,a,i,o,l),t.currentSize={},t.sizes.forEach(function(e){o>=e.width&&(t.currentSize=e)})},l=e[Symbol.iterator]();!(n=(s=l.next()).done);n=!0)o()}catch(t){a=!0,i=t}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}}).observe(this.$el)}},p=n(14),v={components:{ResizeContainer:Object(p.a)(g,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"c_resize_container",class:this.wrapperClasses,style:this.wrapperStyles},[this._t("default")],2)},[],!1,null,null,null).exports},props:{gridType:!1},computed:{mqSizes:function(){var t=[];switch(this.gridType){case"2-column":t.push({width:650,styles:{gridTemplateColumns:"1fr 1fr"}});break;case"3-column":t.push({width:650,styles:{gridTemplateColumns:"1fr 1fr 1fr"}});break;case"4-column":t.push({width:650,styles:{gridTemplateColumns:"1fr 1fr"}},{width:800,styles:{gridTemplateColumns:"1fr 1fr 1fr 1fr"}});break;case"text-sidebar":t.push({width:650,styles:{alignItems:"center",gridTemplateColumns:"minmax(400px, var(--max-width-text)) minmax(200px, 400px)"}});break;case"sidebar-text":t.push({width:650,styles:{alignItems:"center",gridTemplateColumns:"minmax(200px, 400px) minmax(400px, var(--max-width-text))"}})}return JSON.stringify(t)}}},b=(n(27),Object(p.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return this.mqSizes?e("resize-container",{staticClass:"c_grid",attrs:{"mq-sizes":this.mqSizes}},[this._t("default")],2):this._e()},[],!1,null,null,null).exports),y=new a.a,w=document.querySelector("[data-guide-page-nav]");w&&new a.a({el:w,components:{},delimiters:["${","}"],data:function(){return{nav:[]}},computed:{},methods:{navItemClicked:function(t){var e=document.querySelector("#content-container #content");if("first"===t)e.scrollTop=0;else{var n=e.querySelector('[data-guide-section="'+t+'"]');e.scrollTop=n.offsetTop-20}}},created:function(){var t=this;Object(r.c)("Guide Page Nav"),y.$on("guide-content-sections-updated",function(e){t.nav=e})}}),document.querySelectorAll("[data-guide-content]").forEach(function(t){new a.a({el:t,components:{Grid:b},delimiters:["${","}"],data:function(){return{sections:[]}},computed:{},methods:{},mounted:function(){var t=this;Object(r.c)("Guide Content"),this.$el.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function(e){var n=e.innerText,a=Object(r.d)(n.substr(0,40));e.setAttribute("data-guide-section",a);var i=3;"H1"===e.nodeName?i=1:"H2"===e.nodeName&&(i=2),t.sections.push({level:i,title:n,slug:a})}),this.sections.length>0&&y.$emit("guide-content-sections-updated",this.sections),window.lazy=new m({container:this.$el})},$nextTick:function(){}})})},16:function(t,e,n){var a=n(28);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(40).default)("5f0b63ee",a,!0,{})},27:function(t,e,n){"use strict";var a=n(16);n.n(a).a},28:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".c_grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  grid-gap: var(--grid-gap);\n  margin: 2.4rem 0;\n}\nh1 + .c_grid, h2 + .c_grid, h3 + .c_grid, h4 + .c_grid, h5 + .c_grid, h6 + .c_grid {\n    margin-top: 0;\n}\n.c_grid:last-child {\n    margin-bottom: 0;\n}\n",""])}}]);