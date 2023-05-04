const {MongoClient} = require("mongodb");
const uri = process.env.MONGODB_URI;; 
const client = new MongoClient(uri);

// connect()
// async function connect()
// {
//     await client.connect((err, client) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Connected successfully to MongoDB server");
//           const db = client.db('NodejsMongodb'); // Replace `mydb` with your database name
//           // Perform database operations
//           client.close(); // Close the connection
//         }
//       });
      
// }


await client.connect()

//Insert single document

// async function addOne()
// {
//   try
//   {
//     let result = await client.db("practice").collection("users").insertOne({
//       "name":"Shantanu Bajaj",
//       "email":"shantanu@xyz.com",
//       "phone":123456789,
//       "address":"sjkeghtjkfehs",
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
//     let result = await client.db("NodejsMongodb").collection("users").insertMany([
//     {
//         "name":"Nandini Joshi",
//         "email":"nandu@xyz.com",
//         "phone":2783647826,
//         "address":"jkehsfjkhsdkl",
//     },
//     {
//         "name":"Jadescarjo",
//         "email":"jadescarjo@xyz.com",
//         "phone":8923475873,
//         "address":"sjkeghtjkfehs",
//     }
//   ])
//     console.log(result);
//   }
//   finally
//   {
//     await client.close();
//   }
// }
// addMany()

