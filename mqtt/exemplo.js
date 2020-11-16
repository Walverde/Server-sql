const mqtt = require('mqtt')

var Broker_URL = 'mqtt://192.168.0.31';

var options = {
    clientId: "enode",
    port: 1883,
    keepalive: 60
}


var client = mqtt.connect(Broker_URL, options)

client.on('connect', function () {
    client.subscribe('JE05/pub', function () {
        client.on('message', function (topic, message, packet) {
            // message is Buffer
            var message_str = JSON.parse(message)
            console.log(message_str)
            client.end()
        })
        // if (!err) {
        //     client.publish('presence', 'Hello mqtt')
        // }
    })
})

