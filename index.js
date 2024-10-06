import{S as m,i}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function p(l){const t="https://pixabay.com",a="/api/",r=new URLSearchParams({q:l,key:"46359469-7b013fe590d21d7ac02b102d9",image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${a}?${r}`;return fetch(e,{headers:{}}).then(o=>o.json())}function f(l,t){const a=l.map(({webformatURL:r,largeImageURL:e,tags:s,likes:o,views:c,comments:u,downloads:d})=>`<li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img class="gallery-img" src="${r}" alt="${s}" />
          </a>
          <ul class="img-stats">
            <li class="stat-item">
              <span class="stat-label">Likes</span>
              <span class="stat-value" data-likes>${o}</span>
            </li>
            <li class="stat-item">
              <span class="stat-label">Views</span>
              <span class="stat-value" data-views>${c}</span>
            </li>
            <li class="stat-item">
              <span class="stat-label">Comments</span>
              <span class="stat-value" data-comments>${u}</span>
            </li>
            <li class="stat-item">
              <span class="stat-label">Downloads</span>
              <span class="stat-value" data-downloads>${d}</span>
            </li>
          </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",a)}const n={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},g=new m(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});n.searchForm.addEventListener("submit",h);function h(l){l.preventDefault();const t=l.currentTarget.elements.query.value.trim();n.gallery.innerHTML="",n.loader.classList.remove("visually-hidden"),p(t).then(a=>{const r=a.hits;r.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:350,color:"#a3b6fd",closeOnEscape:!0,closeOnClick:!0,position:"topRight"}):(n.gallery.innerHTML="",f(r,n.gallery),g.refresh())}).catch(a=>{i.error({message:a,closeOnEscape:!0,closeOnClick:!0,position:"topRight"})}).finally(()=>{n.loader.classList.add("visually-hidden"),n.searchForm.reset()})}
//# sourceMappingURL=index.js.map
