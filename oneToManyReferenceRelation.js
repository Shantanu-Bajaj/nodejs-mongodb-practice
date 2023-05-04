const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

const db = client.db("practice");
const userId = '63ee17b51ecaf5a06e74f034';
const postId = ''

var post = {
    title:"Post 9",
    body:"Body 9",
    user_id: userId
}

// addOne()

// async function addOne()
// {
//     try
//     {
//         await db.collection('posts').insertOne(post,(err,result)=>{
//             if(err) 
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log("Post saved",result);
//             }
//         })
//     }
//     finally
//     {
//         await client.close();
//     }
// }


// async function addOne()
// {
//     try
//     {
//         let result = await db.collection("posts").insertOne(post)
//         console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     }
//     finally
//     {
//         await client.close();
//     }
// }

// addOne();

async function findAll()
{
    try{
        let result = await db.collection('posts').find({user_id:userId}).toArray()
        console.log(result);
    }
    finally
    {
        await client.close();
    }
}

findAll()