const hamberger=document.querySelector("header .navbar-toggler"),navbarMenu=document.querySelector("header .navbar-collapse"),overlay=document.querySelector("header .overlay"),body=document.querySelector("body"),limenu=document.querySelectorAll("header .navbar-nav li"),closeLast=document.querySelectorAll(".dropdown-last .col-md-12 > p + span"),openDropLast=document.querySelectorAll(".navbar .subdropdown3 > li");openDropLast.forEach(a=>{a.addEventListener("click",a=>{let b=a.target.closest("ul").querySelector("a.dropdown-t.show"),c=a.target.closest("ul").querySelector(".dropdown-last.show"),d=a.target.closest("li").querySelector("a.dropdown-t"),e=a.target.closest("li").querySelector(".dropdown-last");d.classList.contains("show")&&e.classList.contains("show")||((null!=b||null!=c)&&(b.classList.remove("show"),c.classList.remove("show")),d.classList.add("show"),e.classList.add("show"))})});var prevScrollpos=window.pageYOffset;window.onscroll=function(){var a=window.pageYOffset;prevScrollpos>a?document.getElementById("navbar").style.top="0":document.getElementById("navbar").style.top="-150px",prevScrollpos=a},document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".dropdown-menu").forEach(function(a){a.addEventListener("click",function(a){a.stopPropagation()})})}),hamberger.addEventListener("click",()=>{navbarMenu.classList.contains("show")||(overlay.classList.toggle("active"),body.classList.toggle("overflow"))}),overlay.addEventListener("click",()=>{navbarMenu.classList.contains("show")&&(navbarMenu.classList.remove("show"),overlay.classList.remove("active"),body.style.overflow="auto")}),closeLast.forEach(a=>{a.addEventListener("click",b=>{let a=b.target.closest(".dropdown-last");a.classList.contains("show")&&a.classList.remove("show")})})
