
b = document.getElementById('b');

b.onclick = function()
{
    var request = new XMLHttpRequest();
   
    request.onreadystatechange = function()
    {
        if(request.readyState == XMLHttpRequest.DONE)
        {
        
          if(request.status == 200)
            {
                var counter = request.resposneText;
                s = document.getElementById('s');
                console.log(counter)
                s.innerHTML = counter.toString()
            }
        }
    };
    
     request.open('GET','http://nehalchoraria0987.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
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