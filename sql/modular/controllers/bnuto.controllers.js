const db = require('../config/db.config')
const bmodel = require('..//models/bnuto.model')

// CONEXÃO
async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') // Se existir uma conexão globão, & o estado dela for (!==) diferente de desconectado. Então, se retorna a conxão já existente. 
        return global.connection
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection({ // vai aguardar terminar isso, para poder proseguir. 
        host: "ddbengenharia.com.br",
        user: 'ddbeng30_scd',
        password: '78985214',
        database: 'ddbeng30_teste'
    })
    console.log("db.js => executando. |  status: Conetado") // só vai executar depois conetar. Mode "ENCADEAR PROMOSES". 
    global.connection = connection
    return connection
}

// SELECT
async function select() {
    const db = await connect()
    const [rows] = await db.query('SELECT * FROM BinDataMinutos;') // vai separar somente as linhas e 
    return rows
}

// INSERT 
async function insert(data) { // Data tem que esta parcedado em DATA, para poder funcionar. 
    const db = await connect()
    const sql = 'INSERT INTO BinDataMinutos set?' // Nome da tabela. 
    const values = bmodel.model(data)
    await db.query(sql, values)
    console.log("Daods inserdos com sucesso")
}

// ATUALIZAÇÃO
async function update(data, id, set) {
    const conn = await connect();
    const sql = 'UPDATE BinDataMinutos SET nome=?, uf=? WHERE id=?'
    const values = bmodel.model(data)
    return await conn.query(sql, values);
}

//DELETE
async function deletes(id) {
    const db = await connect();
    const sql = 'DELETE FROM BinDataMinutos where id=?'
    return await db.query(sql, [id])
}


module.exports = { connect, select, insert, update, deletes }

