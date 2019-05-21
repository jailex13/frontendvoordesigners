var hartje = document.querySelector('.add')

var spinright = document.querySelector('.knoprechts');
var spinleft = document.querySelector('.knoplinks');

document.onkeydown = function (event) {

    console.log(event.keyCode)

    if (event.keyCode == 39) {
        console.log('rechts');
        hartje.classList.add("rechts");
    }

    if (event.keyCode == 37) {
        console.log('links');
        hartje.classList.add("links");
    }
}

hartje.addEventListener('animationend', function(){
  console.log('Animation ended');

     hartje.classList.remove("rechts");
    hartje.classList.remove("links")

    //als de animatie klaar i, haal dan de class er weer af ... met remove
});



spinleft.addEventListener('click', function () {
    hartje.classList.toggle("links");
    console.log("test");
});

spinright.addEventListener('click', function () {
    hartje.classList.toggle("rechts");
    console.log("test");
});
