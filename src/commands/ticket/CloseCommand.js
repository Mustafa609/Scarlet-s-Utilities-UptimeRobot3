const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CloseCommand extends BaseCommand {
  constructor() {
    super('close', 'ticket', []);
  }

  async run(client, message, args) {
    if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.delete();
  }
}