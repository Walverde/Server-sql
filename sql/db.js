
// isso vai me ganrantir que somente uma conexão global vai existir. 

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
    const conn = await connect()
    const [rows] = await conn.query('SELECT * FROM BinDataMinutos;') // vai separar somente as linhas e 
    return rows
}

// A solução esta aqui!!!!!!!!!!!!!!!!!!!!!
//https://www.youtube.com/watch?v=2XBWTEbGw4w&feature=youtu.be&ab_channel=LuizTools
// INSERT
async function insertointu(data) {
    const conn = await connect()
    const sql = 'INSERT INTO BinDataMinutos set?'
    const values = {
        VARMS: data.VARMS,
        VBRMS: data.VBRMS,
        VCRMS: data.VCRMS,
        IARMS: data.IARMS,
        IBRMS: data.IBRMS,
        ICRMS: data.ICRMS,
        VABRMS: data.VABRMS,
        VBCRMS: data.VBCRMS,
        VCARMS: data.VCARMS,
        VABCTRMS: data.VABCTRMS,
        PA: data.PA,
        PB: data.PB,
        PC: data.PC,
        PT: data.PT,
        QA: data.QA,
        QB: data.QB,
        QC: data.QC,
        QT: data.QT,
        SA: data.SA,
        SB: data.SB,
        SC: data.SC,
        ST: data.ST,
        FPA: data.FPA,
        FPB: data.FPB,
        FPC: data.FPC,
        FPT: data.FPT,
        KVARHA: data.KVARHA,
        KVARHB: data.KVARHB,
        KVARHC: data.KVARHC,
        KVARHT: data.KVARHT,
        KWHA: data.KWHA,
        KWHB: data.KWHB,
        KWHC: data.KWHC,
        KWHT: data.KWHT,
        FREQ: data.FREQ,
        SERRS: data.SERRS,
        WRSSI: data.WRSSI
    }
    await conn.query(sql, values)
    console.log("Daods inserdos com sucesso")

}
// Atualizar
async function update(id, set) {
    const conn = await connect();
    const sql = 'UPDATE BinDataMinutos SET nome=?, uf=? WHERE id=?'
    const values = {
        VARMS: data.VARMS,
        VBRMS: data.VBRMS,
        VCRMS: data.VCRMS,
        IARMS: data.IARMS,
        IBRMS: data.IBRMS,
        ICRMS: data.ICRMS,
        VABRMS: data.VABRMS,
        VBCRMS: data.VBCRMS,
        VCARMS: data.VCARMS,
        VABCTRMS: data.VABCTRMS,
        PA: data.PA,
        PB: data.PB,
        PC: data.PC,
        PT: data.PT,
        QA: data.QA,
        QB: data.QB,
        QC: data.QC,
        QT: data.QT,
        SA: data.SA,
        SB: data.SB,
        SC: data.SC,
        ST: data.ST,
        FPA: data.FPA,
        FPB: data.FPB,
        FPC: data.FPC,
        FPT: data.FPT,
        KVARHA: data.KVARHA,
        KVARHB: data.KVARHB,
        KVARHC: data.KVARHC,
        KVARHT: data.KVARHT,
        KWHA: data.KWHA,
        KWHB: data.KWHB,
        KWHC: data.KWHC,
        KWHT: data.KWHT,
        FREQ: data.FREQ,
        SERRS: data.SERRS,
        WRSSI: data.WRSSI
    }
    return await conn.query(sql, values);
}
//Delete
async function deletes(id){
    const conn = await connect();
    const sql = 'DELETE FROM BinDataMinutos where id=?'
    return await conn.query(sql, [id])
}

// Em caso de ambineteas mais completos, pode se usar o Pool. 

module.exports = { connect, select, insertointu, update, deletes }