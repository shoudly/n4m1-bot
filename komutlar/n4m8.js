const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("RANDOM")

.setTitle("Nisa <3 Murat")

.setDescription("Su gibi vazgeçilmezsin , sevgi gibi gerekli , aşk gibi karışık , seni herhalinle seviyor bu pandacık");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m8",
  description: "n4m8",
  usage:"n4m8"

};