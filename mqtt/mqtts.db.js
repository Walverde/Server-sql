let mqtt = require('mqtt')  // Biblioteca
let client = mqtt.connect('mqtt:192.168.0.31:1883') // Parâmetros de conexão. 
let topic = "JE05/pub" // Tópico (o da BIn, dessa vez. )

// MYSQL
let mysql = require('mysql2')
const db = mysql.createConnection({
    host: "ddbengenharia.com.br",
    user: 'ddbeng30_scd',
    password: '78985214',
    database: 'ddbeng30_teste'
})

db.connect(() => {
    console.log('DB conctado')
})

client.on('connect', () => { // Quando o evento "connect" ocorre, essa arrow function é acionada. 
    client.subscribe(topic)
})
// Envendo de chagada de message 

console.log("Antes") // Controle de console. 
// setTimeout(function () { <----------------- Função descomentada setTimeout. (INICO) 
    client.on('message', (topic, message) => { // Quando o evento "message" ocorre, essa arrow function é acionada. 
        let datas = JSON.parse(message)
        let data = datas.DATA
        console.log('Durante') // Controle de console. 


        // Banco de Dados
        let sql = 'insert into BinDataMinutos set ?'
        function dataf(data) {
            return {
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
        }
        dataff = dataf(data)
        db.query(sql, dataff, (error, output) => {
            if (error) {
                console.log("Error Code: ", error)
            } else {
                console.log("Sucesso") // Controle de console. 
            }
        })
    // }, 5 * 1000) <----------------- Função descomentada setTimeout. (FIM)

    console.log("Depois") // Controle de console. 
})

