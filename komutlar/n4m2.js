const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("GREEN")

.setTitle("Nisa <3 Murat")

.setDescription("Yıldızların Altında Kayan Her Yıldızda Seni Diledim <3");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m2",
  description: "n4m2",
  usage:"n4m2"

};

