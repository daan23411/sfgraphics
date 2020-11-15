const {MessageEmbed} = require('discord.js');
module.exports={
    name:'serverinfo',
    category: 'info',
    description: 'Geeft serverinformatie.',
    aliases: ['si'],
    timeout: 5000,
    run: async(bot,message,args)=>{
        const embed = new MessageEmbed()
        .setTitle('Serverinfo')
        .setColor('#417af6')
        .setThumbnail(message.guild.iconURL())
        .setDescription(`Geeft serverinformatie over ${message.guild.name}`)
        .addFields(
            {name: 'Owner', value: message.guild.owner, inline: true},
            {name: 'Gemaakt op', value: message.guild.createdAt, inline: true},
            {name: 'Aantal leden (met bots)', value: message.guild.memberCount, inline: true}
        )
        .setTimestamp()
        .setFooter('© SF Graphics, 2020 - 2021', message.guild.iconURL());
        message.channel.send(embed)
    }
}