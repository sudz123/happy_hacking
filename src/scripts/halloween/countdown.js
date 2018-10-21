/*
   Displaying the time left for Halloween
*/

var waitdate=new Date("Oct 31, 2018 00:00:00").getTime();

//function to update the timer every second

var x=setInterval(function(){
       var rightnow=new Date().getTime();
       var distance=waitdate-rightnow;
       var days=Math.floor(distance/(1000*60*60*24));
       var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
       var min=Math.floor((distance%(1000*60*60))/(1000*60));
       var sec=Math.floor((distance%(1000*60))/1000);
       document.getElementById("countdown").innerHTML=days+"d "+hours+"h "+min+"m "+sec+"s";
       if(distance<0){
                clearInterval(x);
                document.getElementById("countdown").innerHTML="Happy Halloween!";
        }
},1000);