const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed ()

.setColor("YELLOW")

.setTitle("Nisa <3 Murat")

.setDescription("Yıldızlar Bile Sönük Yanında Gökyüzümden Hiç Çekilme Olur mu ?");

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name:"n4m4",
  description: "n4m4",
  usage:"n4m4"

};