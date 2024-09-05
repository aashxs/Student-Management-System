var table = document.getElementById("myTable");
let term = document.getElementById("inputs");
fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => renderData(data));
function renderData(data) {
  table.innerHTML = "";
  var row = table.insertRow(0);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  cell0.innerHTML = `ID`;
  cell1.innerHTML = `NAME`;
  cell2.innerHTML = `GENDER`;
  cell3.innerHTML = `CLASS`;
  cell4.innerHTML = `MARKS`;
  cell5.innerHTML = `PASSING`;
  cell6.innerHTML = `EMAIL`;
  function styleCell(cell) {
    cell.style.fontSize = "1.5rem";
    cell.style.color = "black";
  }
  styleCell(cell0);
  styleCell(cell1);
  styleCell(cell2);
  styleCell(cell3);
  styleCell(cell4);
  styleCell(cell5);
  styleCell(cell6);

  data.forEach((value) => {
    var row = table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    cell0.innerHTML = value.id;
    let divP = document.createElement("div");
    divP.style.display = "flex";
    divP.style.alignItems = "center";
    divP.style.justifyContent = "center";
    divP.style.gap = "10px";
    divP.style.padding = "5px";
    let img = document.createElement("img");
    img.src = value.img_src;
    img.style.borderRadius = "50%";
    img.style.border = "1px solid black";
    let div = document.createElement("div");
    div.innerText = `${value.first_name} ${value.last_name}`;
    divP.appendChild(img);
    divP.appendChild(div);
    cell1.appendChild(divP);
    cell2.innerHTML = value.gender;
    cell3.innerHTML = value.class;
    cell4.innerHTML = value.marks;
    cell5.innerHTML = value.passing;
    cell6.innerHTML = value.email;
  });
}

function ascending() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let finalData = data.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });

      renderData(finalData);
    });
}

function decsending() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let finalData = data.sort((a, b) => {
        return b.first_name.localeCompare(a.first_name);
      });

      renderData(finalData);
    });
}
function marks() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let finalData = data.sort((a, b) => {
        return a.marks - b.marks;
      });

      renderData(finalData);
    });
}

function whichClass() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let finalData = data.sort((a, b) => {
        return a.class - b.class;
      });

      renderData(finalData);
    });
}

function pass() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let finalData = data.filter((value) => value.passing == true);
      renderData(finalData);
    });
}

function gender() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let finalData1 = data.filter((value) => {
        return value.gender == "Male";
      });
      let finalData2 = data.filter((value) => {
        return value.gender == "Female";
      });
      let finalData = [...finalData1, ...finalData2];

      renderData(finalData);
    });
}

function dynamicSearch() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let searchTerm = term.value;
      let finalData = data.filter(
        (value) =>
          value.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          value.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      renderData(finalData);
    });
}

function search() {
  fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      let searchTerm = term.value;
      let finalData = data.filter((value) =>
        value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      renderData(finalData);
    });
}
