class Car {
  constructor(brand, model, year, description, isNew) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.description = description;
    this.isNew = isNew;
  }
}

let submitBtn = document.querySelector(".car_input_submit");
let carTable = document.querySelector(".car_table");
let carTableBody = document.querySelector("tbody");

let carArr = [];
let i = 0;

let myFunc = function () {
  let brandText = document.querySelector(".car_input_brand").value;
  let modelText = document.querySelector(".car_input_model").value;
  let descText = document.querySelector(".car_input_description").value;
  let yearText = document.querySelector(".car_input_year").value;
  let checkBox = document.querySelector(".car_input_checkbox");
  let warning = document.querySelector(".car_input_warning_message");

  if (brandText == "" || modelText == "" || descText == "" || yearText == "") {
    warning.innerHTML = "Please fill the form completely";
    warning.style.color = "red";
    warning.style.margin = "10px 0 10px 0";
    warning.style.fontSize = "18px";
  } else {
    let car = new Car(brandText, modelText, yearText, descText, true);
    carArr[i] = car;
    i++;

    let row = carTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = car.brand;
    cell2.innerHTML = modelText;
    cell3.innerHTML = yearText;
    if (checkBox.checked) {
      cell4.innerHTML = "Yes";
    } else {
      cell4.innerHTML = "No";
    }
    cell5.innerHTML = descText;

    let allInputs = document.querySelectorAll("input");
    allInputs.forEach((singleInput) => (singleInput.value = ""));
    checkBox.checked = false;
  }
};

submitBtn.addEventListener("click", myFunc);

console.log(carArr);

// function clearText(event) {
//     input1.value = "";
//     output.innerHTML += "Form submitted successfully! <br>";
//  }

//   let trTag = document.createElement("tr");
//   console.log(trTag);
//   let tdTag = document.createElement("td");

//   tdTag.innerHTML = brandText;

//   let tryAdd = trTag.appendChild(tdTag);
//   carTableBody.appendChild(tryAdd);

//   +=` <td>${item.id}</td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>`
