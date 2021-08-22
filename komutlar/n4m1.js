const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("RED")

.setTitle("Nisa <3 Murat")

.setDescription("Hergünün Mutlu Sağlıklı Huzurlu Ve Benli Geçsin. Güzelim <3");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m1",
  description: "n4m1",
  usage:"n4m1"

};

