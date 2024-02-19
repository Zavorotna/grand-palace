document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".header__lng-toggle > a"),t=document.querySelector(".header");t.getBoundingClientRect().height;let n=localStorage.getItem("lang")?localStorage.getItem("lang"):window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:"uk";function o(t){"ru"!==t||/^\/ru/.test(location.pathname)?"ru"!==t&&/^\/ru/.test(location.pathname)&&(location.pathname=location.pathname.replace("/ru","")):location.pathname="/ru"+location.pathname,document.querySelector(`[data-lang="${t}"]`).classList.contains("active")||e.forEach((e=>{e.classList.toggle("active")}))}n=n.substring(0,2),e&&e.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),localStorage.setItem("lang",this.dataset.lang),o(this.dataset.lang)}))})),o(n);const c=document.querySelector(".icon__menu"),s=document.querySelectorAll('.menu__link[href^="#"]');c&&c.addEventListener("click",(()=>{document.body.classList.toggle("lock"),c.classList.toggle("active"),t.classList.toggle("menu-active")})),s&&s.forEach((e=>{e.addEventListener("click",(function(e){document.body.classList.remove("lock"),c.classList.remove("active"),t.classList.remove("menu-active")}))}));const a=document.querySelectorAll(".images-slider__items");a.length&&a.forEach((function(e){const t=e.querySelectorAll(".images-slider__item");let n=e.querySelector(".images-slider__item.active");t.length&&t.forEach((e=>{let t;e.onmouseover=function(){t=!0,setTimeout((()=>{t&&!this.classList.contains("active")&&(n.classList.remove("active"),n=this,n.classList.add("active"))}),200)},e.onmouseleave=function(){t=!1}})),f(e,(function(){null!==n.previousElementSibling&&(n.classList.remove("active"),n=n.previousElementSibling,n.classList.add("active"))}),(function(){null!==n.nextElementSibling&&(n.classList.remove("active"),n=n.nextElementSibling,n.classList.add("active"))}))}));const i=document.querySelector(".overview-btn__container .btn-arrow-prev"),r=document.querySelector(".overview-btn__container .btn-arrow-next"),l=document.querySelectorAll(".overview__items");let d=0;const u=e=>{for(slide of l)slide.classList.remove("active");l[e].classList.add("active")};i&&i.addEventListener("click",(()=>{0==d?(d=l.length-1,u(d)):(d--,u(d))})),r&&r.addEventListener("click",(()=>{d==l.length-1?(d=0,u(d)):(d++,u(d))}));const m=document.querySelector(".panorama-slider__switcher"),v=document.querySelectorAll(".panorama-slider__switcher > span"),h=document.querySelectorAll(".panorama-slider__item");m&&(m.onclick=()=>{v.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})),h.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}))});const g=document.querySelectorAll(".list-item");function f(e,t,n){let o=null,c=null;const s=function(e){o={x:e.changedTouches[0].clientX},c={x:o.x}},a=function(e){c={x:e.changedTouches[0].clientX}},i=function(e){let s={x:o.x-c.x};Math.abs(s.x)>40&&(s.x>0?n():t())};return e.addEventListener("touchstart",s),e.addEventListener("touchmove",a),e.addEventListener("touchend",i),{touchStartSlider:s,touchMoveSlider:a,touchEndSlider:i}}if(g&&g.forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".custom-select").open=!1}))})),function(){const e=document.querySelector(".construction-progress__galery");let t,n,o=-1,c=!0;const s=.75,a=function(e,t){},i=function(e){},r=function(){1===o?(c?(e.style.transform="translateX(-300%)",c=!1):(e.style.transform="translateX(-200%)",c=!0),o=-1):(e.style.transform="translateX(-300%)",c=!1)},l=function(){-1===o?(c?(e.style.transform="translateX(-100%)",c=!1):(e.style.transform="translateX(-200%)",c=!0),o=1):(e.style.transform="translateX(-100%)",c=!1)},d=function(){n=setInterval(r,4e3)},u=function(){clearInterval(n)};function m(){document.querySelectorAll(".construction-progress__img.clone").forEach((e=>{e.remove()})),u(),e.removeEventListener("transitionend",v),e.removeEventListener("touchstart",t.touchStartSlider),e.removeEventListener("touchmove",t.touchMoveSlider),e.removeEventListener("touchend",t.touchEndSlider),e.removeEventListener("touchstart",u),e.removeEventListener("touchend",d),window.removeEventListener("blur",u),window.removeEventListener("focus",d),e.style.transition="none",e.style.transform="translateX(0%)"}function v(){c||(1===o?e.prepend(e.lastElementChild):e.append(e.firstElementChild)),o=-1,i(e),e.style.transform="translateX(-200%)",setTimeout((()=>{a(e,s)}),0),c=!0}i(e),window.matchMedia("(max-width: 540px)").matches&&(function(){const t=document.querySelectorAll(".construction-progress__img");if(t.length>=5)e.prepend(e.lastElementChild),e.prepend(e.lastElementChild);else for(let n=0;n<2;n++){let o,c;o=t[n].cloneNode(!0),c=t[t.length-n-1].cloneNode(!0),o.classList.add("clone"),c.classList.add("clone"),e.append(o),e.prepend(c)}}(),e.addEventListener("transitionend",v),e.addEventListener("touchstart",u),e.addEventListener("touchend",d),window.addEventListener("blur",u),window.addEventListener("focus",d),e.style.transform="translateX(-200%)",t=f(e,l,r),c=!0),setTimeout((()=>{a(e,s)}),0),window.onresize=()=>{window.matchMedia("(max-width: 540px)").matches||m()}}(),document.querySelectorAll("figure.news").length>0){let y=document.querySelectorAll("figure.news"),p=document.querySelector("#newsToLeft"),S=document.querySelector("#newsToRight"),w=3,_=0;function L(){const e=y.length,t=_*w,n=Math.min(t+w,e);for(let o=0;o<e;o++)y[o].style.display=o>=t&&o<n?"block":"none"}function E(e){const t=Math.ceil(y.length/w);"next"===e&&_<t-1?_++:"prev"===e&&_>0&&_--}p.addEventListener("click",(function(e){e.preventDefault(),E("prev"),L()})),S.addEventListener("click",(function(e){e.preventDefault(),E("next"),L()})),L()}}));
let currentFloor,floorNumber=document.getElementsByName("floor"),floors=document.querySelectorAll(".floor");function initiateSlider(){for(var e=0;e<floorNumber.length;e++)if(floorNumber[e].checked){for(let r=0;r<floors.length;r++)floors[r].style.display="none",floors[r].getAttribute("data-floor-number")==floorNumber[e].value&&(currentFloor=floors[r],currentFloor.style.display="block");break}let r,t=document.querySelector(".btn-arrow-prev"),l=document.querySelector(".btn-arrow-next"),i=currentFloor.querySelector(".js-slider"),n=currentFloor.querySelectorAll(".slide"),o=n[1].getBoundingClientRect().width,c=document.querySelectorAll(".filter-queue__items input"),s=document.querySelector(".currentSlideBtn");for(let e=0;e<n.length;e++)c[e].dataset.orderNumber=e,n[e].dataset.orderNumber=e;function u(e){e.preventDefault(),s.classList.remove("currentSlideBtn"),e.target.classList.add("currentSlideBtn"),c=Array.from(c),n=Array.from(n),s=document.querySelector(".currentSlideBtn"),r.classList.remove("currentSlide"),n[c.indexOf(s)].classList.add("currentSlide"),r=document.querySelector(".currentSlide"),d(),i.scroll(i.scrollLeft=o*c.indexOf(s),0)}function d(){let e=t.querySelector("span span"),i=l.querySelector("span span"),o=document.querySelector(".plan-nav__title h3");n=Array.from(n),1==n.indexOf(r)?(t.style.visibility="visible",l.style.visibility="visible",o.innerText="II черга",e.innerText="I черга",i.innerText="III черга"):0==n.indexOf(r)?(o.innerText="I черга",t.style.visibility="hidden",l.style.visibility="visible",i.innerText="II черга"):2==n.indexOf(r)&&(o.innerText="III черга",t.style.visibility="visible",l.style.visibility="hidden",e.innerText="II черга")}i.scroll(i.scrollLeft+=o*s.getAttribute("data-order-number"),0),n[s.getAttribute("data-order-number")].classList.add("currentSlide"),r=document.querySelector(".currentSlide"),d(),c.forEach((e=>{e.onclick=u})),l.onclick=function(e){e.preventDefault(),n=Array.from(n);let t=n.indexOf(r);r.classList.remove("currentSlide"),n[t+1].classList.add("currentSlide"),r=document.querySelector(".currentSlide"),d(),c=Array.from(c);let l=c.indexOf(s);s.classList.remove("currentSlideBtn"),c[l+1].classList.add("currentSlideBtn"),s=document.querySelector(".currentSlideBtn"),i.scroll(i.scrollLeft+=o,0)},t.onclick=function(e){e.preventDefault(),n=Array.from(n);let l=n.indexOf(r);r.classList.remove("currentSlide"),n[l-1].classList.add("currentSlide"),r=document.querySelector(".currentSlide"),d(),console.log(t.innerText),c=Array.from(c);let u=c.indexOf(s);s.classList.remove("currentSlideBtn"),c[u-1].classList.add("currentSlideBtn"),s=document.querySelector(".currentSlideBtn"),i.scroll(i.scrollLeft-o,0)}}initiateSlider(),floorNumber.forEach((e=>{e.oninput=initiateSlider}));