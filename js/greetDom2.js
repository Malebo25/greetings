const userInput = document.querySelector(".nameText");
const greetButton = document.querySelector(".greetMeBtn");
const greeter = document.querySelector(".greetUserName");
const chooseLanguage = document.querySelector(".languageType");
const counter = document.querySelector(".counter");
const reseter = document.querySelector(".resetBtn");
var letters = /^[a-zA-Z]+$/;

greetMyUser = greetMe(localStorage.getItem("numberOfGreetings"));

counter.innerHTML = localStorage.getItem("numberOfGreetings");
greetButton.addEventListener("click", function () {
  greeter.classList.remove("danger");
  greeter.classList.remove("success");
  var checkedLanguageBtn = document.querySelector(
    "input[name='languagetype']:checked"
  );

  let userName = userInput.value.toLowerCase();

  let name = userName.charAt(0).toUpperCase() + userName.slice(1);
  if (!userName && checkedLanguageBtn) {
    let userLanguage = checkedLanguageBtn.value;

    greeter.innerHTML = greetMyUser.greetUser(name, userLanguage);
    greeter.classList.add("danger");
     setTimeout(function () {
       greeter.innerHTML = "";
     }, 3000);
  } else if (letters.test(userName) === false) {
    let userLanguage = checkedLanguageBtn;

    greeter.innerHTML = greetMyUser.greetUser(name, userLanguage);
    greeter.classList.add("danger");
     setTimeout(function () {
       greeter.innerHTML = "";
     }, 3000);
  } else if (checkedLanguageBtn !== null) {
    let userLanguage = checkedLanguageBtn.value;

    greeter.innerHTML = greetMyUser.greetUser(name, userLanguage);
    setTimeout(function () {
      greeter.innerHTML = "";
    }, 8000);

  } else if (checkedLanguageBtn === null) {
    greeter.innerHTML = greetMyUser.error(name, checkedLanguageBtn);
    greeter.classList.add("danger");
     setTimeout(function () {
       greeter.innerHTML = "";
     }, 3000);

  } else if (checkedLanguageBtn === null && !userName) {
    greeter.innerHTML = greetMyUser.error(name, checkedLanguageBtn);
    greeter.classList.add("danger");
    setTimeout(function () {
      greeter.innerHTML = "";
     
    }, 3000);
  }

  greetMyUser.namesAndCounter(userName, checkedLanguageBtn);
  localStorage.setItem("numberOfGreetings", greetMyUser.getCounter());
  localStorage.getItem("numberOfGreetings");
  counter.innerHTML = localStorage.getItem("numberOfGreetings");

  userInput.value = "";
  if (checkedLanguageBtn !== null) {
    checkedLanguageBtn.checked = false;
  }
});

reseter.addEventListener("click", function () {
  alert("This reset button will clear all your data");

  greeter.innerHTML = "Reset Success!";
  greeter.classList.add("success");
  localStorage.removeItem("numberOfGreetings");

  setTimeout(function () {
    greeter.innerHTML = "";
    location.reload();
  }, 3000);
  counter.innerHTML = "";
});
