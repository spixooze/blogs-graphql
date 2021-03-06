const mongoose = require('mongoose')
const { Schema } = mongoose

const likeSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  _blogPost: { type: Schema.Types.ObjectId, ref: 'Blog' }
})

module.exports = mongoose.model('Like', likeSchema)
