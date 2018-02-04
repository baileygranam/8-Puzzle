var table = document.getElementById("tableID");
var x = 1;
var y = 1;

window.onload = function() {
    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].onclick = function () {
                    tableText(this, this.parentNode.rowIndex, this.cellIndex);
                    swap(this, this.parentNode.rowIndex, this.cellIndex);
                };
            }
        }
    }
}

function tableText(tableCell, i, j) {
    alert("Number: " + tableCell.innerHTML + " " +"Column: " + i + " " +"Row: " + j);
}

function swap(tableCell, i , j)
{
    if(validateSwap(i, j))
    {
        alert(validateSwap(i, j));
        table.rows[x].cells[y].innerHTML = table.rows[i].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = "";
        x = i;
        y = j;
    }
    else
    {
        alert("ILLEGAL MOVE");
    }
}