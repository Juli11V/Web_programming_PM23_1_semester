var scene=document.getElementById("scene"),parallaxInstance=new Parallax(scene);$(".card").on("click",(function(){var e=$(this).parent().index();$(".card").removeClass("card-active"),$(this).addClass("card-active"),$(".tab-content").removeClass("active"),$(".tab-content").eq(e).addClass("active")}));var mySwiper=new Swiper(".swiper-container",{direction:"horizontal",spaceBetween:50,slidesPerView:3,loop:!0,stopOnLastSlide:!1,autoplay:{delay:2e3}});function init(){var e=new ymaps.Map("map",{center:[56.311748732999206,44.017157394555866],controls:["zoomControl","geolocationControl"],zoom:10}),a=new ymaps.Placemark([56.311748732999206,44.017157394555866],{},{iconImageSize:[32,40]});e.balloon.open([51.85,38.37],"Содержимое балуна",{closeButton:!1}),e.geoObjects.add(a)}$(".hamburger").on("click",(function(){$(".head__menu").toggle()})),$("#closeMenu").on("click",(function(){$(".head__menu").hide()})),$(window).on("scroll load resize",(function(){var e=$(window).scrollTop();e>0&&$(document).width()>998?$(".head").addClass("active"):e<1&&$(".head").removeClass("active")})),$.validator.addMethod("regex",(function(e,a,n){return new RegExp(n).test(e)}),"Please check your input."),$("form").validate({rules:{firstName:{required:!0,regex:"[A-Za-z]{1,32}"},phoneNumber:{digits:!0,required:!0,minlength:10,maxlength:11,regex:"[0-9]+"}},messages:{firstName:"Введите ваше имя правильно",phoneNumber:"Введите ваш номер"}}),ymaps.ready(init);