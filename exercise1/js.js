const tempen = [    
    ["Stad","00-08","08-16","16-24"],
    ["Malmö",12,16,9],
    ["Mariestad",13,15,10],
    ["Stockholm",13,15,13],
    ["Upphärad",14,16,15],
    ["Göteborg",13,14,12]
];

let totalTemp = 0;
let numRows = tempen.length;
let numCols = tempen[0].length;

// create a new table element
let table = document.createElement("table");

// loop through each row and column of the array
for (let i = 0; i < numRows; i++) {
    let row = table.insertRow();

    for (let j = 0; j < numCols; j++) {
        let cell = row.insertCell();

        // set the value of the cell based on the array element
        cell.innerHTML = tempen[i][j];

    }

    // calculate and add the average temperature to each row 
    if (i > 0) {
        let medelTemp = (tempen[i][1] + tempen[i][2] + tempen[i][3]) / 3;
        totalTemp += medelTemp;
        let cell = row.insertCell();
        cell.innerHTML = medelTemp.toFixed(1); // display one decimal place
    }
}

// append the table to the HTML page
document.body.appendChild(table);

// calculate and display the average temperature
let medelTemp = totalTemp / (tempen.length - 1);
document.getElementById("averageTemp").innerHTML = medelTemp.toFixed(1);