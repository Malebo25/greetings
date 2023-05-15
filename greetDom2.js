const userInput = document.querySelector(".nameText");
const greetButton = document.querySelector(".greetMeBtn");
const greeter = document.querySelector(".greetUserName");
const chooseLanguage = document.querySelector(".languageType");
const counter = document.querySelector(".counter");
const reseter = document.querySelector(".resetBtn");
greetMyUser = greetMe();

var greetingsCounter = 0;
var namesGreeted = {};
counter.innerHTML = localStorage.getItem("numberOfGreetings");
greetButton.addEventListener("click", function () {
  var checkedLanguageBtn = document.querySelector(
    "input[name='languagetype']:checked"
    );


  let userName = userInput.value.toLowerCase();
  if (checkedLanguageBtn  && userName !==null) {

    let userLanguage = checkedLanguageBtn.value;
  
  
    greeter.innerHTML = greetMyUser.greetUser(userName, userLanguage);
  }
  else if (checkedLanguageBtn == null) {
    greeter.innerHTML = "Please enter name and choose language";
    radio.checked = true;
  }
  else if (userName === null) {

    greeter.innerHTML = "Please enter name";
    radio.checked = true;
  }
  

  
  var pattern = /[a-zA-Z]+/g;
  //when the greet button is pressed check if this user was already greeted before
  //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
  if (namesGreeted[userInput.value.toLowerCase()] === undefined) {
    if (pattern.test(userInput.value.toLowerCase()) &&checkedLanguageBtn !== null) {
      greetingsCounter++;
    }
    //add an entry for the user that was greeted in the Object Map
    namesGreeted[userInput.value.toLowerCase()] = 1;
  } else {
    // update the counter for a specific username
    namesGreeted[userInput.value.toLowerCase()]++;
  }
  localStorage.setItem('numberOfGreetings', greetingsCounter);
  localStorage.getItem('numberOfGreetings');
  counter.innerHTML = localStorage.getItem("numberOfGreetings");



  userInput.value = "";
});
reseter.addEventListener("click", function () {
  greetingsCounter = 0;
  namesGreeted = {};
  counter.innerHTML = 0;
  greeter.innerHTML = "";
  radio.checked = false;
  userInput.value = "";

});