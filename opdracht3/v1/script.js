var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

/*
    deze functie wordt aangeroepen als de xmlhttprequest lukt
*/
request.onload = function () {
    var filmlijst = request.response; //de response vd request is de json
    maakhtml(filmlijst); //functie wordt aangeroepen, jsonobject meegeve als argument
}


function maakhtml(jsonObj) {
    var films = jsonObj;
    console.log("length", films.length, films);
    //    console.log("item 1: h2 wordt", films[0].title);
    //    console.log("item : de img wordt1", films[0].cover);
    //    console.log("item 1: de p wordt", films[0].simple_plot);
    console.log("reviews", films[0].reviews[0].score);
    console.log("trailer", films[4].trailer)


    for (var i = 0; i < films.length; i++) { //loop door alle items in de json

        //elke film heeft een <article> nodig
        //een <h2> voor de itle
        //een <p> voor de tekst
        //en een <img> voor de cover


        var myArticle = document.createElement('article');
        //if(films[i].title == "Pulp Fiction"){
        myArticle.setAttribute("class", "film");
        // }

        //maak de html elementen aan
        var myimg = document.createElement('img');
        myimg.setAttribute("class", "img");
        var myyoutube = document.createElement('video');
        myyoutube.setAttribute("class", "video");
        var myH2 = document.createElement('h2');

        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var mybutton = document.createElement('button')
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myList = document.createElement('ul');

        //koppel de json data
        myimg.setAttribute("src", films[i].cover);
        myyoutube.setAttribute("src", films[i].trailer);

        myH2.textContent = films[i].title;

        myPara1.textContent = films[i].simple_plot;
        myPara2.textContent = 'genre: ' + films[i].genres;
        myPara3.textContent = 'release date: ' + films[i].release_date;

        myPara5.textContent = 'score: ';
        for (var k = 0; k < films[i].reviews.length; k++) {
            console.log("score", films[i].reviews[k].score)
            myPara5.textContent += films[i].reviews[k].score + ", ";
        }
        myPara5.setAttribute("Id", "extra1");

        myPara6.textContent = 'director: ' + films[i].directors[0].name;
        myPara6.setAttribute("Id", "extra");

        myPara7.textContent = "actors: ";
        for (var j = 0; j < films[i].actors.length; j++) {
            console.log("actors", films[i].actors[j].actor_name)
            myPara7.textContent += films[i].actors[j].actor_name + ", ";
        }
        myPara7.setAttribute("Id", "extra");

        mybutton.textContent = 'info'
        mybutton.setAttribute("class", "knop");


        //append de html elementen aan het article element
        myArticle.appendChild(myimg);
        //        myArticle.appendChild(myyoutube);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        //      myArticle.appendChild(mybutton);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(myPara5);

        myArticle.appendChild(myList);

        //append het article aan de section die al bestaat in je html
        section.appendChild(myArticle);
    }
}

