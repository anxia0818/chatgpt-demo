import"./Layout.astro_astro_type_script_index_0_lang.a657d0a3.js";async function n(){const e=localStorage.getItem("pass");(await(await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pass:e})})).json()).code!==0&&(window.location.href="/password")}n();const r=document.getElementById("themeToggle"),s=document.querySelector(".theme_toggle_circle1"),c=document.querySelector(".theme_toggle_circle2"),t=()=>{document.documentElement.classList.contains("dark")??localStorage.getItem("theme")==="dark"?(s.setAttribute("r","9"),c.setAttribute("r","9")):(s.setAttribute("r","5"),c.setAttribute("r","5"))},a=()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");e.addEventListener("change",()=>{document.documentElement.classList.toggle("dark",e.matches),t()})};a();t();const l=()=>{const e=document.documentElement;e.classList.toggle("dark");const o=e.classList.contains("dark");localStorage.setItem("theme",o?"dark":"light"),t()};r.addEventListener("click",l);
