var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    IP = process.env.IP,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send('Root Route');
});

app.use('/api/todos', todoRoutes);

app.listen(port, IP, () => {
  console.log('Server has started on port ' + port)
});
