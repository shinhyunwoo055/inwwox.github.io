// main.js
let pageable = new Pageable(".container");
var links = document.querySelectorAll('.lnb a');
Array.prototype.forEach.call(links, function(elem){    
    elem.addEventListener("click", function(){
        Array.prototype.forEach.call(links, function(elem){ 
            elem.classList.remove("active");
        });
        this.classList.add("active")});
    })