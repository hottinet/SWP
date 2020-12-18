const hamburger = document.querySelector(".mobile-nav-hamburger")
const mobileMenuOpen = document.querySelector(".mobile-menu-open")
const mobileExit = document.querySelector(".mobile-menu-exit")



/* MOBILE MENU OPEN AND CLOSE */
hamburger.addEventListener("click", function(){
	mobileMenuOpen.classList.toggle("open")
})

mobileExit.addEventListener("click", function(){
	mobileMenuOpen.classList.toggle("open")
})

