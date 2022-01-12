console.log("working");

var refreshing = true;

function intoAction(){
    refreshing = false;
    var tag = document.getElementById("card");
    tag.style.opacity = 1;

    var e = document.getElementById("wakeuptime");
    var text1 = e.options[e.selectedIndex].text;
    var val1 = e.options[e.selectedIndex].value;
    var valued1 =  val1.slice(0,2);
    var muhurt1 = val1.slice(-2)
    muhurt1 = `'${muhurt1}'`;
    console.log(valued1, muhurt1);

    // console.log(text1);
    var f = document.getElementById("lunchtime");
    var text2 = f.options[f.selectedIndex].text;
    var val2 = f.options[f.selectedIndex].value;
    var valued2 =  val2.slice(0,2);
    var muhurt2 = val2.slice(-2)
    muhurt2 = `'${muhurt2}'`;
    console.log(valued2, muhurt2);


    // console.log(text2);
    var g = document.getElementById("naptime");
    var text3 = g.options[g.selectedIndex].text;
    var val3 = g.options[g.selectedIndex].value;
    var valued3 =  val3.slice(0,2);
    var muhurt3 = val3.slice(-2)
    muhurt3 = `'${muhurt3}'`;
    console.log(valued3, muhurt3);

    console.log(text3);
    var idExist = document.getElementById("wakeUpTimeText");
    if(idExist){
        idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}`;
    }
    else{
        var element = document.createElement("div");
        element.setAttribute("id", "wakeUpTimeText");
        element.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}`;
        tag.appendChild(element);
    }

    var rTClock = new Date();
    var hours = rTClock.getHours();
    var mins = rTClock.getMinutes();
    var secs = rTClock.getSeconds();
    document.getElementById("clock-hours").innerHTML = hours ;
    document.getElementById("clock-mins").innerHTML = mins ;
    document.getElementById("clock-secs").innerHTML = secs ;
    var t = setTimeout(intoAction,1000); 

    // var hours = 6;
    // var amPm = "PM";
    var amPm = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours-12 : hours;
    var amPms = amPm;
    amPms = `'${amPms}'`;
    // hours = ("0" + hours).slice(-2);
    // mins = ("0" + mins).slice(-2);
    // secs = ("0" + secs).slice(-2);
    console.log(hours, mins, secs, amPms, muhurt1, muhurt2, muhurt3);
    if((valued1 == hours) && (muhurt1 == amPms)){
        document.getElementById("noonmsg").innerHTML = "GOOD MORNING!!! HAVE a GREAT DAY.. ";
        document.getElementById("changeimage").innerHTML = 
        `<img src="./BREAKFAST.jpg" alt="" srcset="" id="changeimage">`;
        document.getElementById("lunchtimequote").innerHTML = "Grab some Healthy BreakFast!!!"
    }
    else if ((valued2 == hours) && (muhurt2 == amPms)){
        document.getElementById("noonmsg").style.fontSize = "22px";
        document.getElementById("noonmsg").innerHTML = "GOOD AFTERNOON!!! TAKE SOME SLEEP..";
        document.getElementById("lunchtimequote").innerHTML = "Go get some Lunch!!!"
        document.getElementById("changeimage").innerHTML = 
        `<img src="./lunch_image.svg" alt="" srcset="" id="changeimage">`;
    }
    else if((valued3 == hours) && (muhurt3 == amPms)){
        document.getElementById("noonmsg").innerHTML = "GOOD NIGHT!!! SLEEP TIGHT...";
        document.getElementById("changeimage").innerHTML = 
        `<img src="./Dinner.jpg" alt="" srcset="" id="changeimage">`;
        document.getElementById("lunchtimequote").innerHTML = "Finish your dinner and Go to Bed!!";   
    }
    else{
        console.log("No match");
    }
}
 
function realTime(){
    if(refreshing == true){
        var rTClock = new Date();
        var hours = rTClock.getHours();
        var mins = rTClock.getMinutes();
        var secs = rTClock.getSeconds();
        // var hours = 7;
        // var amPm = "PM";
        // console.log(hours);
        var amPm = (hours < 12) ? "AM" : "PM";
        hours = (hours > 12) ? hours-12 : hours;

        hours = ("0" + hours).slice(-2);
        mins = ("0" + mins).slice(-2);
        secs = ("0" + secs).slice(-2);
        console.log(hours, amPm);
        document.getElementById("clock-hours").innerHTML = hours ;
        document.getElementById("clock-mins").innerHTML = mins ;
        document.getElementById("clock-secs").innerHTML = secs ;
        document.getElementById("setAmPm").innerHTML = amPm ;
        var t = setTimeout(realTime,1000);

        if((hours >= 4) && (hours <= 12) && (amPm == "AM") ){
            document.getElementById("noonmsg").innerHTML = "GOOD MORNING!!! HAVE a GREAT DAY AHEAD... ";
            document.getElementById("noonmsg").style.fontSize = "22px"
            document.getElementById("changeimage").innerHTML = 
            `<img src="./BREAKFAST.jpg" alt="" srcset="" id="changeimage">`;
            document.getElementById("lunchtimequote").innerHTML = "Grab some Healthy BreakFast!!!"

        }
        else if((hours >= 0) && (amPm == "AM") || (hours < 5)){
            document.getElementById("noonmsg").innerHTML = "GOOD NIGHT!!! SLEEP TIGHT...";
            document.getElementById("changeimage").innerHTML = 
            `<img src="./Dinner.jpg" alt="" srcset="" id="changeimage">`;
            document.getElementById("lunchtimequote").innerHTML = "Finish your dinner and Go to Bed!!";
        }
        else if((hours >= 12) && (amPm == "PM") || (hours < 5) ){
            document.getElementById("noonmsg").innerHTML = "GOOD AFTERNOON!!! TAKE SOME REST...";
            document.getElementById("noonmsg").style.fontSize = "22px"
            document.getElementById("lunchtimequote").innerHTML = "Go get some Lunch!!!"
            document.getElementById("changeimage").innerHTML = 
            `<img src="./lunch_image.svg" alt="" srcset="" id="changeimage">`;
        }
        else if((hours >= 5) && (hours <= 8) && (amPm == "PM")){
            document.getElementById("noonmsg").innerHTML = "GOOD EVENING!!! ";
            document.getElementById("changeimage").innerHTML = 
            `<img src="./Evening.jpg" alt="" srcset="" id="changeimage">`;
            document.getElementById("lunchtimequote").innerHTML = "Stop Yawning, get some tea..Its Just Evening!"
            document.getElementById("lunchtimequote").style.fontSize = "24px"
        }
        
        else{
            console.log("nothing");
        }
    }
}
