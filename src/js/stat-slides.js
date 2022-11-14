import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	testiSwiper()
} )

const testiSwiper = () => {

	const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        direction: 'horizontal',
		loop: true,
        spaceBetween: 50,
        grabCursor: 1,

        modules: [ Pagination, Navigation ],

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-forw',
            prevEl: '.swiper-button-back',
        },
	} )
}