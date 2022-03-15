const seeder = require('mongoose-seed');
seeder.connect(process.env.MONGODB_URI, function() {
seeder.loadModels([
    'models/User.js',
    'models/Item.js',
    'models/Comment.js'

  ]);
 

 
const users = []
const items = []
const comments = []

for (let i=0 ; i<111; i++){
    users.push({
        'username': `username${i}`,
        'email': `email${i}@email.com`,
        'bio': `bio${i}`
    })
    items.push(
        {'title': `item${i}`,
            'description': `description${i}`,
            'body': "body",
            'tagList': ["Pikachu"]
            }
    )
    comments.push(
    {
        id: i,
        body: `comment${i}`,
    })

}
const data = [
    {
        'model': 'User',
        'documents': users
        
    },
    {
        'model': 'Item',
        'documents': items
    },
    {
        'model':'Comment',
        'documents':comments
    }
];

seeder.clearModels(['User','Item', 'Comment'], function() { 
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
