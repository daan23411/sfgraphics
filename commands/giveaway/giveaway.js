const ms = require('ms');

module.exports = {
    name: "giveaway",
    category: "giveaway",
    description: "Starts a giveaway",
    usage: "<channel> <duration> <winners> <prize>",

    async run(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('Je hebt geen permissie om aan giveaways te zitten');

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Mention een channel');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Geef een geldige duur op');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Geef een geldig aantal winnaren op!');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('Oke... ik geef wel niks weg..');

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,

            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY",
                giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
                timeRemaining: "Tijd over: **{duration}**",
                inviteToParticipate: "druk op 🎉 om mee te doen",
                winMessage: "Gefeliciteerd {winners}, je/jullie hebben **{prize}** gewonnen",
                embedFooter: "Giveaway tijd! Made by daan2341#2970",
                noWinner: "Kon geen winnaar trekken",
                hostedBy: "gehost door: {user}",
                winners: "winner(s)",
                endedAt: "eindigd over",
                units: {
                    seconds: "seconden",
                    minutes: "minuten",
                    hours: "uren",
                    days: "dagen",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Giveaway word gestart in ${channel}`);
    }
}