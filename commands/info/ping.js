const {MessageEmbed} = require('discord.js');
module.exports={
    name:'ping',
    category: 'info',
    aliases: ['pi'],
    description: 'Geeft Ping en API ping weer',
    timeout: 10000,
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('🏓 Pinging...')
        const Embed = new MessageEmbed()
        .setTitle('🏓Pong!')
        .setDescription(`🏓 Ping is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Ping is ${Math.round(bot.ws.ping)}ms\n🏓`)
        .setColor('#417af6')
        .setFooter('© SF Graphics, 2020 - 2021');
        msg.edit(Embed)
    }
}