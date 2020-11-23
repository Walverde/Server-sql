const db = require('../config/db.config')


// SELECT
async function select() {
    const db = await connect()
    const [rows] = await db.query('SELECT * FROM BinDataMinutos;') // vai separar somente as linhas e 
    return rows
}