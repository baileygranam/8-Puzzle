var table = document.getElementById("tableID");
var dialog = document.getElementById("dialog");
var x = 1;
var y = 1;
var nums = [1,2,3,4,5,6,7,8,""];

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

function shuffle() {
    var j, x, i;
    var z = 0;

    for (i = nums.length - 1; i >= 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = nums[i];
        nums[i] = nums[j];
        nums[j] = x;

        console.log(nums[i]);
    }


    for(i=0; i < 3; i++)
    {
        for(j=0; j < 3; j++)
        {
            if(nums[z] == "")
            {
                x = i;
                y = j;
            }

            table.rows[i].cells[j].innerHTML = nums[z];
            z++;
        }
    }


}