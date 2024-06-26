const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './files/IceCreamParlorSalesData.txt');
// Read CSV
let f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
    function(err){console.log(err);});

// Split on row
f = f.split("\n");

// Get first row for column headers
let headers = f.shift().split(",");

const json = [];
f.forEach(function(d){
    // Loop through each row
    tmp = {}
    row = d.split(",")
    for(let i = 0; i < headers.length; i++){
        tmp[headers[i]] = row[i];
    }
    // Add object to list
    json.push(tmp);
});

// convert json into DB format
const finalJson = []
json.forEach((data) => {
  const obj = {};
  obj['name'] = data['SKU'];
  obj['quantity'] = data['Quantity'] * 1; // converting into number
  obj['unitPrice'] = data['Unit Price'] * 1; // converting into number
  obj['totalPrice'] = data['Total Price'] * 1; // converting into number
  obj['date'] = new Date(data['Date']); // converting into number

  finalJson.push(obj);
});

var outPath = path.join(__dirname, './files/ice-cream-data.json');
// Convert object to string, write json to file
fs.writeFileSync(outPath, JSON.stringify(finalJson), 'utf8', 
    function(err){console.log(err);});
