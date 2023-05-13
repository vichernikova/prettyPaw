import {gsap} from 'gsap';

export const burgerMenu = () => {
	const burgerElement = document.querySelector('.navigation__button');
	const offcanvasElement = document.querySelector('.navigation__list');
	const offcanvasItemElement = document.querySelectorAll('.navigation__item');
	
	const tl = gsap.timeline({paused: true});
	tl.fromTo(offcanvasElement, 
		{opacity: 0, display: 'none'},
		{opacity: 1, display: 'flex'},
	);
	offcanvasItemElement.forEach((elem, i) => {
		const x = i % 2 ? 500 : -500;
		tl.from(elem, {opacity: 0, x, duration: 1}, '-=1')
		}
	);
	
	const openOffcanvas = () => {
		offcanvasElement.classList.add('navigation__list-offcanvas');
		burgerElement.classList.add('navigation__button-active');
		tl.play();
	}
	
	const closeOffcanvas = () => {
		tl.reverse();
	}
	
	tl.eventCallback('onReverseComplete', () => {
		burgerElement.classList.remove('navigation__button-active');
	});
	
	burgerElement.addEventListener('click', (e) => {
		if (burgerElement.classList.contains('navigation__button-active')) {
			closeOffcanvas();
		} else {
			openOffcanvas();
		}
	});
	
	const checkScreenSize = (e) => {
		if(e.matches) {
			gsap.set(offcanvasElement, {opacity: 1, display: 'flex'});
			offcanvasItemElement.forEach((elem, i) => {
				gsap.set(elem, {opacity: 1, x: 0 },)
			});
		} else {
			gsap.set(offcanvasElement, {opacity: 0, display: 'none'});
			offcanvasItemElement.forEach((elem, i) => {
				const x = i % 2 ? 500 : -500;
				gsap.set(elem, {opacity: 0, x, duration: 1})
			});
		}
	}
	
	
	const mediaQuery = window.matchMedia('(min-width: 1240px)');
	mediaQuery.addEventListener('change', checkScreenSize);
	checkScreenSize(mediaQuery);
}
