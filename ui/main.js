
b = document.getElementById('b');

counter = 0 ;

b.onclick = function()
{
    var request = new XMLHTTPRequest();
  
    request.onreadystatechange = function()
    {
        if(request.readystate === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var coutner = request.resposneText
                var sp = document.getElementById('s');
                span.innerHTML = counter.toString();
            }
        }
    }
    
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