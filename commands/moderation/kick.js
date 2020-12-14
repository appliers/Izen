const {
    Permissions: { FLAGS }, Message,
  } = require("discord.js")

  const Discord = require('discord.js')
  
  module.exports = {
    name: "kick",
    description: "Kick user.",
    args: true,
    usage: "<user> [reason]",
    category: 'moderation',
  
    run(client, message, args) {
      const { channel, guild, mentions, author } = message
  
      const reasonArg = [...args].slice(1).join(" ")
  
      const userToKick = mentions.users.first()

      if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You Do Not Have The Required Permissions! - [KICK_MEMBERS]**")
  
      if (!userToKick) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('Please provide a valid user to kick')
	      .setTimestamp()
        return channel.send(embed)
        // return msg.reply("you must provide a valid user to kick.")
      }
  
      if (userToKick.id === author.id) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('You cant kick yourself!')
	      .setTimestamp()
        return channel.send(embed)
        //return msg.reply("you can't kick yourself!")
      }
  
      const memberToKick = guild.members.cache.get(userToKick.id)
  
      if (!memberToKick.kickable) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('I need more permissions to run this command!')
	      .setTimestamp()
        return channel.send(embed)
        // return channel.send("I need more permissions to execute this command.")
      }
  
      memberToKick.kick(reasonArg).then((res) => {
        channel.send(
          `User ${res.displayName} has been kicked.\n${
            reasonArg ? `Reason: ${reasonArg}` : ""
          }`,
        )
      })
    },
  }
