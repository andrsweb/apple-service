document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	tooggleTabItem( tabsParent, tabs )
	hideTabContent( tabsContent, tabs )
	tabShowContent( 0, tabsContent, tabs)
} )


const tabsParent  = document.querySelector( '.popular-items')
	const tabs        = document.querySelectorAll( '.popular-item')
	const tabsContent = document.querySelectorAll( '.popular-content')

	if ( ! tabsParent || ! tabs.length || ! tabsContent.length ) return

	const tooggleTabItem = ( parent, child ) => {

		parent.addEventListener( 'click', ( e ) => {
			const target = e.target

			if ( target && target.classList.contains( 'popular-item' ) ) {
				child.forEach( ( item, i ) => {

					if( target ==  item ) {
						hideTabContent( tabsContent, tabs )
						tabShowContent( i, tabsContent, tabs )
					}
				} )
			}
		} )
	}

	const hideTabContent = ( content, tab ) => {

		content.forEach( item => {
			item.style.display = "none"
		} )

		tab.forEach( item => {
			item.classList.remove( 'popular-item.active' )
		} )
	}

	const tabShowContent = ( i, content, tab  ) => {
		content[i].style.display = 'block'
		tab[i].classList.add( 'popular-item.active' )
	}

