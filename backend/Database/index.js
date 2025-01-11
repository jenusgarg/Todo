const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://jenusgarg:Temp%40123@cluster0.i9bcs.mongodb.net/Todo_app');


const UserSchema = new mongoose.Schema({
    username: String,
    descriptod: String,
    completed: Boolean
});



const todo = mongoose.model('todos', UserSchema);

module.exports = {
    todo
}