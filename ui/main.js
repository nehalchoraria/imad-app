console.log('Loaded!');

img = document.getElementById('madi');

margin = 0 ;

function Move()
{
    margin = margin + 5 ; 
    img.style.marginLeft = margin + 'px' ; 
}

img.onclick =  function()
{
    setInterval(Move,100) ; 
};

//img.onclick = alert('Hi') ;