const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//const url = 'mongodb://localhost:27017/';
const url = 'mongodb+srv://farith:123@cluster0.fadgzqe.mongodb.net/?retryWrites=true&w=majority'
const dbname = 'ConFusionDB';
const dboper = require('./operations');

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
   

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes", (result) => {
            console.log("Insert Document:\n", result);
        });

    dboper.findDocuments(db, "dishes", (docs) => {
            console.log("Found Documents:\n",docs);

           
     });

     dboper.updateDocument(db, { name: "Vadonut" },
     { description: "Updated Test" }, "dishes",
     (result) => {
         console.log("Updated Document:\n", result);
         
     });

     dboper.findDocuments(db, "dishes", (docs) => {
        console.log("Found Updated Documents:\n", docs);
       
     });
   
      
     db.dropCollection("dishes", (result) => {
        console.log("Dropped Collection: ", result);
        client.close();
     });

    
               
  
     
});
