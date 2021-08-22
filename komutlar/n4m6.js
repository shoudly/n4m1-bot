const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("#FF000")

.setTitle("Nisa <3 Murat")

.setDescription("Belki adını dağlara yazıcak kadar zengin değilim ama Kalbime Yazdım olmazmı ?");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m6",
  description: "n4m6",
  usage:"n4m6"

};