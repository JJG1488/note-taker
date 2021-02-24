const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();



const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/assets', express.static(__dirname + '/public'));


// createServer creates a listener event
app.get('/', function(req, res) {
// this creates a header and the type // change the content of the object by changing the text type
    res.writeHead(200, {  'Content-Type': 'text/html' });
    let html = fs.readFileSync(__dirname + '/Develop/public/index.html', 'utf8');
    let message = 'Hello world.... This is the beginning of me knowing how to manipulate html files';
    html = html.replace('{Message}', message);
    // this is the response body (below)
    res.end(html)
})

app.get('/notes', function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync(__dirname + '/Develop/public/notes.html', 'utf8');


    res.end(html)
})

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});



app.listen(port, () => {
    console.log(`App listening on PORT: ${port}`);
  });