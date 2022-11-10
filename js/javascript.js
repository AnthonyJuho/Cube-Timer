var button = document.getElementById('start');
var div = document.getElementById('button');

var ready = false;
var start = false;
var buttonexist = true;
var interval;

//Timer Ready
button.addEventListener("mousedown", e=>{
    if(!start){
        ready = true;
    }
});
document.addEventListener("mousedown", e=>{
    if(!buttonexist){
        if(!start){
            ready = true;
        }
    }

});
//Timer End
document.addEventListener("mousedown", e=>{
    if(!buttonexist){

        if(start){
            clearInterval(interval);
            start=false;
        }
    }
});
//Timer Start
button.addEventListener("mouseup", e=>{
    if(ready){
        start = true;
        ready = false;
        buttonexist = false;
        StartEvent();
    }
});
document.addEventListener("mouseup", e=>{
    if(!buttonexist){

        if(ready){
            start = true;
            ready = false;
            StartEvent();
        }
    }
});

function StartEvent(){

    div.innerHTML = '<div id="timer">0</div>';
    var time = 0;
    interval = setInterval(function(){
        time++;
        var sign;
        if(time%10 == 0){
            sign = time/10+".0";
        } else {
            sign = time/10;
        }
        div.innerHTML = '<div id="timer">'+sign+'</div>';
    },100);

}
