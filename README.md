# Discord Terminal

💻 A Discord bot to conveniently use Discord as your remote terminal

😉 Why use SSH clients when you can use your favourite chat app as one?

## Installation

1) Clone the repo and install dependencies

```bash
// with yarn:
yarn

// with npm:
npm install --save
```

2) Edit `src/config.json` with your bot token and allowed users

3) Run the bot using `npm run start` or `yarn start`

### config.json

This file holds the needed information

#### token

The token for your Discord bot. Obtain it from the [Discord developer portal](https://discord.com/developers/applications)

[How do I create a bot?](https://www.howtogeek.com/364225/how-to-make-your-own-discord-bot/)

#### allowed

This is an array containing the Discord ID's of the users who can run commands.
The bot will ignore messages from others.

[How do I find my Discord ID?](https://techswift.org/2020/04/22/how-to-find-your-user-id-on-discord/)

## Why did I make this?

I make bots. A lot of them. A lot of times I need to quickly open up my SSH client to check on
a bot using pm2. It's easy enough, but could be done faster...

Enter exec, the node.js package which lets you run shell commands from javascript.
This idea struck me randomly and I *had* to make it real.

So well, here we are. Managing bots from Discord itself, how good is that!
