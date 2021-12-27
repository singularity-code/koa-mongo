import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
	title: String,
	body: String,
	tags: [String], // Array of strings
	publishedDate: {
		type: Date,
		default: Date.now, // default value
	},
	user: {
		_id: mongoose.Types.ObjectId,
		username: String,
	},
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
