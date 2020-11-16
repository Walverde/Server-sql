let mqtt = require('mqtt') // Biblioteca
let client = mqtt.connect('mqtt:192.168.0.31:1883')// Parâmetros de conexão. 
let topic = "test" // Tópico


client.on('connect',()=>{ // Quando o evento connect ocorre, essa arrow function é acionada. 
    client.subscribe(topic) // Função de inscrição no topico. (Informado acima, "topic")
})

client.on('message', (topic, message) => { // Quando o evento message ocorre, essa arrow function é acionada. 
    message = message.toString() // Converte o pacote recebido em uma String. (Para a bublicação no banco de dados, usei o JSON.parse, esse converte o pacte em um JSON. Assim podendo usaro o dot-notation posteriormente)
    console.log(message) //  Controle de console. 
})

