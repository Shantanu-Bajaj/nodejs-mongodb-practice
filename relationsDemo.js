const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

//One to One demo

// async function oneToOneRelation()
// {
//   try
//   {
//     let result = await client.db("practice").collection("relationsDemo").insertOne({
//       "StudentName":"Shantanu Bajaj",
//       "StudentEmail":"shantanu@xyz.com",
//       "StudentPhone":1234567890,
//       "StudentAddress":{
//         "Line1":"hajwhjkhds",
//         "Line2":"seukhrjkhse",
//         "City":"Aurangabad",
//         "Country":"India",
//         "Pincode":123456,
//       }
//     })
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   }
//   finally
//   {
//     await client.close();
//   }
// }

// oneToOneRelation().catch(console.dir);

//One to Many demo using embedded model

// async function oneToManyEmbeddedRelation()
// {
//   try
//   {
//     let result = await client.db("practice").collection("relationsDemo").insertOne(
//     {
//         "StudentName":"Nandini Joshi",
//         "StudentEmail":"nandu@xyz.com",
//         "StudentPhone":1237894560,
//         "StudentAddress":[
//             {
//                 "permaAddress":"xxxxxxxx",
//                 "City":"Aurangabad",
//                 "PinCode":123456
//             },
//             {
//                 "currAddress": "pppppp",
//                 "City": "Chennai",
//                 "PinCode": 789456
//             }
//         ]}) 
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   }
//   finally
//   {
//     await client.close();
//   }
// }

// oneToManyEmbeddedRelation().catch(console.dir);


//Reading Data

// async function findAll()
// {
//   try
//   {
//     let cursor = client.db("practice").collection("relationsDemo").find({})
//     if ((await cursor.count()) === 0) {
//         console.log("No documents found!");
//     }
//     await cursor.forEach(console.dir);
//   }
//   finally
//   {
//     await client.close();
//   }
// }

// findAll().catch(console.dir);

// async function find1()
// {
//     try
//     {
//         let result = await client.db("practice").collection("relationsDemo").findOne(
//             {StudentName:"Nandini Joshi"},
//             {projection:{"StudentAddress.permaAddress":1,"StudentAddress.currAddress":1}}
//             ) 
//        console.log(result);
        
//     }
//     finally
//     {
//         await client.close()
//     }
// }
// find1().catch(console.dir);


// One to Many demo using reference model

// async function oneToManyReferenceRelation()
// {
//   try
//   {
//     let result = await client.db("practice").collection("teacher").insertMany([
//       { 
//         "TeacherId": "k_hut_2022", 
//         "ClassName": "khutA", 
//         "ClassId": "D_123", 
//         "Studentcount": 44, 
//         "Subject": "DSA", 
//       },
//       { 
//         "TeacherId": "k_hut_2022", 
//         "ClassId": "D_234", 
//         "ClassName": "khutB", 
//         "Studentcount": 55, 
//         "Subject": "Compiler", 
//       },
//       { 
//         "teacherName": "Bhavesh", 
//         "TeacherId": "k_hut_2022", 
//         "classIds": [ 
//         "D_123", 
//         "D_234" 
//         ] 
//       } 
//     ])

//     console.log(result);
//   }
//   finally
//   {
//     await client.close();
//   }
// }

// oneToManyReferenceRelation().catch(console.dir);


//Finding in one to many reference model

async function findAll()
{
  try
  {
    let cursor = client.db("practice").collection("teacher").find({})
    if ((await cursor.count()) === 0) {
        console.log("No documents found!");
    }
    await cursor.forEach(console.dir);
  }
  finally
  {
    await client.close();
  }
}

findAll().catch(console.dir);