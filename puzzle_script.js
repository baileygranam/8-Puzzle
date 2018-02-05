var table = document.getElementById("tableID");
var dialog = document.getElementById("dialog");
var x = 1;
var y = 1;

window.onload = function() {

    dialog.innerHTML = "Select a piece to swap.";
    
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
    console.log("Number: " + tableCell.innerHTML + " " +"Column: " + i + " " +"Row: " + j);
}

function validateSwap(i, j)
{
    if(
        (i == (x+1) && j == y) ||
        (i == (x-1) && j == y) ||
        (i == x && j == (y+1)) ||
        (i == x && j == (y-1))

        )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function swap(tableCell, i , j)
{
    if(validateSwap(i, j))
    {
        table.rows[x].cells[y].innerHTML = table.rows[i].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = "";
        x = i;
        y = j;

        dialog.innerHTML = "Piece Moved!";
    }
    else
    {
        dialog.innerHTML = "Error: You can not make this move.";
        console.log("ILLEGAL MOVE");
    }
}

function solve()
{

}