const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('');


const UserSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});



const todo = mongoose.model('todos', UserSchema);

module.exports = {
    todo
}