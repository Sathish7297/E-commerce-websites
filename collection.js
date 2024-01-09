const searchbox=document.getElementById("search")
const productscontainer=document.getElementById("products")
const storing=productscontainer.querySelectorAll("div")
function check(event){
    const enteredvalue=event.target.value
    for(var i=0;i<storing.length;i++){
       if(storing[i].textContent.toUpperCase().indexOf(enteredvalue.toUpperCase())<0){
        storing[i].style.display="none"
        // alert("stock not available right now ,!")
      
        
       }
       else{
        storing[i].style.display="block"
       }
}
}