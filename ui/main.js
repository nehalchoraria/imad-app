
button = document.getElementById('buttontoclick');
counter = 0 ;

button.onClick = function()
{
  counter = coutner + 1 ;
  alert("Hi");
  span.innerHTML = counter.toString();
};

// console.log('Loaded!');

// img = document.getElementById('madi');

// margin = 0 ;

// function MoveRight()
// {
//     margin = margin + 5 ; 
//     img.style.marginRight = margin + 'px' ; 
// }

// function MoveLeft()
// {
//     margin = margin - 5 ;
//     img.style.marginRight = margin + 'px' ; 
// }

// counter = 0;

// img.onclick =  function()
// {
//     counter= counter + 1 ; 
//     console.log(counter)
    
    
//     if (counter%2==0)
//     setInterval(MoveRight,50) ; 
//     else
//     setInterval(MoveLeft,50) ; 
// };

//img.onclick = alert('Hi') ;