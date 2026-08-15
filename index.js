require('dotenv').config();
const { App } = require('@slack/bolt');
const axios = require('axios'); // Required for API requests

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// --- YOUR COMMANDS ---

// 1. Ping Command
app.command('/kc16-ping', async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong! \nLatency: ${latency}ms` });
});

// 2. Help Command
app.command('/kc16-help', async ({ ack, respond }) => {
  await ack();
  await respond({
    text: `*Available Commands:*\n\`/kc16-ping\` - Check bot latency\n\`/kc16-catfact\` - Get a cat fact\n\`/kc16-joke\` - Get a random joke`
  });
});

// 3. Cat Fact Command (API)
app.command('/kc16-catfact', async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `*Cat Fact:*\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

// 4. Joke Command (API)
app.command('/kc16-joke', async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({ text: `${response.data.setup}\n\n*${response.data.punchline}*` });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

(async () => {
  await app.start();
  console.log('KC16 bot is running with new commands!');
})();