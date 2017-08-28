var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto') ;

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article_one' : { title:'Article One',
    heading : 'Article One ',
    date : '13 August 2017',
    content : `<p> This is article one. This is article one. This is article one. This is article one. This is article one. This is        article one. This is article one. This is article one. 
            </p> `
},
    'article_two' : { title:'Article One',
    heading : 'Article Two ',
    date : '11 August 2017',
    content : `<p> This is article two. This is article two. This is article two. This is article two. This is article two. This is article two. This is article two. This is article two. 
            </p> `
},
    'article_three' : { title:'Article Three',
heading : 'Article Three ',
date : '12 August 2017',
content : `<p> This is article three. This is article three. This is article three. This is article three. This is article three. This is article three. This is article three. This is article three. 
        </p> `
},
};

function htmlbody(data)
{
    title = data.title ;
    heading = data.heading ;
    date = data.date;
    content = data.content;
    
   html = ` <html>
    <head> 
        <Title> ${title} </Title> 
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
        
    <body>
        <div class = "Bar">
        <a href = "/" style =" padding-right : 50px" > Home </a> 
        <a href = "/article_one" style =" padding-right : 50px" > ArticleOne </a>
        <a href = "/article_two" style =" padding-right : 50px" > ArticleTwo </a>
        <a href = "/article_three" style =" padding-right : 50px" > ArticleThree </a>
        <hr> <br>
        </div>
    
        <div class = "Container">
        <h2> ${heading} </h2>
        <p> ${date} </p>
        <p> ${content} </p>
        </div>
    </body>
    
</html> `

    return html ;
    
}

var counter = 0 ;
app.get('/counter', function (req, res) {
    counter = counter + 1 
  res.send(counter.toString());
});

var names = []
app.get('/submit-name/:name' , function(req,res){
    
    var name = req.params.name ;
    names.push(name);
    res.send(JSON.stringify(names))

});

var com = [];
app.get('/comments' , function(reqt,res)
{
    var n = reqt.query.com;
    com.push(n);
    res.send(JSON.stringify(com))
});



app.get('/hash/:input',function(req,res)
{
    var h = hash(req.params.input,100000)
    res.send(h)
    
});

function hash(plaintext,salt)
{
    var hashed = crypto.pbkdf2Sync(plaintext,salt, 100000, 512, 'sha512');
    return hashed.toString();
}


app.get('/:articlename' , function(req,res){
    articlename = req.params.articlename;
    res.send(htmlbody(articles[articlename]));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
