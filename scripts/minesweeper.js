"use strict"

var GAME_WIDTH = 800;
var GAME_HEIGHT = 800;
var DRAW_SQUARE = "<div class='game-square'></div>"

function Mine(squares) {
    this.position = ["",""],
    this.position[0] = Math.floor(Math.random() * squares),
    this.position[1] = Math.floor(Math.random() * squares),
    this.squareNumber = this.position[1]*squares + this.position[0];
    this.drawMine = function() {
        console.log("Creating mine at " + this.position + ". Square number: " + this.squareNumber);
        $('.game-square:eq('+this.squareNumber+')').addClass("game-square-mine");
    }
};

var game = {
    
    numMines: 10,
    mineArray: [],
    createMines: function(numMines, mineArray, squares) {
        var i;
        
        for (i=0; i <= numMines; i++) {
            
            mineArray[i] = new Mine(squares);
            console.log(mineArray[i]);
            mineArray[i].drawMine();
        };
    },
    
    render: function(squares) {
        var x = GAME_WIDTH/squares;
        var y = GAME_HEIGHT/squares;
        var i;
        var j;
        
        for (i=0; i < squares; i++)
            {
                for (j=0; j < squares; j++) 
                {
                    $('#game').append(DRAW_SQUARE);
                    
                };
            };
        
        $('.game-square').css("width", x + "px");
        $('.game-square').css("height", y + "px");
        
        }
    
};

function newGame() {
    $('#game').empty();
    var squares;
    console.log("Starting new game");
    squares = prompt("Enter number of rows and columns", 25);
    game.render(squares);
    game.createMines(game.numMines,game.mineArray, squares);
};

$(document).ready(function() {
    
    $('#button-new-game').click(newGame);
    




});