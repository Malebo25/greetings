const userInput = document.querySelector(".nameText");
const greetButton = document.querySelector(".greetMeBtn");
const greeter = document.querySelector(".greetUserName");
const chooseLanguage = document.querySelector(".languageType");
const counter = document.querySelector(".counter");
const reseter = document.querySelector(".resetBtn");


greetMyUser = greetMe(localStorage.getItem("numberOfGreetings"));

counter.innerHTML = localStorage.getItem("numberOfGreetings");
greetButton.addEventListener("click", function () {
  greeter.classList.remove("danger");
  var checkedLanguageBtn = document.querySelector(
    "input[name='languagetype']:checked"
  );

  let userName = userInput.value.toLowerCase();
  if (checkedLanguageBtn !== null ) {
    let userLanguage = checkedLanguageBtn.value;

    greeter.innerHTML = greetMyUser.greetUser(userName, userLanguage);
   } else if (checkedLanguageBtn === null ) {
  //   greeter.innerHTML = greetMyUser.error(userName, checkedLanguageBtn.value);
  greeter.innerHTML = greetMyUser.error(userName, checkedLanguageBtn);
  greeter.classList.add("danger");
  
  }
  else if (userName === "") {
    greeter.innerHTML = greetMyUser.error(userName, checkedLanguageBtn);
    
  }
  

  
  greetMyUser.namesAndCounter(userName, checkedLanguageBtn);
  localStorage.setItem("numberOfGreetings", greetMyUser.getCounter());
  localStorage.getItem("numberOfGreetings");
  counter.innerHTML = localStorage.getItem("numberOfGreetings");
  
  userInput.value = "";
  chooseLanguage.checked = false;
});
reseter.addEventListener("click", function () {
  localStorage.clear();
  // namesGreeted = {};
  // counter.innerHTML = 0;
  // greeter.innerHTML = "";
  location.reload();
  // chooseLanguage.checked = false;
  // userInput.value = "";
});
