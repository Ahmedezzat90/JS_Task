function ageInTime(theAge) {
    if (theAge <= 10 || theAge >= 100) {
      console.log('Age Out Of Range');
      return;
    }
  
    const months = theAge * 12;
    const weeks = months * 4;
    const days = weeks * 7;
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;
  
    console.log(`Months: ${months}`);
    console.log(`Weeks: ${weeks}`);
    console.log(`Days: ${days}`);
    console.log(`Hours: ${hours}`);
    console.log(`Minutes: ${minutes}`);
    console.log(`Seconds: ${seconds}`);
  }

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
