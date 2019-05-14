var hartje = document.querySelector('.add')

var spinright = document.querySelector('.rechts');
var spinleft = document.querySelector('.links');


//spinright.addEventListener('click', function () {
//
//
//}






document.onkeydown = function (event) {

    console.log(event.keyCode)

    if (event.keyCode == 39) {
        console.log('rechts');
        hartje.classList.toggle("rechts");
    }

    if (event.keyCode == 37) {
        console.log('links');
        hartje.classList.toggle("links");
    }
}
