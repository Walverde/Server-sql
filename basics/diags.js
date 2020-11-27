const cor = require('./cores')
// Original. 
const diag = function (mensagem, corborda, corletras) {
    // Variaveis 
    const underline = "─".repeat(mensagem.length)
    const rigth = ` |`
    const left = `| `
    // Render. 
    console.log(`${corborda}
╭─${underline}─╮
${left}${corletras}${mensagem}${cor.Reset}${corborda}${rigth}
╰─${underline}─╯${cor.Reset}
`)
}

module.exports = {diag}