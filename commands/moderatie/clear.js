const Discord = require('discord.js')
module.exports={
    name:'clear',
    category: 'moderatie',
    description: 'Cleart een aantal berichten',
    run: async(bot,message,args)=>{
        const timeout = new Set()
        const amount = parseInt(args[0]);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send('❌ GEEN PERMISSIE')
        }
        if (isNaN(amount)) {
            return message.reply('Dat ziet er niet uit als een echt nummer :/.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Geef een nummer op tussen 1 en 99.');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Er is een error opgetreden! Kijk logs voor volledige error');
        });

        const clearembed = new Discord.MessageEmbed()
            .setColor("#417af6")
            .setTitle("Berichten verwijderd")
            .setThumbnail(message.guild.iconURL())
            .setAuthor(`${message.guild.name}`)
            .setDescription(`Er zijn ${amount} berichten verwijderd. Dit is gedaan door ${message.author} in #${message.channel.name}`)
            .setFooter(`© SF Graphics, 2020 - 2021`)
            .setTimestamp();
        message.channel.send(clearembed)

        .then(msg=>msg.delete({timeout:5000}))
    }
}