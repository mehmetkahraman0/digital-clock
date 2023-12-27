const hours = document.getElementById("hour");

const minutes = document.getElementById("min");

const second = document.getElementById("second");

const am = document.getElementById("ampm");

function getClock()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12)
    {
        h -= 12;
        ampm = "PM"; 
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    second.innerText = s;
    am.innerText = ampm;
    

    setTimeout(() => {
        getClock();
      }, 1000);
}

getClock();



