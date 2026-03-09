var one = prompt("Player one: Enter your name, you will be blue");
var playerone ='rgb(86, 151, 255)';
var two = prompt("Player two: Enter your name, you will be red");
var playertwo = 'rgb(237, 45, 73)';

var table = $('table tr');
var game_on = true;

/*to check if you have won or not*/
function reportWin(rowNum, colNum){
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(rowIndex, colIndex, color){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}
/*to see the current color */
function returnColor(rowIndex, colIndex){
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
    var colorReport = returnColor(5, colIndex);
    for(var row = 5; row > -1; row--){
        colorReport = returnColor(row, colIndex);   
        if(colorReport === 'rgb(128, 128, 128)'){
            return row
        }   
    }
}

function colorMatchCheck(one, two, three, four){
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}    

function horizontalWinCheck(){
    for(var row = 0; row < 6; row++){
        for(var col = 0; col < 4; col++){
            if(colorMatchCheck(returnColor(row, col), returnColor(row, col+1), returnColor(row, col+2), returnColor(row, col+3))){
                console.log('horizontal win');
                reportWin(row, col);
                return true;
            }else{
                continue;
            }   
        }
    }
}

function verticalWinCheck(){
    for(var col = 0; col < 7; col++){
        for(var row = 0; row < 3; row++){
            if(colorMatchCheck(returnColor(row, col), returnColor(row+1, col), returnColor(row+2, col), returnColor(row+3, col))){
                console.log('vertical win');
                reportWin(row, col);
                return true;
            }else{
                continue;
            }
        }
    }
}

function diagonalWinCheck(){
    for(var col = 0; col < 5; col++){
        for(var row = 0; row < 7; row++){
            if(colorMatchCheck(returnColor(row, col), returnColor(row+1, col+1), returnColor(row+2, col+2), returnColor(row+3, col+3))){
                console.log('diagonal win');
                reportWin(row, col);
                return true;
            }
            else if(colorMatchCheck(returnColor(row, col), returnColor(row-1, col+1), returnColor(row-2, col+2), returnColor(row-3, col+3))){
                console.log('diagonal win');
                reportWin(row, col);
                return true;
            }
        }
    }
}

var currentPlayer = 1;
var currentName = one;
var currentColor = playerone;

$('h3').text(one + ": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click', function(){

    var col = $(this).closest('td').index();
    var bottomAvail = checkBottom(col);
    if(bottomAvail === undefined) return;
    changeColor(bottomAvail, col, currentColor);

    if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
        $('h1').text(currentName + " has won! Refresh your browser to play again!");
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        return;
    }
    currentPlayer = currentPlayer * -1;

    if(currentPlayer === 1){
        currentName = one;
        $('h3').text(currentName + ": it is your turn, please pick a column to drop your blue chip.");
        currentColor = playerone;
    }
    else{
        currentName = two;
         $('h3').text(currentName + ": it is your turn, please pick a column to drop your red chip.");
        currentColor = playertwo;
    }
})
