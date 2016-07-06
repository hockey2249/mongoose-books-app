var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Author = require('./author.js'),
  Character = require('./character.js');

var BookSchema = new Schema({
  title: String,
  character: [Character.name],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
