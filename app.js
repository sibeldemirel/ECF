// document.querySelector('.exo1 p:first-child span').innerHTML = students;

let order = document.querySelector(".order");
let firstSection = document.querySelector(".sec1");

order.addEventListener(
  "click",
  () => (firstSection.innerHTML = "Votre commande a été prise en compte"),
  firstSection.classList.add(".green") //doesn't work
);

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
}

let button = document.querySelector(".lien");
let image = document.querySelector(".rightImage");
let video =
  '<iframe width="500" height="275" src="https://www.youtube.com/embed/_GuOjXYl5ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
//on ne peut pas remplacer le innerHTML d'une image par une iframe

console.log(image);
console.log(button);

button.addEventListener("click", () => (image.innerHTML = video));

//addYear

let year = document.querySelector("#addYear");
let since = document.querySelector(".added");
let number = 5;

year.addEventListener("click", () => {
  number += 1;
  since.innerHTML = `depuis ${number} ans.`;
});

//random numbers

let randomButton = document.querySelector(".alea");
let random1 = document.querySelector(".change1");
let random2 = document.querySelector(".change2");
let random3 = document.querySelector(".change3");

let random;

randomButton.addEventListener("click", () => {
  random1.innerHTML = Math.floor(Math.random() * (99999 - 1) + 1) + "+";
  random2.innerHTML = Math.floor(Math.random() * (99999 - 1) + 1) + "+";
  random3.innerHTML = Math.floor(Math.random() * (99999 - 1) + 1) + "+";
});


let mail = document.querySelector(".footerInput");
let mailButton = document.querySelector(".footerSign");
let newsletter = document.querySelector(".newsletter");

mailButton.addEventListener("click", () => {

  if (mail.value == "") {
    console.log("c'est vide");
  } else if (mail.value != "") {
    newsletter.innerHTML = "Merci " + mail.value;

  }
});
