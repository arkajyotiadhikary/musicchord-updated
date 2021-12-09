const ytdl = require("ytdl-core");
const fs = require("fs");

const yt_audio = async (req, res) => {
    const { songId } = req.params;
    console.log(songId);
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

        console.log(
            ytdl(audioDetail.videoDetails.video_url, {
                filter: "audioonly",
            })
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = { yt_audio };
