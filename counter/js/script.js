let counter = 0;
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var container=document.getElementById("container")

btn2.addEventListener("click", () => {
  counter++;

  document.getElementById("span").innerHTML = counter;

  
  if(counter>15){
    container.style.background="purple"

  }
});
btn1.addEventListener("click", () => {
  if (counter > 0) {
    counter--;

    document.getElementById("span").innerHTML = counter;

  }
  
  if(counter<5){
    container.style.background="red"

  }
});
