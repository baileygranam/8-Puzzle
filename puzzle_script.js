window.onload = function() {
    var table = document.getElementById("tableID");
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].onclick = function () {
                    tableText(this, this.cellIndex+1, this.parentNode.rowIndex+1);
                };
            }
        }
    }
}

function tableText(tableCell, i, j) {
    alert("Number: " + tableCell.innerHTML + " " +"Column: " + i + " " +"Row: " + j);
}