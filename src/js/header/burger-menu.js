document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu()
} )

const burgerButton = document.querySelector( '.burger-button' )
const burgerMenu   = document.querySelector( '.header-menu-wrapper' )



const toggleBurgerMenu = () => {
    burgerButton.addEventListener( 'click', () => {

        if( ! burgerButton && ! burgerMenu ) return

        if( ! burgerMenu.classList.contains( 'opened' ) ) {
            burgerMenu.classList.add( 'opened' )
            burgerButton.classList.add( 'opened' )
        } else {
            burgerMenu.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
        }
    } )
}