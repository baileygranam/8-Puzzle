var table = document.getElementById("tableID");
var dialog = document.getElementById("dialog");
var empty_x = 1;
var empty_y = 1;
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
        (i == (empty_x+1) && j == empty_y) ||
        (i == (empty_x-1) && j == empty_y) ||
        (i == empty_x && j == (empty_y+1)) ||
        (i == empty_x && j == (empty_y-1))

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
        table.rows[empty_x].cells[empty_y].innerHTML = table.rows[i].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = "";
        empty_x = i;
        empty_y = j;

        dialog.innerHTML = "Piece Moved!";
    }
    else
    {
        dialog.innerHTML = "Error: You can not make this move.";
        console.log("ILLEGAL MOVE");
    }
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
               empty_x = i;
               empty_y = j;
            }

            table.rows[i].cells[j].innerHTML = nums[z];
            z++;
        }
    }


}