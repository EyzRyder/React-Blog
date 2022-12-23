const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const careerRoutes = require('./routes/careerRoutes');

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


mongoose.set("strictQuery", true);

const dbURI = 'mongodb+srv://EyzRyder:fzo2URQ537@reactrouterblog.x3ekpou.mongodb.net/react-router-blog?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}/`));
        console.log("connect to db");
    })
    .catch((err) => console.log(err));



app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/blogs', blogRoutes)
app.use('/careers', careerRoutes)

// app.post('/blogs', (req, res) => {
//     const { title, body, author } = req.body;

//     db.collection('blogs')
//         .insertOne(
//         {
//             title: title,
//             body: body,
//             author: author
//         }
//     ).then(doc => {
//         res.status(200).json(doc)
//     })
//         .catch(err => {
//         res.status(500).json({ error: 'could not create new doc' })
//     });
// })


// app.get('/blogs/:id', (req, res) => {

//     if (ObjectId.isValid(req.params.id)) {
//         db.collection('blogs')
//             .findOne({ _id: new ObjectId(req.params.id) })
//             .then(doc => {
//                 res.status(200).json(doc)
//             })
//             .catch(() => {
//                 res.status(500).json({ error: 'Could not fetch the documents' })
//             })
//     } else {
//         res.status(500).json({ error: 'not a valid doc id' })
//     }

// });


// app.delete('/blogs/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         db.collection('blogs')
//             .deleteOne({ _id: new ObjectId(req.params.id) })
//             .then(result => {
//                 res.status(200).json(result)
//             })
//             .catch(() => {
//                 res.status(500).json({ error: 'Could not delete the documents' })
//             })
//     } else {
//         res.status(500).json({ error: 'not a valid doc id' })
//     }
// });

// app.patch('/blogs/:id', (req, res) => {
//     const updates = req.body;

//     if (ObjectId.isValid(req.params.id)) {
//         db.collection('books')
//             .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
//             .then(result => {
//                 res.status(201).json(result);
//             }).catch(err => {
//                 res.status(500).json({ error: 'could not update new doc' })
//             });
//     } else {
//         res.status(500).json({ error: 'not a valid doc id' })
//     }


// });
