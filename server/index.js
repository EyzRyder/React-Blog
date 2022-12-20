const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const { getDb, connectToDb } = require('./db');
const { ObjectId } = require('mongodb')



app.use(cors());
app.use(express.json());

let db;

connectToDb((err) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`)
        });
        db = getDb();
        console.log("connect to db");
    }
    else {
        console.log(err);
    }
});


app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/blogs', (req, res) => {
    // current page
    const page = req.query.p || 0
    const blogPerPage = 3

    let blog = []

    db.collection('blogs')
        .find()
        .sort({ author: 1 })
        .skip(page * blogPerPage)
        .limit(blogPerPage)
        .forEach(book => blog.push(book))
        .then(() => {
            res.status(200).json(blog)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

app.get('/blogs/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        db.collection('blogs')
            .findOne({ _id: new ObjectId(req.params.id) })
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not fetch the documents' })
            })
    } else {
        res.status(500).json({ error: 'not a valid doc id' })
    }

});


app.delete('/blogs/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('blogs')
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(() => {
                res.status(500).json({ error: 'Could not delete the documents' })
            })
    } else {
        res.status(500).json({ error: 'not a valid doc id' })
    }
});

app.patch('/blogs/:id', (req, res) => {
    const updates = req.body;

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(201).json(result);
            }).catch(err => {
                res.status(500).json({ error: 'could not update new doc' })
            });
    } else {
        res.status(500).json({ error: 'not a valid doc id' })
    }


});
