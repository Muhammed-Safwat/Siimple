
function display( event ){
    console.log(event.target)
}

let a = document.querySelector( ".offcanvas" );
let b = document.querySelector( "body" );
console.log( a.classList);

function closeN(){
    a.classList.remove( "show" );
    a.style.visibility = "hidden";
    b.style.overflow= "visible";
    b.style.padding= "0";
    console.log( a );
}
let toggle = 1;
function toggleIcon(event)
{
        let a = event.target.firstElementChild;
    let b = event.target.firstElementChild.nextSibling;
    if ( toggle === 1 )
    {
        a.classList.remove( "icon-show" );
        a.classList.add( "icon-hidden" );
        b.classList.add( "icon-show" );
        b.classList.remove( "icon-hidden" );
        toggle = 0;
    } else
    {
        a.classList.add( "icon-show" );
        a.classList.remove( "icon-hidden" );
        b.classList.remove( "icon-show" );
        b.classList.add( "icon-hidden" );
        toggle = 1;
    }
}