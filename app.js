/* Initialize express */
var express = require('express');
/* Initialize app */
var app = express();
/* serve static files */
app.use(express.static('./'));
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('imgs'));
/* Initialize listener - Initialize server */
var listener = app.listen(1111, function() {
    console.log('Express server started with address http://%s:%s', listener.address().address, listener.address().port);
});