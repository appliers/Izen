const img = require('images-scraper')

const google = new img({
    puppeteer : {
        headless : true,
    }
})

module.exports = {
     name: 'image',
     description: 'Get an image from Google!',
     usage: '^image',
     category: "fun",
    run: async (client, message, args) => {
        const query = args.slice(" ")
        if(!query) return message.reply('Please enter a search query')

        const results = await google.scrape(query, 1)
        message.channel.send(results[0].url);
    }
}
