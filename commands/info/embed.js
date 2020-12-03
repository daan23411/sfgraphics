const {MessageEmbed} = require('discord.js');
module.exports={
    name:'embed',
    category: 'info',
    description: 'Stuur een embed.',
    usage: '<bericht>',
    run: async(client,message,args)=>{ 
      const sayMessageEmbed = new MessageEmbed()
      .setTitle(args[0].slice(1).join(' '))
      .setDescription(args[1])
      .setFooter('© SF Graphics, 2020 - 2021')
      .setColor('#417af6')
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessageEmbed);
    }
}