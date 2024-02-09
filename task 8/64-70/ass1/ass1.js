function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      let nameArr = zName.split(" ");
      let firstName = nameArr[0];
      let lastName = nameArr[nameArr.length - 1].charAt(0).toUpperCase() + ".";
      return firstName + " " + lastName;
    }
    function ageWithMessage(zAge) {
      let age = zAge.match(/\d+/);
      return "Your Age Is " + age;
    }
    function countryTwoLetters(zCountry) {
      let firstTwoLetters = zCountry.slice(0, 2).toUpperCase();
      return "You Live In " + firstTwoLetters;
    }
    function fullDetails() {
      let res =`Hello ${namePattern(zName)} , ${ageWithMessage(zAge)} , ${countryTwoLetters(zCountry)}`;
      return res;
    }
    return fullDetails(); 
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
  