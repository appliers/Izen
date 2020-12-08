const Discord = require('discord.js')

module.exports = {
    name: 'codeis',
    description: 'among us code to play game',
    category: 'among us',
    args: true,
    async run(client, message, args) {
        if(message.channel.type === 'dm')return message.reply('you can\'t execute this command in the DMs');

        const channel = message.guild.channels.cache.find(channel => channel.name === ('codes'));

        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.reply('you must join a Voice Channel firts');

        const inv = await voiceChannel.createInvite({
            maxAge: 0,
            unique: false,
            maxUses: 100,
        });

        const thecode = args[0];
        if (thecode.length !== 6) return message.reply('your code should only be 6 characters long.');
        const thecodeUC = thecode.toUpperCase();

        const region = args[1];
        let r = '';
        if(region.toLowerCase() === 'eu' || region.toLowerCase() === 'europe') r = 'Europe';
        if(region.toLowerCase() === 'na' || region.toLowerCase() === 'northamerica') r = 'North America';
        if(region.toLowerCase() === 'as' || region.toLowerCase() === 'asia') r = 'Asia';
        if(region === 'undefined' || region === '') return message.reply(',the only regions available are: Europe(eu), Northamerica(na) and Asia(as)');

            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Among Us')
            .setTitle('New Game!')
            .addField('**Code**', `${thecodeUC}`, true)
            .addField('**Region**', `${r}`, true)
            .addField('**Voice Channel**', `[Click Here!](${inv})`, true)
            .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            channel.send(embed);
            message.reply(`check "${channel}" for your code.`);
    }
}
