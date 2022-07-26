const ytdl = require("ytdl-core");
const fs = require("fs");

const yt_audio = async (req, res) => {
    const { songId } = req.params;
    console.log("song id: ", songId);
    try {
        res.writeHead(200, {
            "Content-Type": "audio/mpeg",
        });
        const audioDetail = await ytdl.getInfo(songId, {
            filter: "audioonly",
            quality: "loweest",
        });
        ytdl(audioDetail.videoDetails.video_url, {
            filter: "audioonly",
        }).pipe(res);
    } catch (error) {
        console.error("error playing the song", error);
    }
};

module.exports = { yt_audio };
