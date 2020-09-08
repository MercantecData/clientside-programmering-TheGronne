const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Connected as ' + client.user.tag)

    client.user.setActivity('You', {type: 'WATCHING'})
})

client.login('NzUwODUxNDUzODg2NzkxNzcw.X1Ai6A.fBQqsFoyrgGAGHoVQLTd6PylRvA')