import axios from "axios";
import { yt_token } from "./config.json";
const endpoint = "http://localhost:8000";

const yt_search = `https://www.googleapis.com/youtube/v3/search?key=${yt_token}&type=video&part=snippet&maxResults=10&q=`;
const songDetail = {
    songId: "",
    thumbnail: "",
    title: "",
    artist: "",
};

const search_song = async (songName) => {
    const url = yt_search + songName;
    try {
        const yt_details = await axios.get(url);
        const songId = yt_details.data.items[0].id.videoId;
        songDetail.songId = yt_details.data.items[0].id.videoId;
        songDetail.thumbnail =
            yt_details.data.items[0].snippet.thumbnails.medium.url;
        songDetail.title = yt_details.data.items[0].snippet.title;
        songDetail.artist = yt_details.data.items[0].snippet.channelTitle;
        await axios.get(`${endpoint}/music/${songId}`);
        console.log(songDetail);
        return songDetail;
    } catch (error) {}
};

export { search_song };
