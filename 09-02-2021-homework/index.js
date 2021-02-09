
document.forms[0].onkeydown=function(){
    var text = document.getElementsByClassName("form-control")[0].value;
    var errorBody = document.getElementById("error-span");
    if(text.length>=0){
        errorBody.innerText="";      

    }else{
        errorBody.innerText="ERROR! Please insert your text ";  
    }
    
}
document.forms[0].onsubmit = function (e) {
    var errorBody = document.getElementById("error-span");
        errorBody.innerText="";     
    e.preventDefault();
    var text = document.getElementsByClassName("form-control")[0].value;
    if(text.length==0){        
        var errorBody = document.getElementById("error-span");
        errorBody.innerText="ERROR! Please insert your text ";      
    }
        
    e.preventDefault();
    var text = document.getElementsByClassName("form-control")[0].value;
   if(text.length>0){
    var myList = document.querySelector(".myList");
    var li = document.createElement("li");
    var lis = document.querySelectorAll(".myList li");
    li.innerText = text;
   myList.append(li);
    

   }
   
  
   
    document.forms[0].reset();
}

// var ul = document.createElement("ul");
// ul.innerHTML="<li> ERROR! Please insert your text </li>";