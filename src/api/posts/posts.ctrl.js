let postId = 1;

// default data
const posts = [
  {
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
  },
];

export const write = (ctx) => {
  // REST API Request body can be called from ctx.request.body
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

// GET /api/posts
export const list = (ctx) => {
  ctx.body = posts;
};

// GET /api/posts/:id
export const read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((post) => post.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: 'Post not found',
    };
    return;
  }
  ctx.body = post;
};

// DELETE /api/posts/:id
export const remove = (ctx) => {
  const { id } = ctx.params;
  const postIndex = posts.findIndex((post) => post.id.toString() === id);
  if (postIndex === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'Post not found',
    };
    return;
  }
  posts.splice(postIndex, 1);
  ctx.status = 204; // NO Contents
};

// PUT /api/posts/:id
export const replace = (ctx) => {
  const { id } = ctx.params;
  const postIndex = posts.findIndex((post) => post.id.toString() === id);
  if (postIndex === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'Post not found',
    };
    return;
  }
  posts[postIndex] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[postIndex];
};

// PATCH /api/posts/:id
export const update = (ctx) => {
  const { id } = ctx.params;
  const postIndex = posts.findIndex((post) => post.id.toString() === id);
  if (postIndex === -1) {
    ctx.status = 404;
    ctx.body = {
      message: 'Post not found',
    };
    return;
  }
  posts[postIndex] = {
    ...posts[postIndex],
    ...ctx.request.body,
  };
  ctx.body = posts[postIndex];
};
