const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("BLUE")

.setTitle("Nisa <3 Murat")

.setDescription("Her sabah duyduğum ilk ve gece duyduğum son ses olmanı istiyorum ...");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m3",
  description: "n4m3",
  usage:"n4m3"

};