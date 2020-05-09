var newElem=document.createElement("table");

var newRow=newElem.insertRow(0);

var d = ["Articul", "name", "author", "isAvailable", "whoPicked"];

var file = "data/libraryJSON.json";
 
(async () => {
    let DB = await(await fetch(file)).json();
 
    console.log(DB);
})();

for (let startCell = 0; startCell < 5; startCell++) {

    var newCell = newRow.insertCell(startCell);
    newCell.innerHTML =  DB[d[startCell]];
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