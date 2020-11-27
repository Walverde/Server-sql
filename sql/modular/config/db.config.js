const env = require('./env')

const loc = env.loc
const nuvi = env.nuv

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') // Se existir uma conexão globão, & o estado dela for (!==) diferente de desconectado. Então, se retorna a conxão já existente. 
        return global.connection
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection({ // vai aguardar terminar isso, para poder proseguir. 
        host: loc.host,
        user: loc.user,
        password: loc.password,
        database: loc.database
    })
    console.log("db.js => executando. |  status: Conetado") // só vai executar depois conetar. Mode "ENCADEAR PROMOSES". 
    global.connection = connection
    return connection
}

module.exports = { connect }