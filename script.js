const hoursElement = document.getElementById("Hour");
const minutesElement = document.getElementById("Min")
const secondsElement = document.getElementById("Sec");
const ampmElement = document.getElementById("AMPM");

function digitalClock()
{
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM"

    if(hr>12)
    {
        hr = hr - 12;
        ampm = "PM";
    }
    
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    hoursElement.innerText = hr;
    minutesElement.innerText = min;
    secondsElement.innerText = sec;
    ampmElement.innerText = ampm;


    setTimeout(() => 
    {
        digitalClock()
    } , 1000)
}

digitalClock();