var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 3000
var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res,next){
    res.render(index.html);
});

app.listen(PORT);