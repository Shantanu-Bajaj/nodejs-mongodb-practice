const {MongoClient, Long} = require("mongodb")
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
const db = client.db('practice')

const user = {
    name:"Shantanu Bajaj",
    email:"shantu@gmail.com",
    phone:1029384756,
    post_ids:[]
}

const post = {
    title:"Post 10",
    body:"Body 10",
    user_ids:[]
}

const userId = '63ee17b51ecaf5a06e74f034'
const postId = '63ee144c1b0ac98aabe8b39d'

// async function addOne()
// {
//     try
//     {
//         let result = await db.collection("users").insertOne(user)
//         console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     }
//     finally
//     {
//         await client.close();
//     }
// }

// addOne();


// async function addOne()
// {
//     try{
//         let result = await db.collection("user_groups").insertOne({user_id:userId,post_id:postId})
//         console.log(`A document was inserted with the _id: ${result.insertedId}`);

//     }
//     finally{
//         client.close()
//     }
// }

// addOne()

// async function getRelations()
// {
//     try{
//         let user_groups = await db.collection('user_groups').findOne({userId})
//         console.log(user_groups);
//         let group_ids = user_groups.map((user_group)=>user_group.group_id);
//         console.log(group_ids);
//         let result = await db.collection('groups').find({_id:{$in:group_ids}}).toArray()
//         console.log(result);
//     }
//     finally{
//         await client.close()
//     }
// }

// getRelations()


async function getRelations()
{
    try{
        await db.collection('user_groups').find({ userId }).toArray((err, user_groups) => {
            if (err) {
              console.log(err);
            } else {
              const group_ids = user_groups.map((user_group) => user_group.group_id);
              db.collection('posts').find({ _id: { $in: group_ids } }).toArray((err, groups) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log('Groups for user:', groups);
                }
              });
            }
          });
    }
    finally{
        await client.close()
    }
}

getRelations()

