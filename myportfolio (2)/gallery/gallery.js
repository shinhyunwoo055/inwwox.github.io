let mainText = document.querySelector('.bowmanlogo');
let TravelText = document.querySelector('.Travellogo');
let MyblogText = document.querySelector('.mybloglogo');
let paranText = document.querySelector('.paranlogo');
let buildingcleanText = document.querySelector('.buildingcleanlogo')

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value>245){
        mainText.style.animation ="disappear 1s ease-out forwards";
        
    }else{
        mainText.style.animation ='slide 1s ease-out';
    }
    
    
    
})
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value>700){
        TravelText.style.animation ="disappear-right 1s ease-out forwards";
    }else{
        TravelText.style.animation ='slide-right 1s ease-out';
    }
})
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value>1212){
        MyblogText.style.animation ="disappear 1s ease-out forwards";
    }else{
        MyblogText.style.animation ='slide 1s ease-out';
    }
})

window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value>1780){
        paranText.style.animation ="disappear-right 1s ease-out forwards";
    }else{
        paranText.style.animation ='slide-right 1s ease-out';
    }
})
window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    console.log("scrollY", value);

    if(value>2200){
        buildingcleanText.style.animation ="disappear 1s ease-out forwards";
    }else{
        buildingcleanText.style.animation ='slide 1s ease-out';
    }

})
$(function(){
    $('.btn-item1').click(function(e){
        e.preventDefault();
        $('.gallery-overlay').fadeIn();
    });
    $('.closebox').click(function(e){
        e.preventDefault();
        $('.gallery-overlay').fadeOut(); 
    });
$('.phonepagebox').slick();

$('.phoneimgbox').click(function(e){
    $('.phoneoverlay').fadeOut(); 
    
})

});
var links = document.querySelectorAll('.lnb a');
Array.prototype.forEach.call(links, function(elem){    
    elem.addEventListener("click", function(){
        Array.prototype.forEach.call(links, function(elem){ 
            elem.classList.remove("active");
        });
        this.classList.add("active")});
    });
