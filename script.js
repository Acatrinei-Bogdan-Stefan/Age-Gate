const greyScreen = document.querySelector(".grey-screen");
const greenScreen = document.querySelector(".main-body-green");
const redScreen = document.querySelector(".main-body-red");
const popUpContainer = document.querySelector(".pop-up-container");
const bodyElement = document.querySelector("body");

function closeing(){

    
    let presentDate = new Date();

    const day = document.getElementById("daySelection").value;
    const month = document.getElementById("monthSelection").value;
    const year = document.getElementById("yearSelection").value;

    let currentDay = presentDate.getDate();
    let currentMonth = presentDate.getMonth();
    let currentYear = presentDate.getFullYear();

    let days = currentDay - day;
    let months = currentMonth - month;
    let years = currentYear - year;
    age = (years * 365) + (months * 31) + days;
    result = age / 365;

    presentDate.setHours(0,0,0,0);

    if (result.toFixed() < 18){
        bodyElement.style = "background-color: red;";
        popUpContainer.style = "display:none;";
        redScreen.style = "display:flex;";
        greenScreen.style = "display:none;";
    }else{
        bodyElement.style = "background-color: green;";
        popUpContainer.style = "display:none;";
        redScreen.style = "display:none;";
        greenScreen.style = "display:flex;";
    }

}
