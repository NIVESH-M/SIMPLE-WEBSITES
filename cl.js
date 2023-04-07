function ca(){
    var a=parseFloat(document.querySelector("#inp1").value);
    var b=parseFloat(document.querySelector("#inp2").value);
    var c=document.querySelector("#option").value;
    var d=0;
    if(c=="add"){
        d=a+b;
    }
    else if(c=="sub"){
        d=a-b;
    }
    else if(c=="mul"){
        d=a*b;
    }
    else if(c=="div"){
        d=a/b;
    }
    document.querySelector("#result").innerHTML=d;
}