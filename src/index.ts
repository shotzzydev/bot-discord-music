import { createClient } from "#base"; 
import { Player } from "discord-player";

const client = createClient({
    commands: {
        guilds: ["1141137290446504078"]
    }
});
client.start();

const player = new Player(client as never);
player.extractors.loadDefault();
