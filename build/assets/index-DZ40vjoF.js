(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();let i=document.getElementById("nav-btn"),r=document.getElementById("nav-menu");i&&i.addEventListener("click",()=>{console.log("Nav Button is Vissible");let s=document.getElementById("nav-btn-menu-icon"),n=document.getElementById("nav-btn-cross-icon");r&&r.classList.toggle("hide-menu"),s.classList.toggle("hidden"),n.classList.toggle("hidden")});window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");let d=document.getElementById("theme_btn"),o=document.getElementById("theme_icon");d&&d.addEventListener("click",()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),o.classList.toggle("icon-sun"),o.classList.toggle("icon-moon")):(document.documentElement.classList.add("dark"),o.classList.toggle("icon-sun"),o.classList.toggle("icon-moon"))});const a=document.getElementById("slide-left"),g=document.getElementById("slide-right"),m=document.querySelector("#blogs-list");a.addEventListener("click",()=>{m.scrollBy({left:-300,behavior:"smooth"})});g.addEventListener("click",()=>{m.scrollBy({left:300,behavior:"smooth"})});
//# sourceMappingURL=index-DZ40vjoF.js.map