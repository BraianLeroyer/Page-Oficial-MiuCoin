import{S as l}from"./Footer.astro_astro_type_script_index_0_lang.1CalpDrj.js";import"./hoisted.DnFK6dK7.js";import"./_commonjsHelpers.Cpj98o6Y.js";const d=l({origin:"bottom",distance:"60px",duration:3e3,delay:600});d.reveal(".hero__text",{origin:"right"});d.reveal(".img__src",{origin:"left",delay:800});d.reveal(".text__title",{origin:"bottom",delay:800});document.addEventListener("astro:page-load",()=>{const r=document.querySelectorAll(".background");if(window.IntersectionObserver==null){r.forEach(e=>{e.style.backgroundImage="url('"+e.dataset.src+"')"});return}function a(e){e.map(o=>{if(o.isIntersecting){const c=o.target,{style:i,dataset:s}=c;i.backgroundImage="url('"+s.src+"')",n.unobserve(o.target)}})}const n=new IntersectionObserver(a,{rootMargin:"100px"});r.forEach(e=>n.observe(e))});const m=l({origin:"bottom",distance:"60px",duration:3e3,delay:600});m.reveal(".brands__img",{delay:200,interval:200,distance:"100px"});const v=l({origin:"bottom",distance:"60px",duration:3e3,delay:600});v.reveal(".slider",{delay:200,interval:200,distance:"100px"});const t=document.querySelector(".cookie-container"),u=document.querySelector(".cookie-btn"),g=document.querySelector(".cookie-btn-rechazo"),b=localStorage.getItem("cookieBannerDisplayed");!b&&t&&t.classList.add("active");t&&u&&u.addEventListener("click",()=>{t.classList.remove("active"),localStorage.setItem("cookieBannerDisplayed","true")});g&&t&&g.addEventListener("click",()=>{t.classList.remove("active"),localStorage.setItem("cookieBannerDisplayed","true")});t&&setTimeout(()=>{localStorage.getItem("cookieBannerDisplayed")||t.classList.add("active")},2e3);document.addEventListener("astro:page-load",()=>{const r=document.querySelectorAll(".background");if(window.IntersectionObserver==null){r.forEach(e=>{e.style.backgroundImage="url('"+e.dataset.src+"')"});return}function a(e){e.map(o=>{if(o.isIntersecting){const c=o.target,{style:i,dataset:s}=c;i.backgroundImage="url('"+s.src+"')",n.unobserve(o.target)}})}const n=new IntersectionObserver(a,{rootMargin:"100px"});r.forEach(e=>n.observe(e))});
