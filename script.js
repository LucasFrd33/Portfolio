const header1 = document.getElementById('scrol1');
const header2 = document.getElementById('scrol2');
const header3 = document.getElementById('scrol3');
const headerHaut = document.getElementById('scrol4');
const hero = document.getElementById('header');
const reseaux = document.getElementById('rese');


function onWindowScroll(event) {

  if (window.pageYOffset < 80) {
  	hero.classList.remove('hero2')
    hero.classList.add('hero')
  } else {
  	hero.classList.add('hero2')
    hero.classList.remove('hero')
  }

  
	if (window.pageYOffset < 830) {
  	header1.classList.remove('fondNavNoir')
  } else {
  	header1.classList.add('fondNavNoir')
  }
	if (window.pageYOffset > 1850) {
  	header1.classList.remove('fondNavNoir')
  }

  if (window.pageYOffset < 2850) {
  	header1.classList.remove('projetV1')
  } else {
  	header1.classList.add('projetV1')
  }


  if (window.pageYOffset < 1825) {
  	header2.classList.remove('fondNavWhite')
  } else {
  	header2.classList.add('fondNavWhite')
  }
  if (window.pageYOffset > 2900) {
  	header2.classList.remove('fondNavWhite')
  }

  if (window.pageYOffset < 835) {
  	header2.classList.remove('moiV1')
  } else {
  	header2.classList.add('moiV1')
  }


  if (window.pageYOffset < 2801) {
  	header3.classList.remove('fondNavNoir')
  } else {
  	header3.classList.add('fondNavNoir')
  }
  if (window.pageYOffset > 4225) {
  	header3.classList.remove('fondNavNoir')
  }

  if (window.pageYOffset < 815) {
  	header3.classList.remove('contactV1')
  } else {
  	header3.classList.add('contactV1')
  }
  if (window.pageYOffset > 1820) {
  	header3.classList.remove('contactV1')
  }

  if (window.pageYOffset < 150) {
  	headerHaut.classList.remove('haut')
  } else{
  	headerHaut.classList.add('haut')
  }
  if (window.pageYOffset > 1150) {
  	headerHaut.classList.remove('haut')
  }
  if (window.pageYOffset < 1250) {
  	headerHaut.classList.remove('haut2')
  } else{
  	headerHaut.classList.add('haut2')
  }
  if (window.pageYOffset > 2450) {
  	headerHaut.classList.remove('haut2')
  } 
  if (window.pageYOffset < 2151) {
  	headerHaut.classList.remove('haut3')
  } else{
  	headerHaut.classList.add('haut3')
  } 


  return onWindowScroll;
}

window.addEventListener('scroll', onWindowScroll)
