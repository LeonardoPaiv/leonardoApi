require('dotenv').config();

const express = require('express');
const session = require('express-session')
const app = express()
const cors = require('cors');
const passport = require('passport')

require('./strategies/local');


const mongoose = require('mongoose');
mongoose.connect(process.env.dbConection).then(() => app.emit('on'));


const corsOpitions = {
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}

const skillsController = require('./controllers/skillsController');
const emailController = require('./controllers/emailController');
const softSkillsControler = require('./controllers/softSkillsControler');
const employmentHistory = require('./controllers/employmentController');
const education = require('./controllers/educationController');
const profile = require('./controllers/profileController');
const shortcourse = require('./controllers/shortCourseControler');
const certificate = require('./controllers/CertificateControler');
const projects = require('./controllers/projectsController');
const auth = require('./controllers/authController');

const port = 3001;

app.on('on', () => {
    app.listen(port, () => console.log(`running on port ${port}`))
})

app.use(express.json());
app.use(cors(corsOpitions))

app.use(
    session({
        secret: 'justASimpleTest',
        resave: false,
        saveUninitialized: false
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/skills', skillsController)
app.use('/api/mail', emailController)
app.use('/api/softSkills', softSkillsControler)
app.use('/api/employment', employmentHistory)
app.use('/api/education', education)
app.use('/api/profile', profile)
app.use('/api/shortCourses', shortcourse)
app.use('/api/certificate', certificate)
app.use('/api/projects', projects)
app.use('/auth/', auth)
