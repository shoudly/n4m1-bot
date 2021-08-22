const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("#FF00D9")

.setTitle("Nisa <3 Murat")

.setDescription("Sabah Güneşim , Gece Yıldızım , Lahmacunum . Sevgililer Günümüz Kutlu Olsun <3");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m5",
  description: "n4m5",
  usage:"n4m5"

};