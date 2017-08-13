console.log('Loaded!');

img = document.getElementById('madi');

margin = 0 ;

function MoveRight()
{
    margin = margin + 5 ; 
    img.style.marginLeft = '0px'
    img.style.marginRight = margin + 'px' ; 
}

function MoveLeft()
{
    margin = margin - 5 ;
    img.style.marginRight = '0px'
    img.style.marginLeft = margin + 'px' ; 
}

counter = 0;

img.onclick =  function()
{
    counter= counter + 1 ; 
    console.log(counter)
    
    
    if (counter%2 === 0)
    setInterval(MoveRight,50) ; 
    else
    setInterval(MoveLeft,50) ; 
};

//img.onclick = alert('Hi') ;