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