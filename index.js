require('dotenv').config();
const { App } = require('@slack/bolt');
const axios = require('axios');

// Initialize the app with your tokens from the .env file
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});

// --- COMMAND 1: PING ---
app.command('/kc16-ping', async ({ command, ack, respond }) => {
  await ack();
  await respond('Pong! :ping_pong: KC16 is online and ready.');
});

// --- COMMAND 2: HELP ---
app.command('/kc16-help', async ({ command, ack, respond }) => {
  await ack();
  const helpText = `*Available Commands for KC16:*\n` +
    `\`/kc16-ping\` - Check bot status\n` +
    `\`/kc16-help\` - Show this help menu\n` +
    `\`/kc16-catfact\` - Get a random cat fact\n` +
    `\`/kc16-joke\` - Hear a funny joke\n` +
    `\`/kc16-cybernetics\` - Cybernetics presentation reference\n` +
    `\`/kc16-soccer\` - Random soccer/football fact\n` +
    `\`/kc16-8ball\` - Ask the magic 8-ball a question\n` +
    `\`/kc16-dog\` - Get a random dog picture\n` +
    `\`/kc16-roll\` - Roll a 6-sided die`;
    
  await respond(helpText);
});

// --- COMMAND 3: CAT FACT (Axios API) ---
app.command('/kc16-catfact', async ({ command, ack, respond }) => {
  await ack();
  try {
    const res = await axios.get('https://catfact.ninja/fact');
    await respond(`*Cat Fact:*\n${res.data.fact}`);
  } catch (error) {
    console.error(error);
    await respond('Sorry, I could not fetch a cat fact right now.');
  }
});

// --- COMMAND 4: JOKE (Axios API) ---
app.command('/kc16-joke', async ({ command, ack, respond }) => {
  await ack();
  try {
    const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
    await respond(`*Joke:*\n${res.data.setup}\n\n_${res.data.punchline}_`);
  } catch (error) {
    console.error(error);
    await respond('Sorry, I am out of jokes at the moment.');
  }
});

// --- COMMAND 5: FORTRESS STATUS ---
app.command('/kc16-fortress', async ({ command, ack, respond }) => {
  await ack();
  const statusReport = `
  *:shield: Smart Fortress (Home) - Status Report*
  > :white_check_mark: *Mainframe:* Online and operational
  > :white_check_mark: *Sensors:* Active
  > :warning: *Auto-locks:* Pending maintenance check
  `;
  await respond(statusReport);
});

// --- COMMAND 6: CYBERNETICS REFERENCE ---
app.command('/kc16-cybernetics', async ({ command, ack, respond }) => {
  await ack();
  await respond(`*:robot_face: The Cybernetic Synthesis - AI & Robotics*\nQuick reference loaded. Don't forget to emphasize the neural network latency slides during the presentation!`);
});

// --- COMMAND 7: SOCCER FACT ---
app.command('/kc16-soccer', async ({ command, ack, respond }) => {
  await ack();
  const footballFacts = [
    "A standard soccer ball has exactly 32 panels.",
    "The fastest red card in history was given in just 2 seconds!",
    "Keep up the training for the next local kids' tournament!",
    "Only 8 countries have ever won the World Cup."
  ];
  
  const randomFact = footballFacts[Math.floor(Math.random() * footballFacts.length)];
  await respond(`:soccer: *Match Fact:* ${randomFact}`);
});

// --- COMMAND 8: MAGIC 8-BALL ---
app.command('/kc16-8ball', async ({ command, ack, respond }) => {
  await ack();
  const answers = [
    "It is certain.", 
    "Reply hazy, try again.", 
    "Don't count on it.", 
    "Yes, definitely.",
    "My sources say no."
  ];
  
  const answer = answers[Math.floor(Math.random() * answers.length)];
  await respond(`You asked: *"${command.text}"*\n:8ball: *The Magic 8-Ball says:* ${answer}`);
});

// --- COMMAND 9: DOG IMAGE (Axios API) ---
app.command('/kc16-dog', async ({ command, ack, respond }) => {
  await ack();
  try {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    await respond(`Here is a random dog for you! :dog:\n${res.data.message}`);
  } catch (error) {
    console.error(error);
    await respond("Couldn't fetch a dog right now. They are all sleeping! :zzz:");
  }
});

// --- COMMAND 10: DICE ROLL ---
app.command('/kc16-roll', async ({ command, ack, respond }) => {
  await ack();//
  const roll = Math.floor(Math.random() * 6) + 1;
  await respond(`:game_die: You rolled a *${roll}*!`);
});

// --- START THE APP ---
(async () => {
  await app.start();
  console.log('⚡️ KC16 Bolt app is running and ready for action!');
})();