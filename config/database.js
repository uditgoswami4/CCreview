'use strict';

const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_username', // replace with your database username
    host: 'localhost',
    database: 'your_database', // replace with your database name
    password: 'your_password', // replace with your database password
    port: 5432,
});

module.exports = pool;
