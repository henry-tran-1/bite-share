export async function seed(knex) {
  await knex('messages').del()
  await knex('baskets').del()
  await knex('matches').del()
  await knex('users').del()

  await knex('users').insert([
    {
      id: 'auth|123',
      username: 'user1',
      full_name: 'User One',
      email: 'user1@example.com',
      points: 0,
      location: 'NorthShore',
      icon: '',
    },
    {
      id: 'auth|456',
      username: 'user2',
      full_name: 'User Two',
      email: 'user2@example.com',
      points: 0,
      location: 'SouthAuckland',
      icon: '',
    },
    {
      id: 'auth|789',
      username: 'user3',
      full_name: 'User Three',
      email: 'user3@example.com',
      points: 0,
      location: 'EastAuckland',
      icon: '',
    },
    {
      id: 'auth|101',
      username: 'user4',
      full_name: 'User Four',
      email: 'user4@example.com',
      points: 0,
      location: 'WestAuckland',
      icon: '',
    },
    {
      id: 'auth|202',
      username: 'user5',
      full_name: 'User Five',
      email: 'user5@example.com',
      points: 0,
      location: 'SouthAuckland',
      icon: '',
    },
    {
      id: 'auth0|67476f8defa904b4cd515493',
      username: 'superhenry',
      full_name: 'Henry Tran',
      email: 'henry@example.com',
      points: 0,
      location: 'EastAuckland',
      icon: '',
    },
    
  ])

  await knex('baskets').insert([
    {
      id: 1,
      user_id: 'auth|123',
      description: 'Fresh vegetables and fruits for a healthy diet.',
      categories: 'Vegetables,Fruit',
      dietary_content: 'Vegan,GlutenFree',
      location: 'NorthShore',
      status: 'active',
      image: '',
      created_at: 1698557400000,
      updated_at: 1698557700000,
    },
    {
      id: 2,
      user_id: 'auth|456',
      description: 'Mixed fruits basket for a nutritious snack.',
      categories: 'Fruit,Snacks',
      dietary_content: 'Vegetarian,GlutenFree',
      location: 'SouthAuckland',
      status: 'active',
      image: '',
      created_at: 1698559200000,
      updated_at: 1698559500000,
    },
    {
      id: 3,
      user_id: 'auth|789',
      description: 'Fresh seafood and eggs for a protein-packed meal.',
      categories: 'Seafood,Eggs',
      dietary_content: 'Halal',
      location: 'EastAuckland',
      status: 'active',
      image: '',
      created_at: 1698561600000,
      updated_at: 1698561900000,
    },
    {
      id: 4,
      user_id: 'auth|101',
      description: 'Variety of meats for a protein-rich diet.',
      categories: 'Meat',
      dietary_content: 'GlutenFree,Halal',
      location: 'WestAuckland',
      status: 'active',
      image: '',
      created_at: 1698564000000,
      updated_at: 1698564300000,
    },
    {
      id: 5,
      user_id: 'auth|202',
      description: 'Eggs and dairy items for a balanced diet.',
      categories: 'Eggs,Dairy',
      dietary_content: 'Vegetarian,GlutenFree',
      location: 'NorthShore',
      status: 'inactive',
      image: '',
      created_at: 1698566400000,
      updated_at: 1698566700000,
    },
    {
      id: 6,
      user_id: 'auth|123',
      description: 'Assorted snacks including chips and confectionery.',
      categories: 'Snacks',
      dietary_content: 'Vegetarian',
      location: 'SouthAuckland',
      status: 'inactive',
      image: '',
      created_at: 1698568800000,
      updated_at: 1698569100000,
    },
    {
      id: 7,
      user_id: 'auth|456',
      description: 'Canned foods for emergency supplies.',
      categories: 'Canned',
      dietary_content: 'GlutenFree,Halal',
      location: 'EastAuckland',
      status: 'active',
      image: '',
      created_at: 1698571200000,
      updated_at: 1698571500000,
    },
    {
      id: 8,
      user_id: 'auth|789',
      description: 'Baking ingredients for your next cake.',
      categories: 'Baking',
      dietary_content: 'Vegetarian',
      location: 'WestAuckland',
      status: 'active',
      image: '',
      created_at: 1698573600000,
      updated_at: 1698573900000,
    },
    {
      id: 9,
      user_id: 'auth|101',
      description: 'Healthy carbs like rice and pasta for meals.',
      categories: 'Carbs',
      dietary_content: 'Vegan,GlutenFree',
      location: 'NorthShore',
      status: 'active',
      image: '',
      created_at: 1698576000000,
      updated_at: 1698576300000,
    },
    {
      id: 10,
      user_id: 'auth|202',
      description: 'Assorted dairy and beverages for a light meal.',
      categories: 'Dairy,Beverages',
      dietary_content: 'GlutenFree,Halal',
      location: 'SouthAuckland',
      status: 'active',
      image: '',
      created_at: 1698578400000,
      updated_at: 1698578700000,
    }
    ,
  ])

  await knex('matches').insert([
    {
      id: 1,
      giver_id: 'auth|123',
      receiver_id: 'auth|456',
      status: 'active',
      created_at: 1698557700000,
      updated_at: 1698558000000,
    },
    {
      id: 2,
      giver_id: 'auth|789',
      receiver_id: 'auth|101',
      status: 'active',
      created_at: 1698559500000,
      updated_at: 1698559800000,
    },
    {
      id: 3,
      giver_id: 'auth|202',
      receiver_id: 'auth|123',
      status: 'active',
      created_at: 1698561600000,
      updated_at: 1698562200000,
    },
    {
      id: 4,
      giver_id: 'auth|456',
      receiver_id: 'auth|789',
      status: 'active',
      created_at: 1698564000000,
      updated_at: 1698564300000,
    },
    {
      id: 5,
      giver_id: 'auth|101',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698566400000,
      updated_at: 1698566700000,
    },
    {
      id: 6,
      giver_id: 'auth|123',
      receiver_id: 'auth|789',
      status: 'active',
      created_at: 1698568800000,
      updated_at: 1698569100000,
    },
    {
      id: 7,
      giver_id: 'auth|456',
      receiver_id: 'auth|101',
      status: 'active',
      created_at: 1698571200000,
      updated_at: 1698571800000,
    },
    {
      id: 8,
      giver_id: 'auth|789',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698573600000,
      updated_at: 1698573900000,
    },
    {
      id: 9,
      giver_id: 'auth|123',
      receiver_id: 'auth|101',
      status: 'active',
      created_at: 1698576000000,
      updated_at: 1698576600000,
    },
    {
      id: 10,
      giver_id: 'auth|456',
      receiver_id: 'auth|202',
      status: 'active',
      created_at: 1698578400000,
      updated_at: 1698578700000,
    },
  ])

  await knex('messages').insert([
    {
      id: 1,
      matches_id: 1,
      sender_id: 'auth|456',
      message: 'Hi, I saw you have some extra food available. Can I take it?',
      sent_at: 1698556800000,
    },
    {
      id: 2,
      matches_id: 1,
      sender_id: 'auth|123',
      message:
        'Sure, I have some leftover pizza. When would you like to pick it up?',
      sent_at: 1698557100000,
    },
    {
      id: 3,
      matches_id: 2,
      sender_id: 'auth|101',
      message:
        'I saw your post about free food. Are the sandwiches still available?',
      sent_at: 1698560400000,
    },
    {
      id: 4,
      matches_id: 2,
      sender_id: 'auth|789',
      message:
        'Yes, I have a few sandwiches left. When can you come by to pick them up?',
      sent_at: 1698561000000,
    },
    {
      id: 5,
      matches_id: 3,
      sender_id: 'auth|123',
      message:
        'Hi, I noticed you’re giving away some food. Is the soup still available?',
      sent_at: 1698562800000,
    },
    {
      id: 6,
      matches_id: 3,
      sender_id: 'auth|202',
      message:
        'Yes, I have some leftover soup. Do you want to come pick it up?',
      sent_at: 1698563100000,
    },
    {
      id: 7,
      matches_id: 4,
      sender_id: 'auth|456',
      message:
        'Hello, I’m looking for some free food. Do you still have the rice available?',
      sent_at: 1698565200000,
    },
    {
      id: 8,
      matches_id: 4,
      sender_id: 'auth|789',
      message: 'Yes, I have some rice left. Would you like to pick it up soon?',
      sent_at: 1698565500000,
    },
    {
      id: 9,
      matches_id: 5,
      sender_id: 'auth|101',
      message:
        'Hi! I saw your offer for free fruit. Are the apples still available?',
      sent_at: 1698567600000,
    },
    {
      id: 10,
      matches_id: 5,
      sender_id: 'auth|202',
      message:
        'Yes, I have a few apples left. When can you come by to grab them?',
      sent_at: 1698567900000,
    },
    {
      id: 11,
      matches_id: 6,
      sender_id: 'auth|123',
      message:
        'Hello, I saw you’re giving away some bread. Is it still available?',
      sent_at: 1698570000000,
    },
    {
      id: 12,
      matches_id: 6,
      sender_id: 'auth|789',
      message:
        'Yes, I have some fresh bread. When would you like to come pick it up?',
      sent_at: 1698570300000,
    },
    {
      id: 13,
      matches_id: 7,
      sender_id: 'auth|456',
      message:
        'Hi, I saw your post about leftover pasta. Is it still available?',
      sent_at: 1698572400000,
    },
    {
      id: 14,
      matches_id: 7,
      sender_id: 'auth|101',
      message:
        'Yes, I have some pasta left. When would you like to come get it?',
      sent_at: 1698572700000,
    },
    {
      id: 15,
      matches_id: 8,
      sender_id: 'auth|789',
      message: 'Hello, are the free bagels still available?',
      sent_at: 1698574800000,
    },
    {
      id: 16,
      matches_id: 8,
      sender_id: 'auth|202',
      message:
        'Yes, I have some bagels left. When would you like to collect them?',
      sent_at: 1698575100000,
    },
    {
      id: 17,
      matches_id: 9,
      sender_id: 'auth|123',
      message: 'Hi, I saw you have extra cakes. Are they still up for grabs?',
      sent_at: 1698577200000,
    },
    {
      id: 18,
      matches_id: 9,
      sender_id: 'auth|101',
      message:
        'Yes, I have some leftover cakes. You’re welcome to come pick them up!',
      sent_at: 1698577500000,
    },
    {
      id: 19,
      matches_id: 10,
      sender_id: 'auth|456',
      message:
        'I saw your post about free snacks. Are the chips still available?',
      sent_at: 1698579600000,
    },
    {
      id: 20,
      matches_id: 10,
      sender_id: 'auth|202',
      message: 'Yes, I have some chips left. When would you like to come by?',
      sent_at: 1698579900000,
    },
  ])
}
