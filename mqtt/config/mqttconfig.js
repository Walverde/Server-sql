
const env = require('./env')
const mqtt = require('mqtt'); // Biblioteca


var options = {
    clientId: env.clientId,
    port: env.port,
    keepalive: env.keepalive
}

var client = mqtt.connect(env.broker, options) // Host(192.168.0.31) e pacote de configuração. 

var subscrive = function (topic) {
    console.log('Inscrevendo no topico: ', topic)
    client.on('connect', () => { // Quando o evento connect ocorre, essa arrow function é acionada. 
        client.subscribe(topic) // Função de inscrição no topico. (Informado acima, "topic")
    })
    client.on('message', (topic, message) => { // Quando o evento message ocorre, essa arrow function é acionada. 
        message = message.toString() // Converte o pacote recebido em uma String. (Para a bublicação no banco de dados, usei o JSON.parse, esse converte o pacte em um JSON. Assim podendo usaro o dot-notation posteriormente)
        // console.log(message) //  Controle de console. 
    })
    return this.message
}

// client.on('connect', mqtt_connect);
// client.on('reconnect', mqtt_reconnect);
// client.on('error', mqtt_error);
// client.on('message', mqtt_messsageReceived);
// var close = client.on('close', mqtt_close); // Tentando. 


// function mqtt_connect() {
//     const env = require('./env')
//     console.log(`Conectando ao brocker mqtt :> ${env.broker}`);
//     client.subscribe(env.Topic, mqtt_subscribe);
// };

// function mqtt_subscribe(err, granted) {
//     const env = require('./env')
//     console.log(`Inscrito no topico:> ${env.Topic}`);
//     if (err) { console.log(err); }
// };

// function mqtt_messsageReceived(topic, message, packet) {
//     var message_str = JSON.parse(message)
//     console.log(message_str)

// }


const mqtts = {}

mqtts.subscribe = subscrive

mqtts.connecting = client
// mqtts.close = close // Tentando.  
// mqtts.mqtt_messsageReceived
// mqtts.mqtt = mqtt
// mqtts.options = options
mqtts.envs = env
module.exports = mqtts

