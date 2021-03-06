require('dotenv').config();
const express= require('express');
const orm= require('./config/orm')
const PORT= process.env.PORT|| 3000;
const app = express();
// telling it to use express and look in our public folder 
app.use(express.static('public'));
// turn our code into JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set up routes 
const routes = require('./controllers/burgers_controller');
app.use(routes);

app.get('/', async function(req, res) {
  const burgers = await orm.all("burgers")
  res.render('index',{burgers})
});

// use handelbars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// our listener and link to our port
app.listen(PORT, function() {
    console.log(`SERVER LISTENING ON: http://localhost:${PORT}`);
    console.log('----------------------------');
    require('./config/connection').create();
  });

  
