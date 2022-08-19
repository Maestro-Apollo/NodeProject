let path = require('path');
let bodyParser = require('body-parser');

let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

let adminData = require('./routes/admin');
let shopData = require('./routes/shop');

let errorController = require('./controllers/404')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/admin', adminData);
app.use(shopData);

app.use(errorController.error);


app.listen(3000);