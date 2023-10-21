
/*سرگرمی سایت */


var logos = {
    
};
var logoContainer = document.getElementById("logoContainer");
var languageSelect = document.getElementById("languageSelect");
var result = document.getElementById("result");

var logos = {
    javascript: "../pics/js.png",
    python: "../pics/python.png",
    css: "../pics/css.png",
    java: "../pics/java.png"
};

var currentLogo = getRandomLogo();

function getRandomLogo() {
    var keys = Object.keys(logos);
    var randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}

function changeLogo() {
    currentLogo = getRandomLogo();
    displayLogo(currentLogo);
}

function checkAnswer() {
    var selectedLanguage = languageSelect.value;

    if (selectedLanguage === "") {
        result.textContent = "زبان رو انتخاب کن ";
    } else if (selectedLanguage === currentLogo) {
        result.textContent = "درسته !!!!! زبان برنامه نویسی  " + selectedLanguage +" بود";
        changeLogo();
       
    } else {
        result.textContent = "غلطه دوباره انتخاب کن";
    }
}

function displayLogo(language) {
    logoContainer.style.backgroundImage = "url(" + logos[language] + ")";
}



displayLogo(currentLogo);
