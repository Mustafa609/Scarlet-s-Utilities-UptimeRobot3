const profileSchema = require('../models/profileSchema');

module.exports = async (client, discord, member) => {
    let profile = await profileSchema.create({
      userID: member.id,
      serverID: member.guild.id,
      coins: 1000,
      bank: 0
    });

    profile.save()
}