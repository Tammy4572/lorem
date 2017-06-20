const express = require('express');
let loremIpsum = require('lorem-ipsum');

let application = express();

application.get('/lorem/', function(request, response) {
    response.send(loremIpsum({
        count: 5,
        units: 'paragraph',
        format: 'html'
    }))
});

application.listen(3000, () =>{

});