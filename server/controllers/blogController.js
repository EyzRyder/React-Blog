const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err)
        });
    
            // .sort({ createdAt: -1 })/
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(404).render('404');
            console.log(err);
        });
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
}

const blog_create_post = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}