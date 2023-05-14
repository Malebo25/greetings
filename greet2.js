
var patternCheck = /^[a-zA-Z]+$/;
var greetCount = 0;
var user
function greetMe() {
  function greetUser(userName,language) {

    if (userName && language) {

      // alert(patternCheck.test(language));
      if (patternCheck.test(userName)) {
        if (language === "english") {
          greetCount++;
          return "Hello " + userName;
        } else if (language === "setswana") {
          greetCount++;
          return "Dumela " + userName;
        } else {
          greetCount++;
          return "Molo " + userName;
        }
      }
      else {
        return "Please enter valid name (letters only) and choose language";
      }
    }
   
    else {
      return "Please enter valid name";
    }
  }
   function setUser(name) {
     user = name;
   }

  function getUser(){
    return user;
  }
  function getCounter() {
    return greetCount;
  }
  return {
    greetUser,
    setUser,
    getUser,
    getCounter,
  }
}