const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/matara_edited.png") {
        myImage.setAttribute("src",
        "images/logos.png");
    } else {
        myImage.setAttribute("src", "images/matara_edited.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your filthy name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}, are you looking to board in Matara?`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}, are you looking to board in Matara?`;
}

myButton.onclick = () => {
    setUserName();
};