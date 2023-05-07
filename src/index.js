import './index.html';
import 'swiper/scss/pagination';
import 'swiper/scss';
import './index.scss';
import { slidersInit } from './modules/sliders.js';


slidersInit('.about__slider', {
	pagination: {
		el: '.about__slider-pagination',
	}
});

const videoBG = document.querySelector('.video-bg');
videoBG.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;
