const {
    Permissions: { FLAGS },
  } = require("discord.js")
  
  module.exports = {
    name: "ban",
    description: "Ban user.",
    args: true,
    category: "moderation",
    usage: "<user> [days(0-7)] [reason]",
    botPermissions: [FLAGS.BAN_MEMBERS],
    permissions: ['BAN_MEMBERS'],
    permissionError: "You don't have the Ban Members permission to run this command!",
    userPermissions: [FLAGS.BAN_MEMBERS],
  
    run(client, msg, args) {
      const { channel, guild, mentions, author } = msg
  
      let daysArg = +args[1]
  
      // Validate days
      if (!isNaN(daysArg)) {
        if (daysArg < 0) daysArg = 0
        if (daysArg > 7) daysArg = 7
      }
  
      const reasonArg = [...args].slice(isNaN(daysArg) ? 1 : 2).join(" ")
  
      const userToBan = mentions.users.first()

      if (!message.member.hasPermission("BAM_MEMBERS")) return message.channel.send("**You Do Not Have The Required Permissions! - [BAN_MEMBERS]**")
  
      if (!userToBan) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('You must provide a valor user to ban.')
	      .setTimestamp()
        return channel.send(embed)

        // return msg.reply("you must provide a valid user to ban.")
      }
  
      if (userToBan.id === author.id) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('You can\'t ban yourself!')
	      .setTimestamp()
        return channel.send(embed)

        //return msg.reply("you can't ban yourself!")
      }
  
      const memberToBan = guild.members.cache.get(userToBan.id)
  
      if (!memberToBan.bannable) {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('I need more permissiosn to execute this command.')
	      .setTimestamp()
        return channel.send(embed)

        //return channel.send("I need more permissions to execute this command.")
      }
  
      // Add ban options
      const banOptions = {
        reason: reasonArg,
      }
  
      // Add number of days of messages to delete
      if (!isNaN(daysArg)) banOptions.days = daysArg
  
      // Ban user
      memberToBan.ban(banOptions).then((bannedUser) => {
        channel.send(
          `User ${bannedUser.displayName} has been banned.\n${
            reasonArg ? `Reason: \`${reasonArg}\`` : ""
          }`,
        )
      })
    },
  }
