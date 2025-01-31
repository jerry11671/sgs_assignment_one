// Import necessary dependencies
const express = require('express');
const Joi = require('joi');
const app = express();

// Set the port for the app
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse the JSON requests


let courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    {id: 3, name: 'course3'}
]

// Function to validate the course
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return schema.validate(course);
}

// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
})


// Get all courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
})


// Get a single course by ID
app.get('/api/courses/:id', (req, res) => { 
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID is not found');
    res.send(course);
}) 


// Create a new course
app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});


// Update a course by ID
app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID is not found');

    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);


    course.name = req.body.name;
    res.send(course);

})

// Delete a course by ID
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID is not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})


// Start the server
app.listen(port, () => {
    console.log('Listening on port 3000');
})
