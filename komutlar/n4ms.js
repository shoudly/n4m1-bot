const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("RANDOM")

.setTitle("Nisa <3 Murat")

.setDescription("Pide Ayran Ben Sana Hayran");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4ms",
  description: "n4ms",
  usage:"n4ms"

};