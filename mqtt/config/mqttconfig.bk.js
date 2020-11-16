// const { port } = require('./env')
const env = require('./env')
const mqtt = require('mqtt');


var options = {
    clientId: env.clientId,
    port: env.port,
    keepalive: env.keepalive
}

var client = mqtt.connect(env.broker, options)

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

mqtts.connecting = client
// mqtts.close = close // Tentando.  
// mqtts.mqtt_messsageReceived
// mqtts.mqtt = mqtt
// mqtts.options = options
mqtts.envs = env
module.exports = mqtts

