var downloadicoon = document.querySelector('.add');
var downloadbalk = document.querySelector("body ul div");

downloadicoon.addEventListener('click', function () {

    downloadicoon.classList.toggle("red");

    var laadbalk = document.querySelector("body ul .laadbalk");

    downloadbalk.classList.toggle("open");
    laadbalk.classList.toggle("openDelay");
    console.log("HEEEELLLOO");
});

var likeButton = document.querySelectorAll(".add");


for (var i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        countLike();
    });
}

function countLike() {
  var likes = document.querySelectorAll(".add.active").length;

  document.querySelector(".counter").innerHTML = likes;
}

//var button = document.getElementById("clickme"),
//    count = 0;
//button.onclick = function () {
//    count += 1;
//
//};









/*
heartIconSVG.addEventListener('click', function () {
    console.log('joehoeeSVG');
    heartIconSVG.classList.toggle("red");
});
*/








/*
//Get all like button that are in the HTML File
var likeButton = document.querySelectorAll(".like-button");

// //Old for loop
// for (var i = 0; i < likeButton.length; i++) {
//   likeButton[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     countLike();
//   });
// }

// //New for loop
// for (var button of likeButton) {
//   button.addEventListener("click", function() {
//     this.classList.toggle("active");
//     countLike();
//   });
// }

function countLike() {
  var likes = document.querySelectorAll(".like-button.active").length;

  insert lenght to html
  document.querySelector(".counter").innerHTML = likes;
}*/
