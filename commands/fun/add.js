module.exports = {
    name: 'add',
    aliases: 'addition',
    description: "Add together two numbers!",
    usage: "^add <num1> <num2>",
    category: "fun",
    expectedArgs: '<num1> <num2>',
    permissionError: 'You do not have sufficient permissions to run this command! L',
    minArgs: 2,
    maxArgs: 2,
    run(client, message, args) {
        const num1 = +arguments[0]
        const num2 = +arguments[1]

        message.reply(`The sum is ${num1 + num2}`)
    },
    permissions: [],
    requiredRoles: [],

}
