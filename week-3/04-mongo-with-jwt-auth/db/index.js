const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dravid1001:mongoDB%7B%7B789@cluster0.csyl9nc.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    Authorization: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    Authorization: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id: String,
    title: String,
    description: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}