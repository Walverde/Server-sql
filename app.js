const mqtt = require('./back/mqtt/config/mqttconfig') // Parte MQTT
const sql = require('./sql/db') // Parte SQL. 

let topic = "JE05/pub" // Tópico (o da BIn, dessa vez. )
let cont = 0 // O Cont vai iniciar com ZERO. 
let contpacks = 60 // quantidade de pacote que sera contato. 

let client = mqtt.connecting // setando conexão MQTT. 

client.on('connect', () => { // Quando o evento "connect" ocorre, essa arrow function é acionada. 
    client.subscribe(topic)
})

client.on('message', (topic, message) => { // Quando o evento "message" ocorre, essa arrow function é acionada. 
    let datas = JSON.parse(message) // Parceando pacote mqtt. 
    let data = datas.DATA // Usado o Dot Notation para abri o pacote DATA. 
    console.log(cont) // Controle de console. 
    if (cont == contpacks){ // vai contar X pacotes, em caso positivo; a conta sera zerada, pacote mqtt sera passado para a função sql e os dados serão incerido no banco e segue codigo.  
        cont = 0 
        sql.insertointu(data)
    }
    cont = cont +1 // cont é igual a cont + 1
})