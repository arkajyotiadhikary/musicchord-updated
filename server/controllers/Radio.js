const fs = require("fs");
const Throttle = require("throttle");
const { ffprobeSync } = require("@dropb/ffprobe");

const Radio = (req, res) => {
    console.log(req.body);
    // res.write("playing audio");
    // const bitRate = ffprobeSync("../music/song1.mp4").format.bit_rate;
    // const readable = fs.createReadStream("../music/song1.mp4");
    // const throttle = new Throttle(bitRate / 8);
    // const writables = [writable1, writable2, writable3];
    // readable.pipe(throttle).on("data", (chunk) => {
    //     for (const writable of writables) {
    //         writable.write(chunk);
    //     }
    // });
};

module.exports = { Radio };
