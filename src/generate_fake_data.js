import Post from './models/post';

export default function generateFakeData() {
	const posts = [...Array(40).keys()].map((i) => ({
		title: `Post #${i}`,
		body: `Lorem ipsum`,
		tags: ['fake', 'data'],
	}));
	Post.insertMany(posts, (err, docs) => {
		console.log(docs);
	});
}
