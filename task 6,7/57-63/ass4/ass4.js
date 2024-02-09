function checkStatus(a, b, c) {
    let name, age, status;
  
    // Get values from parameters based on their type
    if (typeof a === "string") {
      name = a;
    } else if (typeof b === "string") {
      name = b;
    } else if (typeof c === "string") {
      name = c;
    }
  
    if (typeof a === "number") {
      age = a;
    } else if (typeof b === "number") {
      age = b;
    } else if (typeof c === "number") {
      age = c;
    }
  
    if (typeof a === "boolean") {
      status = a;
    } else if (typeof b === "boolean") {
      status = b;
    } else if (typeof c === "boolean") {
      status = c;
    }
  
    // Generate message based on status
    if (status) {
      return `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`;
    } else {
      return `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`;
    }
  }
  
  // Needed Output
  console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
  