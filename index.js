require("http")
  .createServer((req, res) => {
    res.end("OK");
  })
  .listen(process.env.PORT || 3000);

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  console.log("❌ TOKEN missing!");
  process.exit(1);
}

client.once("ready", () => {
  console.log(`🔥 Bot Online: ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  try {
    if (interaction.commandName === "ping") {
      await interaction.reply("🏓 Pong!");
    }
  } catch (err) {
    console.error(err);
  }
});

client.login(TOKEN);
