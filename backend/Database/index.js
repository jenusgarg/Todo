const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('');


const UserSchema = new mongoose.Schema({
    username: String,
    descriptod: String,
    completed: Boolean
});



const todo = mongoose.model('todos', UserSchema);

module.exports = {
    todo
}