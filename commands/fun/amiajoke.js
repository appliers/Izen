const Discord = require('discord.js');
const AlexAPI = require('alexflipnote.js')
const AlexClient = new AlexAPI()

module.exports = {
    name: 'amiajoke',
    description: 'Am I A Joke to You?',
    usage: '^amiajoke (w or w/o @mention)',
    category: "fun",
    run: async (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    let link = await AlexClient.image.amiajoke({image: avatar})
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setImage(link) 
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`);
    message.channel.send({embed});
  },
 }
