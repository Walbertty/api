const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers.JS')

async function migrationsRun() {
    const schemas = [
        createUsers
    ].join('')

    sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun


