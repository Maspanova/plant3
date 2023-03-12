"use strict"
console.log("Вёрстка соответствует макету. Ширина экрана 768px +24 \n блок <header> +2 \n секция welcome +3\n секция about +4\nсекция service +4\nсекция prices +4\nсекция contacts +4\nблок <footer> + 3\n\nВёрстка соответствует макету. Ширина экрана 380px +24\nблок <header> +2\nсекция welcome +3\nсекция about +4\nсекция service +4\nсекция prices +4\nсекция contacts +4\nблок <footer> + 3\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется:\nне обрезается и не удаляется +15\nнет полосы прокрутки при ширине страницы от 1440рх до 380px +7\nнет полосы прокрутки при ширине страницы от 380px до 320рх +8\nНа ширине экрана 380рх и меньше реализовано адаптивное меню +22\n(Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)\nпри ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку плавно появляется адаптивное меню +4\nадаптивное меню соответствует цветовой схеме макета +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4");
const IconMenu = document.querySelector('.menu-burger');
if (IconMenu) {
    const MenuBody = document.querySelector('.heder_menu');
    IconMenu.addEventListener("click",function(e) {
        document.body.classList.toggle('_lock');
IconMenu.classList.toggle('_active');
MenuBody.classList.toggle('_active');
    });
    
}

/* эффект размытости*/

function imageFilter(bt) {
    var im = bt.value;
    console.log(im)

    if (im == 1) {
        for (var i = 0; i < 3; i ++) {
        document.getElementsByClassName("Planting")[i].style.filter = 'Blur(2px)'};
        for (var i = 0; i < 2; i ++) {
        document.getElementsByClassName("Garden")[i].style.filter = 'Blur(0px)'};

        document.getElementsByClassName("Lamp")[0].style.filter = 'Blur(2px)'
        }  
     
      else 
        if (im == 2) {
            for (var i = 0; i < 3; i ++) {
                document.getElementsByClassName("Planting")[i].style.filter = 'Blur(2px)'
                };
                for (var i = 0; i < 2; i ++) {
                document.getElementsByClassName("Garden")[i].style.filter = 'Blur(2px)'
            };
        
                document.getElementsByClassName("Lamp")[0].style.filter = 'Blur(0px)'
                }  
        else 
        if (im == 3) {
        for (var i = 0; i < 4; i ++) for (var i = 0; i < 3; i ++) {
            document.getElementsByClassName("Planting")[i].style.filter = 'Blur(0px)'
            };
            for (var i = 0; i < 2; i ++) {
            document.getElementsByClassName("Garden")[i].style.filter = 'Blur(2px)'};
    
            document.getElementsByClassName("Lamp")[0].style.filter = 'Blur(2px)'
            }  
        
        else 
        
        for (var i = 0; i < 10; i ++) {
            document.getElementsByClassName("Garden")[i].style.filter= 'Blur (0px)';
            document.getElementsByClassName("Planting")[i].style.filter = 'Blur(0px)';
            document.getElementsByClassName("Lamp")[i].style.filter = 'Blur(0px)'
            }
       }


  
/*select*/

function Selected(a) {
    var label = a.value;
    if (label==10) {
        document.getElementById("contact_Canandaigua").style.display='flex';
        document.getElementById("contact_New_York").style.display='none';   
        document.getElementById("contact_Yonkers").style.display='none'; 
        document.getElementById("contact_Sherrill").style.display='none';  
          
    } else if (label==20) {
        document.getElementById("contact_Canandaigua").style.display='none';
        document.getElementById("contact_New_York").style.display='flex';   
        document.getElementById("contact_Yonkers").style.display='none'; 
        document.getElementById("contact_Sherrill").style.display='none';   
    }  else if (label==30) {
        document.getElementById("contact_Canandaigua").style.display='none';
        document.getElementById("contact_New_York").style.display='none';   
        document.getElementById("contact_Yonkers").style.display='flex'; 
        document.getElementById("contact_Sherrill").style.display='none';   
    }  else if (label==40) {
        document.getElementById("contact_Canandaigua").style.display='none';
        document.getElementById("contact_New_York").style.display='none';   
        document.getElementById("contact_Yonkers").style.display='none'; 
        document.getElementById("contact_Sherrill").style.display='flex';   
    } 
    
    else {
        document.getElementById("contact_Canandaigua").style.display='none';
        document.getElementById("contact_New_York").style.display='none';   
        document.getElementById("contact_Yonkers").style.display='none'; 
        document.getElementById("contact_Sherrill").style.display='none';   
    }
     
}