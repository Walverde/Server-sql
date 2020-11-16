



const mqtt = require('mqtt');
var Broker_URL = 'mqtt://192.168.0.32';


var Topic = "espc"; // topico aqui. 
var options = {
    clientId: 'node',
    port: 1883,
    //username: 'mqtt_user',
    //password: 'mqtt_password',	
    keepalive: 60
};


var client = mqtt.connect(Broker_URL, options);
client.on('connect', mqtt_connect);
// client.on('reconnect', mqtt_reconnect);
// client.on('error', mqtt_error);
client.on('message', mqtt_messsageReceived);
// client.on('close', mqtt_close);


function mqtt_connect() {
    console.log("Conectando ao brocker MQTT");
    client.subscribe(Topic, mqtt_subscribe);
};

function mqtt_subscribe(err, granted) {
    console.log("Inscrito no topico: " + Topic);
    if (err) { console.log(err); }
};

function mqtt_messsageReceived(topic, message, packet) {

    // isso aqui vai ficar ou não aqui. 
    const control = require('../controllers/controltrack.controller.js')
    control.InsertsMqtt(message)

    // var message_str = JSON.parse(message);

    // const controller

}

module.exports = { mqtt_messsageReceived }
