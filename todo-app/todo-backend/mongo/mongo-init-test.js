db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'test_database',
    },
  ],
});

db.createCollection('todos');
