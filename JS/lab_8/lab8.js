/*завдання 1*/
function country_li(){
    var str= document.getElementById("country").value;
    var strArray=str.split(',');
    var html="<ul>";
    for (i=0; i<strArray.length-1;i++){
        html+="<li>" + strArray[i].trim() + "</li>";
    }
    html+="</ul>";
    document.getElementById("result_country").innerHTML=html;

}

// /*завдання 2*/
function run() {
    var table = document.getElementById("table");
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length;

    // Loop through each column
    for (var i = 0; i < colCount; i++) {
        var sum = 0;

        // Loop through each row (excluding the last row, as it will contain the sums)
        for (var j = 0; j < rowCount - 1; j++) {
            var cellValue = parseInt(table.rows[j].cells[i].innerHTML);
            sum += isNaN(cellValue) ? 0 : cellValue;
        }

        // Write the sum to the last row in the corresponding cell
        var lastRowCell = table.rows[rowCount - 1].cells[i];
        lastRowCell.innerHTML = sum;

        // Change the text color to green
        lastRowCell.style.color = "  #00365c";
    }
}