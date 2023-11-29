function myfunc() {
    let d = new Date();
    let day = d.getDay();
    let mon = d.getMonth();
    let dt = d.getDate();
    let year = d.getFullYear();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    
    

    let dayname = ["Sunday" ,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let MonName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    document.getElementById("dayname").innerHTML = dayname[day];
    document.getElementById("month").innerHTML = MonName[mon];
    document.getElementById("year").innerHTML = year; 

    if (dt<10) {
        document.getElementById("minutes").innerHTML= "0" + dt;
    }
    else{
        document.getElementById("minutes").innerHTML= "" + dt ;
    }


    if (min<10) {
        document.getElementById("minutes").innerHTML= "0" + min;
    }
    else{
        document.getElementById("minutes").innerHTML= min ;
    }

    if (sec<10) {
        document.getElementById("seconds").innerHTML= "0" + sec ;
    }
    else{
        document.getElementById("seconds").innerHTML= sec ;
    }

    if(hr > 12){
        document.getElementById("pm").innerHTML= "PM";
        hr -= 12
        document.getElementById("hour").innerHTML="0"+ hr;
    }
    else{
        document.getElementById("am").innerHTML= "AM";
        document.getElementById("hour").innerHTML= hr;
    }

}
setInterval(myfunc,1000);