const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'ticket',
    category: 'Tickets',
    aliases: ['new'],
    description: 'maak een ticket aan',
    run: async (bot, message, args) => {
        const catID = "764770033128833045";
        const staffRole = message.guild.roles.cache.find(x => x.name === '🎟| Support');
        const person = message.author.id

        let userName = message.author.username;
        let userDiscriminator = message.author.discriminator;

        let ticketExists = false;

        message.guild.channels.cache.forEach(channel => {


            if (channel.name == "ticket-" + userName.toLowerCase() + "-" + userDiscriminator) {
                ticketexists = true;

                message.channel.send('Je hebt al een ticket. Handel die eerst af');

                return;
            }

        });

        if (ticketExists) return;

        let embed = new MessageEmbed()
            .setTitle("Hallo " + message.author.username)
            .setDescription(`Zie #ticket-${userName}-${userDiscriminator}`)
            .setColor('#417af6')
            .setFooter('© SF Graphics, 2020 - 2021')
            .setTimestamp();

        message.channel.send(embed);

        message.guild.channels.create("ticket-" + userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
            (createdChannel) => {
                createdChannel.setParent(catID).then(
                    (settedParent) => {

                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });

                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '✅| VERIFIED'), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });

                        settedParent.updateOverwrite(staffRole, {
                            CREATE_INSTANT_INVITE: false,
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true
                        });

                        settedParent.updateOverwrite(message.author.id, {
                            CREATE_INSTANT_INVITE: false,
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true
                        });

                        let embedTicket = new MessageEmbed()
                            .setTitle(`Hallo ${message.author.username}`)
                            .setDescription("Stuur hier alvast je vraag/klacht! Support komt zo bij je.")
                            .setColor('#417af6')
                            .setFooter('© daan2341, 2020 - 2021')
                            .setTimestamp();

                        settedParent.send(`<${person}, <${staffRole}>`).then(msg => msg.delete({ timeout: 10000 }));
                        settedParent.send(embedTicket);

                    }
                ).catch(err => {
                    console.log(err);
                    let errorEmbed = new MessageEmbed()
                .setTitle('ERROR')
                .setColor('RED')
                .setTimestamp()
                .setDescription(err)
                .setFooter('Concacteer de Bot Developer.');
            message.channel.send(errorEmbed);
                })
            }
        ).catch(err => {
            console.log(err);
            let errorEmbed = new MessageEmbed()
                .setTitle('ERROR')
                .setColor('RED')
                .setTimestamp()
                .setDescription(err)
                .setFooter('Concacteer de Bot Developer.');
            message.channel.send(errorEmbed);
        })
    }
}