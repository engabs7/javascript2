var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var timeZone = "AM";

// Time Method

if(h===0){
    h-12;
    document.getElementById("showTime").style.color="black";

}else{
    h = h-12;
    timeZone="PM";
    document.getElementById("mainNav").style.backgroundColor="#212F3D";
    document.getElementById("showTime").style.color="snow";
}

var t = h + ":" + m + " " + timeZone;
document.getElementById("showTime").innerHTML= t;


// Array-Shift Methos

function arr_shift(){
    var inputText = document.getElementById("txt-input").value;
    const arr = inputText.split(" ");
    arr.shift();
    const new1 = arr.toString();
    document.getElementById("output").innerHTML = new1;

}

// Array-Pop Methos

function arr_pop(){
    var inputText = document.getElementById("txt-input").value;
    const arr = inputText.split(" ");
    arr.pop();
    const new1 = arr.toString();
    document.getElementById("output").innerHTML = new1;

}

// Slice Method

function slic(){
    var inputText = document.getElementById("txt-input").value;
    var slc = inputText.slice(6,13);
    document.getElementById("output").innerHTML = slc;
}

// Substring Method

function substr(){
    var inputText = document.getElementById("txt-input").value;
    var subStr = inputText.substring(1,3);
    document.getElementById("output").innerHTML = subStr;
}

// Splice Method

function splc(){
    var inputText = document.getElementById("txt-input").value;
    var sp = inputText.splice(7,0,"Mohammed","Younus");
    document.getElementById("output").innerHTML = sp;
}























function p1(){
    document.getElementById("skill-1").style.height="150px";
    document.getElementById("p1").style.visibility="hidden";
    document.getElementById("p11").style.visibility="visible";
    document.getElementById("pt").style.visibility="visible";
      
}
function p2(){
    document.getElementById("skill-2").style.height="150px";
    document.getElementById("p2").style.visibility="hidden";
    document.getElementById("p22").style.visibility="visible";  
    document.getElementById("ct").style.visibility="visible";

}
function p3(){
    document.getElementById("skill-3").style.height="150px";
    document.getElementById("p3").style.visibility="hidden";
    document.getElementById("p33").style.visibility="visible";  
    document.getElementById("lt").style.visibility="visible";

}
function p11(){
    document.getElementById("skill-1").style.height="50px";
    document.getElementById("p1").style.visibility="visible";
    document.getElementById("p11").style.visibility="hidden";
    document.getElementById("pt").style.visibility="hidden";

}
function p22(){
    document.getElementById("skill-2").style.height="50px";
    document.getElementById("p2").style.visibility="visible";
    document.getElementById("p22").style.visibility="hidden";
    document.getElementById("ct").style.visibility="hidden";

}
function p33(){
    document.getElementById("skill-3").style.height="50px";
    document.getElementById("p3").style.visibility="visible";
    document.getElementById("p33").style.visibility="hidden";
    document.getElementById("lt").style.visibility="hidden";

}
