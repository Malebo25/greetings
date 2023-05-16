describe("Tesing Greetings in different languages", function () {
  // it("It should set userName", function () {
  //   let Usertest = greetMe();
  //   Usertest.setUser("xola");
  //   assert.equal("xola", Usertest.getUser());
  // });

  it("It should greet user in isiXhosa", function () {
    let Usertest = greetMe();

    assert.equal("Molo xola", Usertest.greetUser("xola", "isixhosa"));
  });
  it("It should greet user in English", function () {
    let Usertest = greetMe();

    assert.equal("Hello alice", Usertest.greetUser("alice", "english"));
  });
  it("It should greet user in Setswana", function () {
    let Usertest = greetMe();

    assert.equal("Dumela thabo", Usertest.greetUser("thabo", "setswana"));
  });
  it("It should not greet empty name", function () {
    let Usertest = greetMe();

    assert.equal("Please enter valid name", Usertest.greetUser("", "isixhosa"));
  });

  it("It should not greet numbers", function () {
    let Usertest = greetMe();

    assert.equal(
      "Please enter valid name (letters only) and choose language",
      Usertest.greetUser(99, "isixhosa")
    );
  });

  it("It should not greet names that contain numbers", function () {
    let Usertest = greetMe();

    assert.equal(
      "Please enter valid name (letters only) and choose language",
      Usertest.greetUser("mm99", "isixhosa")
    );
  });
});

describe("Tesing Greetings in different languages", function () {
  let test = greetMe();
  it("It should not greet names that contain numbers", function () {
    test.greetUser("mm99", "isixhosa");

    assert.equal(0, test.getCounter());
  });
   
});
