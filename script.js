var btn = document.querySelector("button")
var text =document.querySelector("#input")
var para = document.querySelector("#para")
btn.addEventListener("click",function(){
    var icon = document.createElement("i")
    var div1 = document.createElement("div")
    var del = document.createElement("button")
    del.innerHTML = "delete"
    icon.innerHTML ='<i class="fa-regular fa-circle"></i>'
    var span = document.createElement("span");
    span.innerHTML = text.value;
    span.style.display = "inline-block";
    span.style.maxWidth = "300px"
    span.style.overflowX = "auto"
   div1.append(icon,span,del)
   del.addEventListener("click",function(){
    div1.remove()
   })
   icon.addEventListener("click",function(){
    span.style.textDecoration = "line-through"
   })
   icon.addEventListener("dblclick",function(){
    span.style.textDecoration = "none"
   })
   para.appendChild(div1)
})