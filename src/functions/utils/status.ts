import { Track } from "discord-player";
import { ActivityType, Client } from "discord.js";

export function setSongStatus(client: Client<true>, track: Track) {
    client.user.setActivity({
        name: track.title,
        type: ActivityType.Listening,
    });
}