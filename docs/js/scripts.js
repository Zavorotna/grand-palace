document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".header__lng-toggle > a"),t=document.querySelector(".header");t.getBoundingClientRect().height;let n=localStorage.getItem("lang")?localStorage.getItem("lang"):window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:"uk";function o(t){"ru"!==t||/^\/ru/.test(location.pathname)?"ru"!==t&&/^\/ru/.test(location.pathname)&&(location.pathname=location.pathname.replace("/ru","")):location.pathname="/ru"+location.pathname,document.querySelector(`[data-lang="${t}"]`).classList.contains("active")||e.forEach((e=>{e.classList.toggle("active")}))}n=n.substring(0,2),e&&e.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),localStorage.setItem("lang",this.dataset.lang),o(this.dataset.lang)}))})),o(n);const c=document.querySelector(".icon__menu"),s=document.querySelectorAll('.menu__link[href^="#"]');c&&c.addEventListener("click",(()=>{document.body.classList.toggle("lock"),c.classList.toggle("active"),t.classList.toggle("menu-active")})),s&&s.forEach((e=>{e.addEventListener("click",(function(e){document.body.classList.remove("lock"),c.classList.remove("active"),t.classList.remove("menu-active")}))}));const a=document.querySelectorAll(".images-slider__items");a.length&&a.forEach((function(e){const t=e.querySelectorAll(".images-slider__item");let n=e.querySelector(".images-slider__item.active");t.length&&t.forEach((e=>{let t;e.onmouseover=function(){t=!0,setTimeout((()=>{t&&!this.classList.contains("active")&&(n.classList.remove("active"),n=this,n.classList.add("active"))}),200)},e.onmouseleave=function(){t=!1}})),f(e,(function(){null!==n.previousElementSibling&&(n.classList.remove("active"),n=n.previousElementSibling,n.classList.add("active"))}),(function(){null!==n.nextElementSibling&&(n.classList.remove("active"),n=n.nextElementSibling,n.classList.add("active"))}))}));const i=document.querySelector(".overview-btn__container .btn-arrow-prev"),r=document.querySelector(".overview-btn__container .btn-arrow-next"),l=document.querySelectorAll(".overview__items");let d=0;const u=e=>{for(slide of l)slide.classList.remove("active");l[e].classList.add("active")};i&&i.addEventListener("click",(()=>{0==d?(d=l.length-1,u(d)):(d--,u(d))})),r&&r.addEventListener("click",(()=>{d==l.length-1?(d=0,u(d)):(d++,u(d))}));const m=document.querySelector(".panorama-slider__switcher"),v=document.querySelectorAll(".panorama-slider__switcher > span"),h=document.querySelectorAll(".panorama-slider__item");m&&(m.onclick=()=>{v.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})),h.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}))});const g=document.querySelectorAll(".list-item");function f(e,t,n){let o=null,c=null;const s=function(e){o={x:e.changedTouches[0].clientX},c={x:o.x}},a=function(e){c={x:e.changedTouches[0].clientX}},i=function(e){let s={x:o.x-c.x};Math.abs(s.x)>40&&(s.x>0?n():t())};return e.addEventListener("touchstart",s),e.addEventListener("touchmove",a),e.addEventListener("touchend",i),{touchStartSlider:s,touchMoveSlider:a,touchEndSlider:i}}if(g&&g.forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".custom-select").open=!1}))})),function(){const e=document.querySelector(".construction-progress__galery");let t,n,o=-1,c=!0;const s=.75,a=function(e,t){},i=function(e){},r=function(){1===o?(c?(e.style.transform="translateX(-300%)",c=!1):(e.style.transform="translateX(-200%)",c=!0),o=-1):(e.style.transform="translateX(-300%)",c=!1)},l=function(){-1===o?(c?(e.style.transform="translateX(-100%)",c=!1):(e.style.transform="translateX(-200%)",c=!0),o=1):(e.style.transform="translateX(-100%)",c=!1)},d=function(){n=setInterval(r,4e3)},u=function(){clearInterval(n)};function m(){document.querySelectorAll(".construction-progress__img.clone").forEach((e=>{e.remove()})),u(),e.removeEventListener("transitionend",v),e.removeEventListener("touchstart",t.touchStartSlider),e.removeEventListener("touchmove",t.touchMoveSlider),e.removeEventListener("touchend",t.touchEndSlider),e.removeEventListener("touchstart",u),e.removeEventListener("touchend",d),window.removeEventListener("blur",u),window.removeEventListener("focus",d),e.style.transition="none",e.style.transform="translateX(0%)"}function v(){c||(1===o?e.prepend(e.lastElementChild):e.append(e.firstElementChild)),o=-1,i(e),e.style.transform="translateX(-200%)",setTimeout((()=>{a(e,s)}),0),c=!0}i(e),window.matchMedia("(max-width: 540px)").matches&&(function(){const t=document.querySelectorAll(".construction-progress__img");if(t.length>=5)e.prepend(e.lastElementChild),e.prepend(e.lastElementChild);else for(let n=0;n<2;n++){let o,c;o=t[n].cloneNode(!0),c=t[t.length-n-1].cloneNode(!0),o.classList.add("clone"),c.classList.add("clone"),e.append(o),e.prepend(c)}}(),e.addEventListener("transitionend",v),e.addEventListener("touchstart",u),e.addEventListener("touchend",d),window.addEventListener("blur",u),window.addEventListener("focus",d),e.style.transform="translateX(-200%)",t=f(e,l,r),c=!0),setTimeout((()=>{a(e,s)}),0),window.onresize=()=>{window.matchMedia("(max-width: 540px)").matches||m()}}(),document.querySelectorAll("figure.news").length>0){let y=document.querySelectorAll("figure.news"),p=document.querySelector("#newsToLeft"),S=document.querySelector("#newsToRight"),w=3,_=0;function L(){const e=y.length,t=_*w,n=Math.min(t+w,e);for(let o=0;o<e;o++)y[o].style.display=o>=t&&o<n?"block":"none"}function E(e){const t=Math.ceil(y.length/w);"next"===e&&_<t-1?_++:"prev"===e&&_>0&&_--}p.addEventListener("click",(function(e){e.preventDefault(),E("prev"),L()})),S.addEventListener("click",(function(e){e.preventDefault(),E("next"),L()})),L()}}));
document.addEventListener("DOMContentLoaded",(function(){if(document.querySelectorAll(".slider-images img")){const i=document.querySelectorAll(".slider-images img");let s=0;setInterval((()=>{i[s].classList.remove("active"),s=(s+1)%i.length,i[s].classList.add("active")}),3e3)}if(document.querySelector(".carousel")){const d=document.querySelector(".carousel"),u=document.querySelector(".left"),a=document.querySelector(".right");let y=[...document.querySelectorAll(".carousel-item")];const f=y[0].offsetWidth+60;let m=0,S=!1;function e(){for(;d.firstChild;)d.removeChild(d.firstChild);const e=y[y.length-1].cloneNode(!0);e.style.left=`-${f}px`,d.insertAdjacentElement("afterbegin",e);for(let e=0;e<y.length;e++){const t=y[e].cloneNode(!0);t.style.left=e*f+"px",d.appendChild(t)}!function(){const e=document.querySelectorAll(".btn-more"),t=document.querySelectorAll(".btn-more-cancel"),l=document.querySelectorAll(".text-comment-block"),r=document.querySelector(".comment-block");e.forEach(((e,n)=>{e.addEventListener("click",(function(o){console.log(e),o.preventDefault(),l[n].classList.add("visible"),t[n].style.display="block",e.style.display="none",r.style.paddingBottom="100px"}))})),t.forEach(((t,n)=>{t.addEventListener("click",(function(o){o.preventDefault(),l[n].classList.remove("visible"),e[n].style.display="block",t.style.display="none",r.style.paddingBottom=""}))}))}()}function t(t){S=!0;const l=-t*f;m=(m+y.length+t)%y.length,d.style.transition="transform .5s ease-in-out",d.style.transform=`translateX(${l}px)`,setTimeout((()=>{d.style.transition="none",d.style.transform="none",S=!1,e()}),500)}e(),a.addEventListener("click",(e=>{e.preventDefault(),y.push(y.shift()),t(1)})),u.addEventListener("click",(e=>{e.preventDefault(),y.unshift(y.pop()),t(-1)}))}if(document.querySelector(".popap-block")){const p=document.querySelector(".opacity-bg"),v=document.querySelector(".popap-more-info"),b=document.querySelector(".cancel-popap"),q=document.querySelector(".open-popap");function l(){p.style.display="none",v.style.display="none"}p.addEventListener("click",(function(e){e.preventDefault(),l()})),b.addEventListener("click",(function(e){e.preventDefault(),l()})),q.addEventListener("click",(function(e){e.preventDefault(),v.style.display="block",p.style.display="block"}))}let r,n=document.getElementsByName("floor"),o=document.querySelectorAll(".floor");function c(){for(var e=0;e<n.length;e++)if(n[e].checked){for(let t=0;t<o.length;t++)o[t].style.display="none",o[t].getAttribute("data-floor-number")==n[e].value&&(r=o[t],r.style.display="block");break}let t,l=document.querySelector(".btn-arrow-prev"),c=document.querySelector(".btn-arrow-next"),i=r.querySelector(".js-slider"),s=r.querySelectorAll(".slide"),d=s[1].getBoundingClientRect().width,u=document.querySelectorAll(".filter-queue__items input"),a=document.querySelector(".currentSlideBtn");for(let e=0;e<s.length;e++)u[e].dataset.orderNumber=e,s[e].dataset.orderNumber=e;function y(e){e.preventDefault(),a.classList.remove("currentSlideBtn"),e.target.classList.add("currentSlideBtn"),u=Array.from(u),s=Array.from(s),a=document.querySelector(".currentSlideBtn"),t.classList.remove("currentSlide"),s[u.indexOf(a)].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),f(),i.scroll(i.scrollLeft=d*u.indexOf(a),0)}function f(){let e=l.querySelector("span span"),r=c.querySelector("span span"),n=document.querySelector(".plan-nav__title h3");s=Array.from(s),1==s.indexOf(t)?(l.style.visibility="visible",c.style.visibility="visible",n.innerText="II черга",e.innerText="I черга",r.innerText="III черга"):0==s.indexOf(t)?(n.innerText="I черга",l.style.visibility="hidden",c.style.visibility="visible",r.innerText="II черга"):2==s.indexOf(t)&&(n.innerText="III черга",l.style.visibility="visible",c.style.visibility="hidden",e.innerText="II черга")}i.scroll(i.scrollLeft+=d*a.getAttribute("data-order-number"),0),s[a.getAttribute("data-order-number")].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),f(),u.forEach((e=>{e.onclick=y})),c.onclick=function(e){e.preventDefault(),s=Array.from(s);let l=s.indexOf(t);t.classList.remove("currentSlide"),s[l+1].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),f(),u=Array.from(u);let r=u.indexOf(a);a.classList.remove("currentSlideBtn"),u[r+1].classList.add("currentSlideBtn"),a=document.querySelector(".currentSlideBtn"),i.scroll(i.scrollLeft+=d,0)},l.onclick=function(e){e.preventDefault(),s=Array.from(s);let r=s.indexOf(t);t.classList.remove("currentSlide"),s[r-1].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),f(),console.log(l.innerText),u=Array.from(u);let n=u.indexOf(a);a.classList.remove("currentSlideBtn"),u[n-1].classList.add("currentSlideBtn"),a=document.querySelector(".currentSlideBtn"),i.scroll(i.scrollLeft-d,0)}}c(),n.forEach((e=>{e.oninput=c}))}));