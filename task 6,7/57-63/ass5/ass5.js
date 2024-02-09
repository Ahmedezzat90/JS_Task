function createSelectBox(startYear, endYear) {
    let selectBox = document.createElement("select");
    for (let year = startYear; year <= endYear; year++) {
      let option = document.createElement("option");
      option.value = year;
      option.text = year;
      selectBox.appendChild(option);
    }
    document.body.appendChild(selectBox);
  }
  
  createSelectBox(2000, 2021);
  