const discord = require('discord.js');
const {userDiscriminator, userName} = require('./ticket')
module.exports={
    name:'close',
    category: 'Tickets',
    description: 'Close een ticket.',
    run: async(bot,message,args)=>{
        const catID = "764770033128833045";
        if (!message.member.hasPermission("KICK_MEMBERS") == !message.author.id === '501700626690998280') return message.reply("Jij kan dit niet! Vraag een admin om je ticket te closen!");
        
    
        if (message.channel.parentID == catID) {
            message.channel.delete();
        } else {
    
            message.channel.send("Doe dit in een ticket kanaal!");
    
        }
    
        var closeEmbed = new discord.MessageEmbed()
            .setTitle("Ticket " + message.channel.name)
            .setColor("RANDOM")
            .setDescription("Het ticket is gemarkeerd als **compleet**.")
            .setFooter("© SF Graphics, 2020 - 2021");
    
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "logging");
        if (!ticketChannel) return message.reply("Channel does not exist!");
    
        var user = bot.users.cache.find(a => a.username === userName);
        if (user) user.send(closeEmbed)
    
        ticketChannel.send(closeEmbed);
    
    
    }
}