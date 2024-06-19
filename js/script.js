// window.alert("Hello")    //Test

// --------------------------------------------------------------------------------------------------------------------------
function myFunction(){
    let stste2 = document.getElementById("password");
    if(stste2.type === "password"){
        stste2.type = "text";
        document.getElementById("show").style.color = "#9a9a9a";
    }
    else{
        stste2.type = "password";
        document.getElementById("show").style.color = "red";
    }
}

// --------------------------------------------------------------------------------------------------------------------------
function myFunction2(){
    let stste2 = document.getElementById("password2");

    if(stste2.type === "password"){
        stste2.type = "text";
        
        document.getElementById("hide2").style.display = "inline-block";
        document.getElementById("hide2").style.color = "red";
        document.getElementById("show2").style.display = 'none';
    }
    else{
        stste2.type = "password";
        document.getElementById("hide2").style.display ="none";
        document.getElementById("show2").style.display = 'inline-block';
        document.getElementById("show2").style.color = "rgb(150, 149, 149)";
    }
}


// --------------------------------------------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5
$(".btn3").click(function() {
    $(".input2").toggleClass("click")
    $(".span-search2").toggleClass("click")
  })
  








