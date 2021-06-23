const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'moderation', []);
  }

  async run(client, message, args) {
     var moderation = args.shift(1).join(' ');
     var info = args.shift(1).join(' ');
     var fun = args.shift(1).join(' ');
     if (!moderation || info || fun) return message.reply(`You did not mention what you need help with there are 3 classes i can help you with \`moderation, info, fun\``);

     if (message.content == 'help moderation') {
        var ModerationCommandEmbed = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle(`Moderation Commands`, `\`Ban, Kick, Lock, Mod, Mute, Nickname, Nuke, Ping, Recruit, Role, Tempban, Tempmute\``)
     }
  }
}