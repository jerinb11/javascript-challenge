// from data.js
console.log('js is loaded');
console.log(data);
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody')
// arrays = lists []
// objects = dictionaries {}

// rows are objects (data)
// columns are the keys
function table(arr) {
    tbody.html("")
    // loop through the rows (objects) for the data
    for (var i = 0; i < arr.length; i++) {
        var current_row = Object.values(arr[i]);
        // adds a new table row to each iteration to the tbody
        var tr = tbody.append("tr");
        for (var j = 0; j < current_row.length; j++) {
            tr.append('td').text(current_row[j])
        }

    }

}
// create a click event for a button

var button = d3.select("#filter-btn");

// what it should say in console once the button is clicked
function handleClick() {
    var userinput = d3.select("#datetime").property("value")
    console.log(userinput);
    var filterdata = tableData.filter(row => row.datetime===userinput)
        table(filterdata)
}
// event listener
button.on("click", handleClick);

table(tableData);