let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
  { id: 4, title: "Post Four" },
  { id: 5, title: "Post Five" },
];

// GET ALL POST(GET: /api/posts)
export const getPosts = (req, res) => {
  console.log(req.query);
  const limit = Number(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
};

// GET A POST(GET: /api/posts/:id)
export const getPost = (req, res, next) => {
  const id = Number(req.params.id);
  const postById = posts.find((post) => post.id === id);
  if (!postById) {
    const error = new Error("No post with this id");
    error.status = 404;
    return next(error);
  } else {
    res.status(200).json(postById);
  }
};

// CREATE A POST(POST: /api/posts)
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error("All fields are important");
    error.status = 404;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(newPost);
};

// UPDATE A POST(PATCH: /api/posts/:id)
export const updatePost = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status("404").json({ message: "This post can not be found" });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

// DELETE A POST(DELETE: /api/posts/:id)
export const deletePost = (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status("404").json({ message: "This post can not be found" });
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
