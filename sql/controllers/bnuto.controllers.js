const cor = require('../../basics/cores')
const msn = require('../../basics/diags')

const con = require('../config/db.config')
const bmodel = require('../models/bnuto.model')

// SELECT
async function select() {
    const db = await con.connect()
    const [rows] = await db.query('SELECT * FROM BinDataMinutos;') // vai separar somente as linhas e 
    return rows
}

// INSERT 
async function insert(data) { // Data tem que esta parcedado em DATA, para poder funcionar. 
    // const db = require('../config/db.config')
    const db = await con.connect()
    const sql = 'INSERT INTO BinDataMinutos set?' // Nome da tabela. 
    const values = bmodel.model(data)
    await db.query(sql, values)
    msn.diag('Dados inseridos com sucesso',cor.FgCyan,cor.FgGreen)
}

// ATUALIZAÇÃO
async function update(data, id, set) {
    const db = await con.connect()
    const sql = 'UPDATE BinDataMinutos SET nome=?, uf=? WHERE id=?'
    const values = bmodel.model(data)
    return await db.query(sql, values);
}

//DELETE
async function deletes(id) {
    const db = await con.connect()
    const sql = 'DELETE FROM BinDataMinutos where id=?'
    return await db.query(sql, [id])
}


module.exports = { select, insert, update, deletes }

