const Discord = require("discord.js");
exports.run = async(client, message, args) => {
    let from = args.slice(0, 1).join(" ");
    let to = args.slice(1, 2).join(" ");
    if (!to) {
        to = from;
        from = 1;
    }
    /*  Embed Formatting */
    const format = new Discord.RichEmbed()
        .setColor("#2f76eb")
        .addField("🎲 Random Number Generator Format 🎲", "The format for this command is: ```https\n !rn [from*] (to*)```\n() - Needs a value \n[] - Optional\n* - Needs to be a number ")
        .setFooter(" © XkijuX", client.user.avatarURL)
        .setTimestamp();
    const first = new Discord.RichEmbed()
        .setColor("#ffb72f")
        .addField("Picking Number", "🎲 --> **" + RNpicking(from, to) + "**")
        .setFooter(" © XkijuX", client.user.avatarURL)
        .setTimestamp();
    const result = new Discord.RichEmbed()
        .setColor("#2f9d66")
        .addField("Your Number is", "🎲 --> **" + RNpicking(from, to) + "**")
        .setFooter(" © XkijuX", client.user.avatarURL)
        .setTimestamp();

    /* Check if the number is valid */
    if (!from) return message.channel.send(format);
    if (!/^[0-9]*$/.exec(to + from)) return message.channel.send(format);
    if (to - from <= 0) return message.channel.send("Please use the right format and make the **to** value higher than **from**");

    /* Sending the messages*/
    const msg = await message.channel.send(first);
    for (var i = 0; i < 4; i++) {
        const picking = new Discord.RichEmbed()
            .setColor("#ffb72f")
            .addField("Picking Number", "🎲 --> **" + RNpicking(from, to) + "**")
            .setFooter(" © XkijuX", client.user.avatarURL)
            .setTimestamp();
        await sleep(300);
        await msg.edit(picking);
        if(i == 3) await msg.edit(result);
    }
}

/* List Of Functions*/
function RNpicking(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
} //fixed after tho RIP
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
