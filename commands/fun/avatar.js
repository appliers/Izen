const { MessageEmbed} = require('discord.js')

module.exports = {
    name: 'avatar',
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    usage: "^icon",
    category: "fun",
    run: async (client, message, args) => {

      let member = message.mentions.users.first() || message.author
  
      let avatar = member.displayAvatarURL({size: 1024})
  
  
      const embed = new MessageEmbed()
      .setTitle(`${member.username}'s avatar`)
      .setImage(avatar)
      .setColor("RANDOM")
  
      message.channel.send(embed);
  
  },};
  
