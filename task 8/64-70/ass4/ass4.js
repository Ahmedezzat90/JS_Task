function specialMix(...data) {
    let AllString = true;
    let AllNumber = true;
    let res = 0;
    
    for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
    if (!/^\d+$/.test(data[i])) {
    AllNumber = false;
    } else {
    result += parseInt(data[i]);
    AllString = false;
    }
    } else if (typeof data[i] === "number") {
    res += data[i];
    AllString = false;
    }
    }
    
    if (AllString) {
    console.log("All Is Strings");
    } else if (AllNumber) {
    console.log(res);
    } else {
    console.log(res);
    }
    }
specialMix(10, 20, 30); // 60
specialMix("10Test", "Testing", "20Cool"); // 30
specialMix("Testing", "10Testing", "40Cool"); // 50
specialMix("Test", "Cool", "Test"); // All Is Strings