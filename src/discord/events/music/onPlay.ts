import { getQueueMetadata, setSongStatus } from "#functions";
import { settings } from "#settings";
import { brBuilder, createEmbed } from "@magicyan/discord";
import { useMainPlayer } from "discord-player";

const player = useMainPlayer();

player.events.on("playerStart", (queue, track) => {
    const { client, channel, voiceChannel } = getQueueMetadata(queue);

    setSongStatus(client, track);

    const embed = createEmbed({
        color: settings.colors.default,
        title: "🎵 Tocando agora",
        thumbnail: track.thumbnail,
        url: track.url,
        description: brBuilder(
            `**Música**: ${track.title}`,
            `**Autor**: ${track.author}`,
            `**Canal** de voz: ${voiceChannel}`,
            `**Duração**: ${track.duration}`
        )
    });
    
    channel.send({ embeds: [embed] })
});