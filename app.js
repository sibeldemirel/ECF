// document.querySelector('.exo1 p:first-child span').innerHTML = students;

let order = document.querySelector('.order');
let firstSection = document.querySelector('.sec1');


order.addEventListener('click', () =>
    firstSection.innerHTML='Votre commande a été prise en compte',
    firstSection.classList.add('.green') //doesn't work
)



{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

let button = document.querySelector('.lien');
let image = document.querySelector('.rightImage');
let video = '<iframe width="500" height="275" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
//on ne peut pas remplacer le innerHTML d'une image par une iframe


console.log(image)
console.log(button)

button.addEventListener('click', () => 
    image.innerHTML = video
)
