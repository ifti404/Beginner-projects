const slideShowElements = document.querySelectorAll(".element");


let counting = 1;
setInterval(()=>{
 counting++;


 let currentElement = document.querySelector(".current");
   currentElement.classList.remove("current");



 if(counting>slideShowElements.length){
  slideShowElements[0].classList.add("current")
  counting = 1;
 } else{
  currentElement.nextElementSibling.classList.add("current");

 }


},3000);
