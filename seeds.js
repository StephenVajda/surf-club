const faker=require('faker');
const Post=require('./models/post');

async function seedPosts(){
    await Post.remove({});
    for(const i of new Array(40)){
    const post={
        title: faker.lorem.word(),
        description: faker.lorem.text(),
        author: { 
            '_id':'61faf6a0fe8c56f35a82a1c7',
            password:'abc123' 
            }
        }
        await Post.create(post);
    }
    console.log("40 new posts created");
}

module.exports=seedPosts;