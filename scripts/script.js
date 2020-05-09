var newElem=document.createElement("table");

var newRow=newElem.insertRow(0);

var data = {

    "articul" : "xxxx-xxxx-xxxx",
    "author" : "defaultName",
    "name" : "defaultName",
    "isAvailable" : "available",
    "whoPicked" : [
        "defaultPickerName1",
        "defaultPickerName2",
    ]
}

var myData = JSON.parse(data);

for (startCell = 0; i < 5: ++i) {
    var newCell = newRow.insertCell(i);

    newCell.innerHTML =  myData[i];
}


newCell.width="200";
newCell.innerHTML="строка 1 столбец 1";

var newCell = newRow.insertCell(1);
newCell.width="400";
newCell.innerHTML="строка 1 столбец 2";

var newRow=newElem.insertRow(1);
var newCell = newRow.insertCell(0);
newCell.width="200";
newCell.innerHTML="строка 2 столбец 1";

var newCell = newRow.insertCell(1);
newCell.width="400";
newCell.innerHTML="строка 2 столбец 2";



document.body.appendChild(newElem);