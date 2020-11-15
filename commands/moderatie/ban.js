const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ban",
  description: "ban de gegeven ID van de server.",
  category: "moderatie",
  usage: "<user id> <reason>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.channel.send(
        `Je hebt geen permissie om dit te doen! (BAN_MEMBERS)`
      );

    if (!args[0])
      return message.channel.send(
        `Geef een gebruiker op die je wilt bannen.`
      );
    let User = message.mentions.users.first();
    if (!User)
      return message.channel.send(
        `Die gebruiker zit niet in de server of bestaat niet. Geef een geldige naam op`
      );

    if (User.id === '501700626690998280') {
      return message.channel.send('Je kan mijn maker niet bannen. Probeer het ook niet!')
    }
    let Reason = message.content.split(`!kick ${User.id} `);
    if (!args[1])
      return message.channel.send(
        `Geef een reden op`
      );
    if (!Reason)
      return message.channel.send(
        `Geef een reden op`
      );

    User.ban(Reason);
    const Embed = new MessageEmbed()
      .setTitle(`You have banned a member!`)
      .setDescription(
        `Je hebt ${bot.users.cache.get(User.id).username} gebanned van deze server!`
      )
      .setFooter('© SF Graphics, 2020 - 2021')
      .setColor(`#417af6`);
    message.channel.send(Embed);
  },
};