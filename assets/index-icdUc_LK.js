(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.getElementById("sign-up"),u=document.getElementById("success"),s=document.getElementById("sign-up-form"),a=document.getElementById("email"),m=document.getElementById("success-email"),f=document.getElementById("dismiss");function c(r){r.classList.toggle("hidden")}function g(r){return r.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}f.addEventListener("click",()=>{s.reset(),c(u),c(d)});s.addEventListener("submit",r=>{r.preventDefault();var n=new FormData(s).get("email"),o=g(n);o?(s.classList.remove("error"),a.setAttribute("aria-invalid",!1),m.innerHTML=n,c(d),c(u)):(s.classList.add("error"),a.setAttribute("aria-invalid",!0))});