let sunIcon = document.getElementById("sunIcon");
let switchIcon = document.getElementById("switchIcon");
let switchIconTwo = document.getElementById("switchIconTwo");
let mainDivId = document.getElementById("mainDivId");
let textOne = document.getElementById("textOne");
let textTwo = document.getElementById("textTwo");
let textThree = document.getElementById("textThree");
let firstIcon = document.getElementById("firstIcon");
let firstText = document.getElementById("firstText");


let x = true;
sunIcon.addEventListener("click", () => {
    if (x == true) {
        switchIcon.style.display = "none";
        switchIconTwo.style.display = "flex";
        mainDivId.style.backgroundColor = "white";
        textOne.style.color = "black";
        textTwo.style.color = "black";
        textThree.style.color = "black";
        x = false;
    } else {
        switchIconTwo.style.display = "none";
        switchIcon.style.display = "flex";
        mainDivId.style.backgroundColor = "#111";
        textOne.style.color = "white";
        textTwo.style.color = "white";
        textThree.style.color = "white";
        x = true;
    }
})

// firstIcon.addEventListener("mouseover", () => {
//     firstText.style.display = "flex"
// })