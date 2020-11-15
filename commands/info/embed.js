const {MessageEmbed} = require('discord.js');
module.exports={
    name:'embed',
    category: 'info',
    description: 'Stuur een embed.',
    usage: '<bericht>',
    run: async(client,message,args)=>{
      const sayTitle = args.slice(0).join(" ")
      if(!sayTitle) {
        return message.channel.send('Geen Titel opgegeven.');
      }
      const sayMessage = args.slice(1).join(" ")
      if(!sayMessage) {
          return message.channel.send('Geef een bericht op. Ik kan geen bericht versturen als er niks in staat 😄')
      }  
      const sayMessageEmbed = new MessageEmbed()
      .setTitle(sayTitle)
      .setDescription(sayMessage)
      .setFooter('© SF Graphics, 2020 - 2021')
      .setColor('#417af6')
      message.delete().catch(err => console.log(err));
      message.channel.send(sayMessageEmbed);
    }
}