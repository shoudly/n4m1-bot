const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("RANDOM")

.setTitle("Nisa <3 Murat")

.setDescription("Gidişin sonbahar, Dönüşün ilkbahar , Küsmen Kış , Sevmen Yaz , Gel gönlüme güzelim , Esmeden Ayaz");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m9",
  description: "n4m9",
  usage:"n4m9"

};