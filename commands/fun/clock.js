module.exports = {
    name: "clock",
    description: "Clock command.",
    usage: "^clock",
    category: "fun",
    args: true,
    guildOnly: true,
    usage: "<action>[add]",
  
    async run(msg, args) {
      const { channel, guild, client } = msg
  
      const time = new Date().toLocaleTimeString().slice(0, 5)
      const channelName = `🕥 ${time}`
  
      const createdChannel = await guild.channels.create(channelName, {
        type: "voice",
      })
    },
  }
  
