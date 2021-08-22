const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("RANDOM")

.setTitle("Nisa <3 Murat")

.setDescription("Dünya Güneşe Ben Sana Hasretim");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m7",
  description: "n4m7",
  usage:"n4m7"

};