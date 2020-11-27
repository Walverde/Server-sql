const cor = require('../../basics/cores')
const msn = require('../../basics/diags')

const nuvem = {
    host: "ddbengenharia.com.br",
    user: 'ddbeng30_scd',
    password: '78985214',
    database: 'ddbeng30_teste'
}

const local = {
    host: "192.168.0.31",
    user: 'wal',
    password: '0101',
    database: 'Node'
}

const env = {}

env.cor = cor
env.msn = msn

env.loc = local
env.nuvi = nuvem

module.exports = env