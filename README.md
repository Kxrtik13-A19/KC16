# KC16 Slack Bot

TRY PROJECT HERE ↓ <br>
<a href="https://slack.com/app_redirect?app=A0BQH4NPUU9">TRY KC16 SLACK BOT</a>  It will show not working, but it will work in few seconds!

Hey! This is KC16, a custom Slack bot I built for the Stardance challenge. 

I wrote the bot in Node.js using the `@slack/bolt` framework. Right now, it lives on a Debian container on Hack Club Nest. Getting it to stay online 24/7 was honestly a huge learning curve—I had to figure out how to write a custom `systemd` service just to keep the Node process running in the background so it wouldn't die the second I closed my laptop.

It responds to a bunch of custom slash commands that I manually registered in the Slack API dashboard (which took way too much time lol). Some of the fun ones you can try are `/kc16-8ball`, `/kc16-joke`, `/kc16-ping`, and `/kc16-catfact`. 

The hardest part of this project was definitely dealing with the Slack Socket Mode connection. I kept getting `UND_ERR_CONNECT_TIMEOUT` errors where the bot would just randomly ignore people because the network connection went stale. I ended up fixing it by tinkering with the systemd service to clear out the dead network connections and restart.

It was a ton of config work, but seeing it run flawlessly in the background is super satisfying. 

To test it, just jump into the channel and type `/kc16-ping`!
