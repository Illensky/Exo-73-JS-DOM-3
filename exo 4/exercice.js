const planetNumber = 6

let body = document.querySelector('body');

for (let i = 0 ; i < planetNumber ; i++ ) {
    let newPlanet = document.createElement('div');
    newPlanet.className = "planet";
    newPlanet.style.backgroundColor = "purple";
    let min = 50
    let o = i * Math.random()*10
    body.appendChild(newPlanet);
    newPlanet.style.left = (min + o).toString() + 'vw'
    newPlanet.style.top = (min + o).toString() + 'vh'
}



let planet = document.getElementsByClassName('planet')
for ( let i = 0 ; i < planetNumber ; i++ ) {
    let newMoon = document.createElement('div')
    newMoon.className = 'moon';
    newMoon.style.backgroundColor = "blue"
    planet[i].appendChild(newMoon)
}











