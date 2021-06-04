const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const client = new Discord.Client();
const { TOKEN, PREFIX } = require("./config.json");
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
// CONSOLE
client.on("ready", () => console.log("Je suis pret masta"))
client.on("error", () => console.error);
client.on("warn", () => console.warn);
client.on("debug", console.log);
client.login(TOKEN);

client.on("message", async msg => {
    // SETUP CMD
    if (msg.author.bot) return;
    if (msg.content.indexOf(PREFIX) !== 0) return;
    const args = msg.content.slice(PREFIX.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    // AVATAR
    if (cmd === 'pp') {
        msg.reply(msg.author.displayAvatarURL({ size: 256 }));
    }
    // EMBEDS

    if (cmd === 'info') {
        const embed = new Discord.MessageEmbed()
            .setTitle(msg.guild.owner.user.tag)
            .setThumbnail(msg.author.displayAvatarURL({ size: 256 }))
            .addField("Membres : ", msg.guild.memberCount, true)
            .addField("Patron : ", msg.guild.owner.user.tag, true)
            .setTimestamp()
            .setImage("https://media.discordapp.net/attachments/701094601338912768/849983470083637338/1500x500.png?width=1440&height=480")
            .setFooter("Yass#2255")
            .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
            .setColor(7419530)

        msg.channel.send(embed)
    };
    // UwU
    if (cmd === 'uwu') { msg.channel.send("https://cdn.discordapp.com/attachments/809507750827917324/850304600031494164/UwUU.mp4") };

    // API
    if (cmd === 'rdm') {
        const fetch = require('node-fetch');

        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        const embed = new Discord.MessageEmbed()
            .setImage(file)
            .setFooter("Yass#2255")
            .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
            .setTitle("API CAT")
            .setTimestamp()
            .setThumbnail(msg.author.displayAvatarURL({ size: 256 }))

        msg.channel.send(embed)
    };
    // IP LOOKUP

    if (cmd === 'ip') {
        snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
            let Geo = new Discord.MessageEmbed()
                .setTimestamp()
                .setThumbnail(msg.guild.owner.user.displayAvatarURL({ size: 256 }))
                .setTitle(`**Ip LookUp by Yass**`)
                .setDescription(`**__IP Information__**
      **Looked Up IP**: ${r.body.query}
      **ASN**: ${r.body.as}
      **Pays**: ${r.body.country}
      **Region** : ${r.body.regionName}
      **Ville**: ${r.body.city}
      **ORG**: ${r.body.org} 
      **ISP**: ${r.body.isp} 
      **Timezone**: ${r.body.timezone}
      **Latitude** : ${r.body.lat}
      **Longitude** : ${r.body.lon}
      `)
                .setFooter(`Yass#2255`)
                .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL());

            msg.channel.send({ embed: Geo });
        })
    };
});
// CODE BY YassSSH, Yass#2255 on discord