"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = __importDefault(require("execa"));
const discord_js_1 = require("discord.js");
const config_json_1 = require("./config.json");
const client = new discord_js_1.Client();
client.on('message', async (message) => {
    if (!config_json_1.allow.includes(message.author.id))
        return;
    const args = message.content.trim().split(/ +/);
    const cmd = args.shift();
    if (!cmd)
        return;
    execa_1.default(cmd, args).stdout.on('data', (d) => {
        if (d)
            message.channel.send(d.toString());
    });
});
client.on('ready', () => console.log('Ready'));
client.login(config_json_1.token);
