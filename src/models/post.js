import { Mongoose } from 'mongoose';

const { Schema } = Mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // Array of strings
  publishedDate: {
    type: Date,
    default: Date.now, // default value
  },
});

const Post = Mongoose.model('Post', PostSchema);
export default Post;