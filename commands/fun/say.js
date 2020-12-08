module.exports = {
    name: "say",
    description: "Makes the bot repeat your message.",
    usage: "say [message]",
    category: "fun",
    run: (client, message) => {
    let args = message.content.split(" ").slice(1);
    message.delete();
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send("You ain't making me Ping anyone BOI!");
    message.channel.send(args.join(" ")).cleanContent;
    },
}
