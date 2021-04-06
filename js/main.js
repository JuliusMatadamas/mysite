const 	navMenu 	= document.querySelector("#nav-menu"),
		toggleMenu  = document.querySelector("#nav-toggle"),
		closeMenu   = document.querySelector("#nav-close"),
		navLink		= document.querySelectorAll(".nav__link");


toggleMenu.addEventListener('click', ()=>{
	navMenu.classList.toggle('show')
});

closeMenu.addEventListener('click', ()=>{
	navMenu.classList.remove('show')
});


function linkAction(){
	navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

