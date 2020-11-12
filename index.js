const { Collection, Client, Discord, MessageEmbed } = require('discord.js');
const fs = require('fs');
const Canvas = require("canvas");
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json');
client.config = config;
const { GiveawaysManager } = require('discord-giveaways');
client.GiveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "RANDOM",
        reaction: "🎉"
    }
});
const token = config.token
const mongoose = require('mongoose')
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '714078545567285258');
    if (!channel) return;
    const canvas = Canvas.createCanvas(1023, 498);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('./anime-background.png')
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#C0C0C0';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = '28px Impact';
    ctx.fillStyle = '#0a0a0a';
    ctx.fillText(`Welkom in ${member.guild.name}.`, canvas.width / 2.5, canvas.height / 3.5);
    ctx.font = '45px Impact';
    ctx.fillStyle = '#0a0a0a';
    ctx.fillText(`${member.user.username}#${member.user.discriminator}`, canvas.width / 2.5, canvas.height / 1.9);
    ctx.font = '25px Impact';
    ctx.fillStyle = '#0a0a0a';
    ctx.fillText(`Je bent member nummer ${client.guilds.cache.get("713368626190876712").memberCount}!`, canvas.width / 2.45, canvas.height / 1.44);
    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);
    const attachment = new MessageAttachment(canvas.toBuffer(), 'anime-background.png');
    channel.send(attachment);
});
mongoose.connect("", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.login(config.token)