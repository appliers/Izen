
module.exports = {
    name: 'unban',
    description: 'Unban a user',
    usage: '<user>',
    category: 'Moderation',
    async run(client, message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You dont have permission u dumb dumb');
        if (!message.guild.member(client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send(':x: I dont have permission to unban users');

        const bans = await message.guild.fetchBans();
        const user = bans.filter(user => user.user.tag.toLowerCase().startsWith(args[0].toLowerCase())).first();
        
        if (!user)
            return message.channel.send('Please state a valid user to unban');

        message.guild.members.unban(user.user.id).then(usr => {
            message.channel.send(`We have unbanned \`${usr.tag}\`.`)
        }).catch(err => {
            message.channel.send('There was an error, and we are logging the error.');
            console.error(err.message);
        });
    }
};
