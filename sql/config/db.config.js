const env = require('./env')
const cor = env.cor
const msn = env.msn.diag

const loc = env.loc

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
    msn(`Executando => db.config.js | status: Conectado`, cor.FgYellow, cor.FgWhite) // só vai executar depois conetar. Mode "ENCADEAR PROMOSES". 
    global.connection = connection
    return connection
}

const db = {}

db.con1 = connect
db.cor = cor
db.msn = msn

module.exports = db