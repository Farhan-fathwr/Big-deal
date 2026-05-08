// require("http")
  .createServer((req, res) => res.end("OK"))
  .listen(process.env.PORT || 3000);

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const TOKEN = process.env.TOKEN;

client.once("ready", () => {
  console.log(`🔥 Bot Online: ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {

  if (!interaction.isChatInputCommand()) return;

  console.log("Command received:", interaction.commandName);

  try {

    // 👇 immediately reply
    if (interaction.commandName === "ping") {
      await interaction.reply("🏓 Pong!");
    }

  } catch (err) {
    console.error(err);

    if (!interaction.replied) {
      await interaction.reply("❌ Error");
    }
  }
});

client.login(TOKEN);.
