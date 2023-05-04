const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

//Sample dataset

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//Insert single document

// async function addOne()
// {
//   try
//   {
//     let result = await client.db("practice").collection("posts").insertOne({
//       "title":"Post 1",
//       "body":"Body 1"
//     })
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   }
//   finally
//   {
//     await client.close();
//   }
// }


//insert multiple documents
// async function addMany()
// {
//   try
//   {
//     let result = await client.db("practice").collection("posts").insertMany([
//     {
//       "title":"Post 2",
//       "body":"Body 2"
//     },
//     {
//       "title":"Post 3",
//       "body":"Body 3"
//     },
//     {
//       "title":"Post 4",
//       "body":"Body 4"
//     },
//     {
//       "title":"Post 5",
//       "body":"Body 5"
//     },
//     {
//       "title":"Post 6",
//       "body":"Body 6"
//     },
//     {
//       "title":"Post 7",
//       "body":"Body 7"
//     },
//   ])
//     console.log(result);
//   }
//   finally
//   {
//     await client.close();
//   }
// }
// addMany().catch(console.dir);

