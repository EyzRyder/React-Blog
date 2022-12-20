const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
    connectToDb: (callBack) => {
        MongoClient.connect('mongodb://127.0.0.1:27017/blogReact')
            .then(client => {
                dbConnection = client.db()
                return callBack()
            })
            .catch(err => {
                console.log(err);
                return callBack(err)
            });
    },
    getDb: () => dbConnection
}