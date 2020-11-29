const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbGoogleBooks:password@cluster0.0eqkm.mongodb.net/googlebooks?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const Book = mongoose.model('Book', { 
    title: String,
    authors: Array,
    description: String,
    image: String,
    link: String 
});