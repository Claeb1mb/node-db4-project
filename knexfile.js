// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipe.sqlite3'
    },
    useNullAsDefault: true,
      // Needed when using foreign keys to prevent users from entering bad data
      pool:{
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done)
        }
      }
  },

};
