import execa from 'execa';
import { Client } from 'discord.js';
import { token, allow } from './config.json';

const client = new Client();

client.on('message', async (message) => {
  if (!allow.includes(message.author.id)) return;

  const args = message.content.trim().split(/ +/);
  const cmd = args.shift();

  if (!cmd) return;
  execa(cmd, args).stdout.on('data', (d: any) => {
    if (d) message.channel.send(d.toString());
  });
});

client.on('ready', () => console.log('Ready'));

client.login(token);
