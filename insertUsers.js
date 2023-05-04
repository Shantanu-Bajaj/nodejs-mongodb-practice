const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

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
async function addMany()
{
  try
  {
    let result = await client.db("practice").collection("users").insertMany([
    {
        "name":"Nandini Joshi",
        "email":"nandu@xyz.com",
        "phone":2783647826,
        "address":"jkehsfjkhsdkl",
    },
    {
        "name":"Jadescarjo",
        "email":"jadescarjo@xyz.com",
        "phone":8923475873,
        "address":"sjkeghtjkfehs",
    },
    {
        "name":"Vaibhav Dhilpe",
        "email":"vaibhav@xyz.com",
        "phone":1237890456,
        "address":"iserihsdkhfksdhfsjhrefjk",
    },
    {
        "name":"Aniket Hake",
        "email":"aniket@xyz.com",
        "phone":0912837465,
        "address":"kwjehrsjkhdjkhfvkshejkahrjkseh",
    },
    {
        "name":"Vinayak Kalushe",
        "email":"vinayak@xyz.com",
        "phone":8293476450,
        "address":"ieikvrulskdyufkvuwkeu iouweioruviowu sejkhr",
    },
    {
        "name":"Parag Chirde",
        "email":"parag@xyz.com",
        "phone":1452367809,
        "address":"seukhrjkvhsdjkfyvks kueyhrjksvherih io iouweioruviowu sejkhr",
    },
    {
        "name":"Jaideep Khedekar",
        "email":"jaideep@xyz.com",
        "phone":0967824351,
        "address":"ieikvrulskdyufkvuwkeu iouweioruviowu dfsg drtb ert",
    },
  ])
    console.log(result);
  }
  finally
  {
    await client.close();
  }
}
addMany().catch(console.dir);

