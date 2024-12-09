// FOR TIME
function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let time = `${hour}:${minute}:${seconds}`;
    document.getElementById("show").innerText = time;

    setTimeout(showTime,1000);
}
showTime();

// FOR DATE
function showDate() {
    let dat = new Date();
    let year = dat.getFullYear();
    let month = dat.getMonth() + 1;
    let day = dat.getDate();

    let full_date = `${year}-${month}-${day}`;
    document.getElementById("show_date").innerText = full_date;
}

showDate();