import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // Array of strings
  publishedDate: {
    type: Date,
    default: Date.now, // default value
  },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
