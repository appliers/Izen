  const Discord = require('discord.js')

  module.exports = {
    name: "clear",
    description: "Clear number of messages in specific channel.",
    args: true,
    usage: "<amount>",
    category: 'moderation',
  
    run(client, msg, args) {
      const { channel, guild, member } = msg
  
      const amountArg = parseInt(args[0])

      if (!msg.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You Do Not Have The Required Permissions! - [MANAGE_MESSAGES]**")
  
      if (!Number.isInteger(amountArg)) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle("You must specify the amount of message to clear!")
	      .setTimestamp()
        return channel.send(embed)
      }
  
      if (amountArg < 2 || amountArg >= 100) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle("Amount of message to clear must be greater than 1 and lower than 100.")
	      .setTimestamp()
        return channel.send(embed)


      }

  
      channel.bulkDelete(amountArg).then(() => {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("")
        .addFields(
          { name: 'Messages Deleted:', value: amountArg },
          { name: 'Cleared By:', value: msg.author.tag },
          { name: 'Channel:', value: channel },
        ) 
        .setTimestamp()
        return channel.send(embed)
      })
    },
  }

  /* .catch (e) {
    console.log(e);

    return msg.channel.send('You can only delete messages that are 14 days old');
    */
