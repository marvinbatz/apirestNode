const express = require("express");
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


const app = express();

// setings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// middlewares
app.use(myConnection(mysql, 
    {
        host: 'localhost',
        user: 'root',
        password: '',
        port: '3306',
        database: 'testNode'
    }, 'single'));
app.use(express.json());

// import routes
const testRoutes = require('./routes/test');
const questionsRoutes = require('./routes/questions');
const answerRoutes = require('./routes/answer');
const answerAlumn = require('./routes/alumn');

// routes
app.use('/teacher', testRoutes);
app.use('/questions', questionsRoutes);
app.use('/answer', answerRoutes);
app.use('/alumn', answerAlumn);
  

// static files
app.use(express.static(path.join(__dirname, 'public')));


// server star
app.listen(app.get('port'), () =>
{
    console.log('Server on port', app.get('port'))
});