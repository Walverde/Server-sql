let mqtt = require('mqtt') // Biblioteca
let client = mqtt.connect('mqtt:192.168.0.31:1883') // Parâmetros de conexão. 

console.log("Conexão",client.connected) // Controle de console. 

let topic = "test" // Tópico
let message = "1" // messagem (Sera enviada a baixo)

client.on('connect',()=>{ // Quando o evento "connect" ocorre, essa arrow function é acionada. 
    setInterval(()=>{ // SetInterval para publicar a cada segundo. a message = "1"
        client.publish(topic,message) // Usado o Tópico e Messagem informadas acima para publicação. 
        console.log('messagem enviada',message) // // Controle de console. 
    }, 1000 ) // Fim da função setInterval. (Aqui é setado o tempo que ela acontece)
})// Fim do evento Connect