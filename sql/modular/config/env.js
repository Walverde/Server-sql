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

env.local = local
env.nuvem = nuvem

mudule.exports = env