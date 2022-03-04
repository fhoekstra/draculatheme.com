export default async (req, res) => {
  try {
    const guildID = '820858204472213505'
    const discordReq = await fetch(
      `https://discord.com/api/guilds/${guildID}/members`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    )

    const discordRes = await discordReq.json()
    const total = discordRes
    return res.status(200).json({ total })
  } catch (error) {
    return res.status(400).json({ total: 0 })
  }
}
