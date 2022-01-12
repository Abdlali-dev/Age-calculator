let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function age() {
    let birthDay = input.value;
    let years = 2022 - birthDay;
    let months = years * 12;
    let weeks = months * 4;
    let days = weeks * 7;

    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");



    h1.append("your age in year is : ", years, "years");
    h2.append("your age in month is : ", months, "months");
    h3.append("your age in week is : ", weeks, "weeks");
    h4.append("your age in days is : ", days, "days");

    h1.style.marginTop = "1em";
    if (input.value == "") {
        alert("please enter your birth day")
    } else {
        result.append("_______", input.value, "_______");
        result.append(h1);
        result.append(h2);
        result.append(h3);
        result.append(h4);
        input.value = "";
    }




}

btn.addEventListener("click", age);