const Career = require('../models/career');

const career_index = (req, res) => {
    Career.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.log(err)
        });
}

const career_details = (req, res) => {
    const id = req.params.id;
    Career.findById(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(404);
            console.log(err);
        });
}

const career_create_post = (req, res) => {
    // console.log(req.body);
    const career = new Career(req.body);
    career.save()
        .then((result) => {
            console.log(result);
            res.json(result);
            // res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
}

const career_delete = (req, res) => {
    const id = req.params.id;
    Career.findByIdAndDelete(id)
        .then((result) => {
            res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    career_index,
    career_details,
    career_create_post,
    career_delete
}