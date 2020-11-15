const {MessageEmbed} = require('discord.js');
module.exports={
    name:'embed',
    category: 'info',
    description: 'Stuur een embed.',
    usage: '<bericht>',
    run: async(client,message,args)=>{
      const sayMessage = args.join(" ")
      if(!sayMessage) {
          return message.channel.send('Geef een bericht op. Ik kan geen bericht versturen als er niks in staat 😄')
      }  
      const sayMessageEmbed = new MessageEmbed()
      .setTitle('Embed')
      .setDescription(sayMessage)
      .setFooter('© SF Graphics, 2020 - 2021')
      .setColor('#417af6')
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessageEmbed);
    }
}