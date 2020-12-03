const {MessageEmbed} = require('discord.js');
module.exports={
    name:'claim',
    category: 'Tickets',
    description: 'Claim een ticket.',
    usage: '<command>',
    run: async(client,message,member,args)=>{ 
      const claimEmbed = new MessageEmbed()
      .setTitle('Ticket Geclaimed')
      .setDescription(`<@${message.author.id}> heeft de ticket geclaimed! \nDoor hem wordt u verder geholpen.`)
      .setFooter('© SF Graphics, 2020 - 2021')
      .setColor('#417af6')
      .setTimestamp();
      message.channel.send(claimEmbed);
    }
}