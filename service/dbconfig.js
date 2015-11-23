module.exports = {
    user: 'y6tuser',
    password: 'y6tuser',
    server: 'localhost',
    database: 'ProjectDB',
    pool: {
        idleTimeoutMillis: 2000,
        rowCollectionOnRequestCompletion: false
    },
    options: {
        instanceName: 'SQLEXPRESS'
        //for SQL 2014 EXPRESS, SQL Server Browser Service must be running
    }
};