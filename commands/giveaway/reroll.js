const { MessageEmbed } = require('discord.js')
const ms = require('ms')
module.exports = {
    name: 'reroll',
    description: 'reroll een giveaway!',
    category: 'giveaway',
    run: async (client              , message, args) => {
       if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Je hebt geen permissie om giveaways te rerollen!');
       if(!args[0]) return message.channel.send('Geen giveaway ID meegegeven.');
       let giveaway = client.giveaway
       sManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
       if(!giveaways) return message.channel.send('Kon die giveaway niet vinden.')
       client.giveawaysManager.reroll(giveaway.messageID)
       .then(() => {
           message.channel.send('Giveaway is gererolled')
       })
       .catch((e) => {
           if(e.startsWith(`Giveaway met het ID ${giveaway.messageID} is nog niet geëindigd`)){
               message.channel.send('Giveaway nog niet geëindigd')
           } else {
               console.error(e);
               message.channel.send('Er is een Error verschenen!')
           }
       })
    }
}