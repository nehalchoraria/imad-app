console.log('Loaded!');

img = document.getElementById('madi');

margin = 0 ;

function Move()
{
    margin = margin + 10 ; 
    img.style.padding = margin + 'px' ; 
}

img.onclick =  function()
{
    setInterval(Move,100) ; 
};