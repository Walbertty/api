const createUsers = `
CREATE TABLE IF NOT EXISTS
  users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at TIMESTAMP DEFULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFULT CURRENT_TIMESTAMP
  )
`

module.exports = createUsers

/* Migration serve para recriar uma table caso a gente precise */