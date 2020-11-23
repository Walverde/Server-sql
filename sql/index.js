
(async () => {
    const db = require('./db')
    console.log('Conectou')
    console.log('SELECT * FROM BinDataMinutos')
    
    const dadosbinnuto = await db.select();
    console.log(dadosbinnuto)
})()