var button = document.getElementById('start');
var div = document.getElementById('button');

var ready = false;
var start = false;
var buttonexist = true;

//Timer Ready
button.addEventListener("mousedown", e=>{
    if(!start){
        ready = true;
    }
});
div.addEventListener("mousedown", e=>{
    if(!buttonexist){
        if(!start){
            ready = true;
        }
    }

});
//Timer End
div.addEventListener("mousedown", e=>{
    if(!buttonexist){

        if(start){
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
div.addEventListener("mouseup", e=>{
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
    var interval = setInterval(function(){
        if(!start){
            clearInterval(interval);
        }
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