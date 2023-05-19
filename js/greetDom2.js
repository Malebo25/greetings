const userInput = document.querySelector(".nameText");
const greetButton = document.querySelector(".greetMeBtn");
const greeter = document.querySelector(".greetUserName");
const chooseLanguage = document.querySelector(".languageType");
const counter = document.querySelector(".counter");
const reseter = document.querySelector(".resetBtn");
var letters = /^[a-zA-Z]+$/;

greetMyUser = greetMe(localStorage.getItem("numberOfGreetings"));

counter.innerHTML = localStorage.getItem("numberOfGreetings")||0;
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
  } else if (letters.test(userName) === false) {
    let userLanguage = checkedLanguageBtn;

    greeter.innerHTML = greetMyUser.greetUser(name, userLanguage);
    greeter.classList.add("danger");
  } else if (checkedLanguageBtn !== null) {
    let userLanguage = checkedLanguageBtn.value;

    greeter.innerHTML = greetMyUser.greetUser(name, userLanguage);
  } else if (checkedLanguageBtn === null) {
    greeter.innerHTML = greetMyUser.error(name, checkedLanguageBtn);
    greeter.classList.add("danger");
  } else if (checkedLanguageBtn === null && !userName) {
    greeter.innerHTML = greetMyUser.error(name, checkedLanguageBtn);
    greeter.classList.add("danger");
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

if (localStorage.getItem("resetSuccess")) {
  greeter.innerHTML = "Reset Success!";
  greeter.classList.add("success");

  setTimeout(function () {
    greeter.innerHTML = "";
    localStorage.removeItem("resetSuccess");
  }, 3000);
  counter.innerHTML = "";
}
reseter.addEventListener("click", function () {
  localStorage.removeItem("numberOfGreetings");
  localStorage.setItem("resetSuccess", true);
  location.reload();
});
// reseter.addEventListener("click", function () {
//   alert("This reset button will clear all your data");
//   localStorage.removeItem("numberOfGreetings");
//   counter.innerHTML = 0;
//   location.reload();
//   greeter.innerHTML = "Reset Success!"
//   greeter.classList.add("success");

  
//   setTimeout(function () {
//     greeter.innerHTML = "";
//   }, 3000); 
// });