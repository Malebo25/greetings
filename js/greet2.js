function greetMe(myCounter) {
  var patternCheck = /^[a-zA-Z]+$/;
  var greetingsCounter = myCounter || 0;
  var namesGreeted = {};
  var user;
  function greetUser(userName, language) {
    // if (!userName && language) {
    //   return "Please enter Name and Language";
    // }
    if (userName && language) {
      if (patternCheck.test(userName)) {
        if (language === "english") {
          return "Hello " + userName;
        } else if (language === "setswana") {
          return "Dumela " + userName;
        } else {
          return "Molo " + userName;
        }
      } else {
        return error(userName,language,)
      }
    }
    else {
      return error(userName,language);
    }
  }
  function error(userName, language) {
    if (!userName && language) { 
      return "Please enter name";
    }

    if (userName === "" && language === null) {
      return "Please enter valid name and choose language";
      // } else if (!userName && language) {
      //   return "Please enter name";
    } else if (userName !== "" && language === null) {
      return "Please enter name and language";
    } else if (patternCheck.test(userName) === false) {
      return "Please enter valid name(letters)";
    }
  }
  function namesAndCounter(userName, language) {
    var pattern = /^[a-zA-Z]+$/;
    //when the greet button is pressed check if this user was already greeted before
    //by looking if the userName exists in namesGreeted if not increment this counter and update the screen
    if (namesGreeted[userName] === undefined) {
      if (pattern.test(userName.toLowerCase()) && language !== null) {
        greetingsCounter++;
      }
      //add an entry for the user that was greeted in the Object Map
      namesGreeted[userName.toLowerCase()] = 1;
    } else {
      // update the counter for a specific username
      namesGreeted[userName.toLowerCase()]++;
    }
  }
  function setUser(name) {
    user = name;
  }

  function getUser() {
    return user;
  }
  function getCounter() {
    return greetingsCounter;
  }
  function getNamesGreeted() {
    return namesGreeted;
  }
  return {
    greetUser,
    setUser,
    getUser,
    namesAndCounter,
    getCounter,
    getNamesGreeted,
    error,
  };
}
