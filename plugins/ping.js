const { bot } = require('../lib/')

bot(
  {
    pattern: 'ping ?(.*)',
    fromMe: true,
    desc: 'To check ping',
    type: 'misc',
  },
  async (message, match) => {
    const start = new Date().getTime()
    const end = new Date().getTime()
    return await message.send('*Spreed!*\n ```' + (end - start) + '``` *ms*')
  }
)
