import{S as d,i}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function p(l){const t="https://pixabay.com",r="/api/",a=new URLSearchParams({q:l,key:"46359469-7b013fe590d21d7ac02b102d9",image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}${r}?${a}`;return fetch(e,{headers:{}}).then(n=>n.json())}function f(l,t){const r=l.map(({webformatURL:a,largeImageURL:e,tags:s,likes:n,views:c,comments:u,downloads:m})=>`<li class="gallery-item">
          <a href="${e}" class="gallery-link">
            <img class="gallery-img" src="${a}" alt="${s}" />
          </a>
          <ul class="img-stats">
            <li class="stat-item">
              <span class="stat-label">Likes</span>
              <span class="stat-value" data-likes>${n}</span>
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
              <span class="stat-value" data-downloads>${m}</span>
            </li>
          </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",r)}const o={searchForm:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},g=new d(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});o.searchForm.addEventListener("submit",h);function h(l){l.preventDefault();const t=l.currentTarget.elements.query.value.trim();o.gallery.innerHTML="",o.loader.classList.remove("visually-hidden"),p(t).then(r=>{const a=r.hits;a.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:350,color:"#a3b6fd",closeOnEscape:!0,closeOnClick:!0,position:"topRight"}):(o.gallery.innerHTML="",f(a,o.gallery),g.refresh())}).catch(r=>{i.error({message:"Something went wrong. Please try again later.",maxWidth:350,closeOnEscape:!0,closeOnClick:!0,position:"topRight"})}).finally(()=>{o.loader.classList.add("visually-hidden"),o.searchForm.reset()})}
//# sourceMappingURL=index.js.map
