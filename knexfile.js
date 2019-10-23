let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/gc_manager_db' : 'postgres://localhost/gc_manager_db'
  
  module.exports = {
    development: {
        client: 'pg',
        connection: connectionString,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
  };
  