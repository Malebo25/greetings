const userInput = document.querySelector(".nameText");
const greetButton = document.querySelector(".greetMeBtn");
const greeter = document.querySelector(".greetUserName");
const chooseLanguage = document.querySelector(".languageType")
const counter=document.querySelector(".counter")

greetMyUser = greetMe();

greetButton.addEventListener('click', function () {
    var checkedLanguageBtn = document.querySelector(
      "input[name='languagetype']:checked"
    );
    let userLanguage = checkedLanguageBtn.value;

    var chosenLanguage = userLanguage;
    if (typeof userInput.value==="string") {
        
        if (chosenLanguage === "english") {
            greeter.innerHTML = greetMyUser.greetEnglish(userInput.value.toLowerCase());
            userInput.value = '';
        } else if (chosenLanguage === "setswana") {
            greeter.innerHTML = greetMyUser.greetTswana(userInput.value.toLowerCase());
            userInput.value = '';
        }
        else if (chosenLanguage === "isixhosa") {
            greeter.innerHTML = greetMyUser.greetXhosa(
              userInput.value.toLowerCase()
            );
            userInput.value = "";
            
        }
        else if (userInput.value === "") {
            userInput.value==="Please enter valid name"
        }
        
    }
    else if (!(typeof userInput.value === "string")) {
        userInput.value === "Please enter valid name";
        
    }
    counter.innerHTML = greetMyUser.getCounter();

    // var namesGreeted = {};

    // //when the greet button is pressed check if this user was already greeted before
    // //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
    // if (namesGreeted[userInput.value.toLowerCase()] === undefined) {
    //   counter.value++;
    //   //add an entry for the user that was greeted in the Object Map
    //   namesGreeted[userInput.value.toLowerCase()] = 1;
    // } else {
    //   // update the counter for a specific username
    //   namesGreeted[userInput.value.toLowerCase()]++;
    // }
    // //update the DOM to display the counter
    // greetingsElem.innerHTML = greetingsCounter;

});