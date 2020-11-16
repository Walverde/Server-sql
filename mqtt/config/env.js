const env = {

    clientId: 'node',
    port: 1883,
    //username: 'mqtt_user',
    //password: 'mqtt_password',	
    keepalive: 60,
    broker: `mqtt://192.168.0.31`,
    // Topic: ["JE05/pub", "JE05/pub2"],
    Topic: "JE05/pub",
    // Topic2: ,

}
module.exports = env