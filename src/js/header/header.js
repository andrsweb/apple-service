import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    toggleBurgerMenu()
    showHiddenMenu( '.has-children' )
} )

const burgerButton = document.querySelector( '.burger-button' )
const burgerMenu   = document.querySelector( '.header-menu-wrapper' )



const toggleBurgerMenu = () => {
    burgerButton.addEventListener( 'click', () => {

        setTargetElement( document.querySelector( '#body-lock' ) )

        if( ! burgerButton && ! burgerMenu ) return

        if( ! burgerMenu.classList.contains( 'opened' ) ) {
            burgerMenu.classList.add( 'opened' )
            burgerButton.classList.add( 'opened' )
            disableBodyScroll( getTargetElement() )
        } else {
            burgerMenu.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
            enableBodyScroll( getTargetElement() )
        }
    } )

    window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        const WINDOW_WIDTH_MD = 767

        if( windowWidth >= WINDOW_WIDTH_MD ) {
            burgerMenu.classList.remove( 'opened' )
            burgerButton.classList.remove( 'opened' )
            enableBodyScroll( getTargetElement() )
        }
    } )
}

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const header = document.querySelector( '.header' )

    if (scrollTop > 0) {
        if ( ! header.classList.contains( 'scrolled' ) )
            header.classList.add( 'scrolled' )

}   else {
        if ( header.classList.contains( 'scrolled' ) )
        header.classList.remove( 'scrolled' )
    }
})

const showHiddenMenu = ( selector ) => {
    const burgerLinks = document.querySelectorAll( selector )

    burgerLinks.forEach( link => {
        link.addEventListener( 'click', e => {
            e.preventDefault()
            const windowWidth = window.innerWidth
            const WINDOW_WIDTH_MD = 767

            if( windowWidth <= WINDOW_WIDTH_MD ) {
                if( ! link.classList.contains( 'opened' ) )
                    link.classList.add( 'opened')
                else link.classList.remove( 'opened' )
            }
        } )
    } )

    window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        const WINDOW_WIDTH_MD = 767

        if( windowWidth >= WINDOW_WIDTH_MD ) {
            burgerLinks.forEach( link => {
                link.classList.remove( 'opened' )
            } )
        }
    } )
}
