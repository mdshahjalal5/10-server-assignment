const express = require('express');
const app = express();
const courses = require('./data.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('10 assignment server running')
})
app.get('/courses', (req, res)=>{
    res.send(courses)
})
app.get('/courses/:id', function(req, res){
    const id = req.params.id;
    const selectedCourse = courses.filter(course => course.id == id);
    res.send(selectedCourse)
    // if(id == )
})
app.listen(5000, function(){
    console.log('server running on port 5000');
})
