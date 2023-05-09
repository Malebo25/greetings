function greetMe() {
    var counter = 0;

    function greetUser(userName) {
        return "Hello, " + userName;
    }
    function greetTswana(userName) {
      counter++;
      return "Dumela, " + userName;
        
    }
    function greetEnglish(userName) {
      counter++;
      return "Hello, " + userName;
    }
    function greetXhosa(userName) {
      counter++;
      return "Molo, " + userName;
    }

  function getCounter() {
    return counter;
    }

 
  return {
      
        greetUser,
        greetTswana,
        greetXhosa,
      greetEnglish,
        getCounter,
    }
    
}