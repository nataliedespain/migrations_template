
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'test', password: 'test', email: 'test@testy.com', age: 21},
        {username: 'fake', password: 'fake', email: 'fake@fakey.com', age: 12},
        {username: 'hello', password: 'hello', email: 'hello@hello.com', age: 50},
        {username: 'admin', password: 'admin', email: 'admin@admin.com', age: 999}
      ]);
    });
};
