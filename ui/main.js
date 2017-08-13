console.log('Loaded!');

img = document.getElementById('madi');

margin = 0 ;

function Move()
{
    margin = margin + 10 ; 
    img.style.marginLeft = margin + 'px' ; 
}

img.onclick =  setInterval(Move,100) ; 