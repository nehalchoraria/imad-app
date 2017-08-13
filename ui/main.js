console.log('Loaded!');

img = document.getElementById('madi');

margin = 0 ;

x = function()
{
    margin = margin + 10 ; 
    img.style.marginLeft = margin + 'px' ; 
};

img.onclick =  setInterval(x,100) ; 
