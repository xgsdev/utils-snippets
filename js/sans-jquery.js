/* no jquery */

function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
} 

/* USAGE */

$$( '.pie' ).forEach( function( pie ) {
  pie.classList.add( 'cream' );
});



var _ = function ( elem ) {
  return document.querySelectorAll( elem );
}

/* USAGE */
var myClass = _('.myClass');

