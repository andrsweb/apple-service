import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	formOnClick()
	submitForm( '.form', '.form-response', 'send-form.php')
} )

const formOnClick = () => {
	const formWrapper = document.querySelector( '.form-wrapper' )
	const formButton  = document.querySelectorAll( '.open-form' )
	setTargetElement( document.querySelector( '#form-lock' ) )

	if ( ! formWrapper && ! formButton ) return

	formButton.forEach( button => {
		button.addEventListener( 'click', () => {
			if ( ! formWrapper.classList.contains( 'openned' ) ) {
				disableBodyScroll( getTargetElement() )
				formWrapper.classList.add( 'opened' )
			} else {
				formWrapper.classList.remove( 'opened' )
				enableBodyScroll( getTargetElement() )
			}
		} )
	} )

	formWrapper.addEventListener( 'click', e => {
        e.stopPropagation()

        const target = e.target

        if ( target.className && target.classList.contains( 'form-wrapper' ) ) {
			formWrapper.classList.remove( 'opened' )
			enableBodyScroll( getTargetElement() )
		}
    } )
	window.addEventListener( 'scroll', () => {
		if (
			! localStorage.getItem( 'showed' ) &&
			window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight
		) {
			formWrapper.classList.add( 'opened' )
			localStorage.setItem( 'showed', 1 )
			disableBodyScroll( getTargetElement() )
		}
	} )
}

const submitForm = ( selector, response, php ) => {
	const forms	= document.querySelectorAll( selector )

	if( ! forms.length ) return

	forms.forEach( form => {
		form.addEventListener( 'submit', e => {
			e.preventDefault()

			const formResponse	= document.querySelector( response ),
				request		= new XMLHttpRequest(),
				formData		= new FormData( form )

			request.open( 'post', php , true )

			formResponse.classList.remove( ['success', 'error'] )
			formResponse.textContent = 'Обработка...'

			request.addEventListener( 'load', () => {
				if  ( request.status === 200 ) {
					form.classList.add( 'success' )
					form.innerHTML = request.response
				} else {
					formResponse.classList.add( 'error' )
					console.error( request.response )
				}
			} )

			request.send( formData )
		} )
	} )
}