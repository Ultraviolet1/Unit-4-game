

$(document).ready(function() {

var randomNumber = Math.floor(Math.random() *120) + 19;


$("#random-number").text(randomNumber);

var crystal1 = Math.floor(Math.random()*12+1);
var crystal2 = Math.floor(Math.random()*12+1);
var crystal3 = Math.floor(Math.random()*12+1);
var crystal4 = Math.floor(Math.random()*12+1);


var wins = 0;
var losses =0;
var crystalSum =0;



$("#wins").text(wins);
$("#losses").text(losses);

function reset() {
    random = Math.floor(Math.random()*102+19);
    console.log(randomNumber);
    $("#numberToGet").text(randomNumber);
    var crystal1 = Math.floor(Math.random()*12+1);
    var crystal2 = Math.floor(Math.random()*12+1);
    var crystal3 = Math.floor(Math.random()*12+1);
    var crystal4 = Math.floor(Math.random()*12+1);
    crystalSum =0;
    $("#total").text(crystalSum);
}

function winner() {
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    reset();
}

function loser() {
    alert("You Lose!!");
    losses++;
    $("#losses").text(losses);
    reset();
}

$("#button").on("click", function() {
    crystalSum = crystalSum + num1;
    console.log("New crystalSum " + crystalSum);
    $("#score").text(crystalSum);

    if (crystalSum === randomNumber) {
        winner()
    }

    else if (crystalSum > randomNumber) {
        loser()
    } 
})

})