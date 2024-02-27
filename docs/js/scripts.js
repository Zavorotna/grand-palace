document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".news-gallery ")){let y=document.querySelectorAll(".gallery-sm-photoes img"),S=document.querySelector(".general-img");y.forEach((function(e){e.addEventListener("click",(function(){let e=this.src,t=S.src;S.src=e,this.src=t}))}))}const e=document.querySelectorAll(".header__lng-toggle > a"),t=document.querySelector(".header");t.getBoundingClientRect().height;let n=localStorage.getItem("lang")?localStorage.getItem("lang"):window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:"uk";function o(t){"ru"!==t||/^\/ru/.test(location.pathname)?"ru"!==t&&/^\/ru/.test(location.pathname)&&(location.pathname=location.pathname.replace("/ru","")):location.pathname="/ru"+location.pathname,document.querySelector(`[data-lang="${t}"]`).classList.contains("active")||e.forEach((e=>{e.classList.toggle("active")}))}n=n.substring(0,2),e&&e.forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),localStorage.setItem("lang",this.dataset.lang),o(this.dataset.lang)}))})),o(n);const c=document.querySelector(".icon__menu"),s=document.querySelectorAll('.menu__link[href^="#"]');c&&c.addEventListener("click",(()=>{document.body.classList.toggle("lock"),c.classList.toggle("active"),t.classList.toggle("menu-active")})),s&&s.forEach((e=>{e.addEventListener("click",(function(e){document.body.classList.remove("lock"),c.classList.remove("active"),t.classList.remove("menu-active")}))}));const r=document.querySelectorAll(".images-slider__items");r.length&&r.forEach((function(e){const t=e.querySelectorAll(".images-slider__item");let n=e.querySelector(".images-slider__item.active");t.length&&t.forEach((e=>{let t;e.onmouseover=function(){t=!0,setTimeout((()=>{t&&!this.classList.contains("active")&&(n.classList.remove("active"),n=this,n.classList.add("active"))}),200)},e.onmouseleave=function(){t=!1}})),f(e,(function(){null!==n.previousElementSibling&&(n.classList.remove("active"),n=n.previousElementSibling,n.classList.add("active"))}),(function(){null!==n.nextElementSibling&&(n.classList.remove("active"),n=n.nextElementSibling,n.classList.add("active"))}))}));const i=document.querySelector(".overview-btn__container .btn-arrow-prev"),l=document.querySelector(".overview-btn__container .btn-arrow-next"),a=document.querySelectorAll(".overview__items");let u=0;const d=e=>{for(slide of a)slide.classList.remove("active");a[e].classList.add("active")};i&&i.addEventListener("click",(()=>{0==u?(u=a.length-1,d(u)):(u--,d(u))})),l&&l.addEventListener("click",(()=>{u==a.length-1?(u=0,d(u)):(u++,d(u))}));const m=document.querySelector(".panorama-slider__switcher"),v=document.querySelectorAll(".panorama-slider__switcher > span"),h=document.querySelectorAll(".panorama-slider__item");m&&(m.onclick=()=>{v.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")})),h.forEach((e=>{e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}))});const g=document.querySelectorAll(".list-item");function f(e,t,n){let o=null,c=null;const s=function(e){o={x:e.changedTouches[0].clientX},c={x:o.x}},r=function(e){c={x:e.changedTouches[0].clientX}},i=function(e){let s={x:o.x-c.x};Math.abs(s.x)>40&&(s.x>0?n():t())};return e.addEventListener("touchstart",s),e.addEventListener("touchmove",r),e.addEventListener("touchend",i),{touchStartSlider:s,touchMoveSlider:r,touchEndSlider:i}}if(g&&g.forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".custom-select").open=!1}))})),function(){const e=document.querySelector(".construction-progress__galery");let t,n,o=-1,c=!0;const s=.75,r=function(e,t){},i=function(e){},l=function(){1===o?(c?(e.style.transform="translateX(-300%)",c=!1):(e.style.transform="translateX(-200%)",c=!0),o=-1):(e.style.transform="translateX(-300%)",c=!1)},a=function(){-1===o?(c?(e.style.transform="translateX(-100%)",c=!1):(e.style.transform="translateX(-200%)",c=!0),o=1):(e.style.transform="translateX(-100%)",c=!1)},u=function(){n=setInterval(l,4e3)},d=function(){clearInterval(n)};function m(){!function(){const t=document.querySelectorAll(".construction-progress__img");if(t.length>=5)e.prepend(e.lastElementChild),e.prepend(e.lastElementChild);else for(let n=0;n<2;n++){let o,c;o=t[n].cloneNode(!0),c=t[t.length-n-1].cloneNode(!0),o.classList.add("clone"),c.classList.add("clone"),e.append(o),e.prepend(c)}}(),e.addEventListener("transitionend",h),e.addEventListener("touchstart",d),e.addEventListener("touchend",u),window.addEventListener("blur",d),window.addEventListener("focus",u),e.style.transform="translateX(-200%)",t=f(e,a,l),u(),c=!0}function v(){document.querySelectorAll(".construction-progress__img.clone").forEach((e=>{e.remove()})),d(),e.removeEventListener("transitionend",h),e.removeEventListener("touchstart",t.touchStartSlider),e.removeEventListener("touchmove",t.touchMoveSlider),e.removeEventListener("touchend",t.touchEndSlider),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",u),window.removeEventListener("blur",d),window.removeEventListener("focus",u),e.style.transition="none",e.style.transform="translateX(0%)"}function h(){c||(1===o?e.prepend(e.lastElementChild):e.append(e.firstElementChild)),o=-1,i(e),e.style.transform="translateX(-200%)",setTimeout((()=>{r(e,s)}),0),c=!0}i(e),window.matchMedia("(max-width: 540px)").matches,setTimeout((()=>{r(e,s)}),0),window.onresize=()=>{window.matchMedia("(max-width: 540px)").matches?m():v()}}(),document.querySelectorAll("figure.news").length>0){let p=document.querySelectorAll("figure.news"),w=document.querySelector("#newsToLeft"),_=document.querySelector("#newsToRight"),q=3,x=0;function L(){const e=p.length,t=x*q,n=Math.min(t+q,e);for(let o=0;o<e;o++)p[o].style.display=o>=t&&o<n?"block":"none"}function E(e){const t=Math.ceil(p.length/q);"next"===e&&x<t-1?x++:"prev"===e&&x>0&&x--}w.addEventListener("click",(function(e){e.preventDefault(),E("prev"),L()})),_.addEventListener("click",(function(e){e.preventDefault(),E("next"),L()})),L()}}));
document.addEventListener("DOMContentLoaded",(function(){if(document.querySelector(".popap-block")){let c=document.querySelector("#phoneValidation");c.addEventListener("change",(function(){let e=(t=c.value,/\+380[0-9]{9}$/.test(t));var t;console.log(e),e?document.querySelector(".incorrect-number")?(c.classList.remove("incorrect-number"),document.querySelector(".incorect-number-test").classList.add("d-none"),c.classList.add("correct-number")):document.querySelector(".correct-number")||c.classList.add("correct-number"):(document.querySelector(".incorect-number-test").classList.remove("d-none"),document.querySelector(".correct-number")?(c.classList.remove("correct-number"),document.querySelector(".incorect-number-test").classList.remove("d-none"),c.classList.add("incorrect-number")):document.querySelector(".incorrect-number")||c.classList.add("incorrect-number"))}))}if(document.querySelector(".slider-images")){const i=document.querySelectorAll(".slider-images img");let s=0;setInterval((()=>{i[s].classList.remove("active"),s=(s+1)%i.length,i[s].classList.add("active")}),3e3)}if(document.querySelector(".popap-more-info")){const d=document.querySelector(".popap-more-info");popapHeight=window.innerHeight,console.log(popapHeight),popapHeight<600?(d.style.overflowY="scroll",d.classList.add("scroll-style")):(d.style.overflowY="",d.classList.remove("scroll-style"))}function e(){if(document.querySelector(".carousel")){const r=document.querySelector(".carousel"),n=document.querySelector(".left"),l=document.querySelector(".right");let o=[...document.querySelectorAll(".carousel-item")];const c=window.innerWidth;let i;if(c>=1024){i=c*(48/100)}else i=o[0].offsetWidth+75;let s=0,d=!1;function e(){for(;r.firstChild;)r.removeChild(r.firstChild);const e=o[o.length-1].cloneNode(!0);e.style.left=`-${i}px`,r.insertAdjacentElement("afterbegin",e);for(let e=0;e<o.length;e++){const t=o[e].cloneNode(!0);t.style.left=e*i+"px",r.appendChild(t)}!function(){const e=document.querySelectorAll(".btn-more"),t=document.querySelectorAll(".btn-more-cancel"),r=document.querySelectorAll(".text-comment-block"),n=document.querySelector(".comment-block");e.forEach(((e,l)=>{e.addEventListener("click",(function(o){console.log(e),o.preventDefault(),r[l].classList.add("visible"),t[l].style.display="block",e.style.display="none";const c=window.innerWidth;c>=768?n.style.paddingBottom="15%":c>=375&&c<425?n.style.paddingBottom="75%":c>=425&&c<768?n.style.paddingBottom="50%":c<375&&(n.style.paddingBottom="100%")}))})),t.forEach(((t,l)=>{t.addEventListener("click",(function(o){o.preventDefault(),r[l].classList.remove("visible"),e[l].style.display="block",t.style.display="none",n.style.paddingBottom=""}))}))}()}function t(t){d=!0;const n=-t*i;s=(s+o.length+t)%o.length,r.style.transition="transform .5s ease-in-out",r.style.transform=`translateX(${n}px)`,setTimeout((()=>{r.style.transition="none",r.style.transform="none",d=!1,e()}),500)}e(),l.addEventListener("click",(e=>{e.preventDefault(),o.push(o.shift()),t(1)})),n.addEventListener("click",(e=>{e.preventDefault(),o.unshift(o.pop()),t(-1)}))}}if(window.addEventListener("resize",(function(){setTimeout((()=>{e()}),100)})),e(),document.querySelector(".popap-block")){const u=document.querySelector(".opacity-bg"),a=document.querySelector(".popap-more-info"),m=document.querySelector(".cancel-popap"),y=document.querySelector(".open-popap");function t(){u.style.display="none",a.style.display="none"}u.addEventListener("click",(function(e){e.preventDefault(),t()})),m.addEventListener("click",(function(e){e.preventDefault(),t()})),y.addEventListener("click",(function(e){e.preventDefault(),a.style.display="block",u.style.display="block"}))}let r,n=document.getElementsByName("floor"),l=document.querySelectorAll(".floor");function o(){for(var e=0;e<n.length;e++)if(n[e].checked){for(let t=0;t<l.length;t++)if(l[t].style.display="none",l[t].getAttribute("data-floor-number")==n[e].value)return r=l[t],r.style.display="block",r;break}console.log(r);let t,o=document.querySelector(".btn-arrow-prev"),c=document.querySelector(".btn-arrow-next"),i=r.querySelector(".js-slider"),s=r.querySelectorAll(".slide"),d=s[1].getBoundingClientRect().width,u=document.querySelectorAll(".filter-queue__items input"),a=document.querySelector(".currentSlideBtn");for(let e=0;e<s.length;e++)u[e].dataset.orderNumber=e,s[e].dataset.orderNumber=e;function m(e){e.preventDefault(),a.classList.remove("currentSlideBtn"),e.target.classList.add("currentSlideBtn"),u=Array.from(u),s=Array.from(s),a=document.querySelector(".currentSlideBtn"),t.classList.remove("currentSlide"),s[u.indexOf(a)].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),y(),i.scroll(i.scrollLeft=d*u.indexOf(a),0)}function y(){let e=o.querySelector("span span"),r=c.querySelector("span span"),n=document.querySelector(".plan-nav__title h3");s=Array.from(s),1==s.indexOf(t)?(o.style.visibility="visible",c.style.visibility="visible",n.innerText="II черга",e.innerText="I черга",r.innerText="III черга"):0==s.indexOf(t)?(n.innerText="I черга",o.style.visibility="hidden",c.style.visibility="visible",r.innerText="II черга"):2==s.indexOf(t)&&(n.innerText="III черга",o.style.visibility="visible",c.style.visibility="hidden",e.innerText="II черга")}i.scroll(i.scrollLeft+=d*a.getAttribute("data-order-number"),0),s[a.getAttribute("data-order-number")].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),y(),u.forEach((e=>{e.onclick=m})),c.onclick=function(e){e.preventDefault(),s=Array.from(s);let r=s.indexOf(t);t.classList.remove("currentSlide"),s[r+1].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),y(),u=Array.from(u);let n=u.indexOf(a);a.classList.remove("currentSlideBtn"),u[n+1].classList.add("currentSlideBtn"),a=document.querySelector(".currentSlideBtn"),i.scroll(i.scrollLeft+=d,0)},o.onclick=function(e){e.preventDefault(),s=Array.from(s);let r=s.indexOf(t);t.classList.remove("currentSlide"),s[r-1].classList.add("currentSlide"),t=document.querySelector(".currentSlide"),y(),console.log(o.innerText),u=Array.from(u);let n=u.indexOf(a);a.classList.remove("currentSlideBtn"),u[n-1].classList.add("currentSlideBtn"),a=document.querySelector(".currentSlideBtn"),i.scroll(i.scrollLeft-d,0)}}o(),n.forEach((e=>{e.oninput=o}))}));