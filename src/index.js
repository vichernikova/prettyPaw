import './index.html';
import 'swiper/scss/pagination';
import 'swiper/scss';
import './index.scss';
import { slidersInit } from './modules/sliders.js';


slidersInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
		clickable: true,
	}
});

slidersInit('.career__slider', {
	pagination: {
		el: '.career__slider-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 'auto',
			spaceBetween: 20,
			pagination: false,
		},
		1024: {
			slidesPerView: 'auto',
			spaceBetween: 26,
			pagination: false,
		},
		1240: {
			slidesPerView: 'auto',
			spaceBetween: 30,
			pagination: false,
		}
	}
});

const videoBG = document.querySelectorAll('.video-bg');
videoBG.forEach(videoElement => videoElement.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`
);
