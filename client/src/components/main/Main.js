import AudioPlayer from "./secondCol/audio-player/AudioPlayer";
import Navbar from "../navbar/Navbar";
import Chat from "./firstCol/chat/Chat";
import ThirdCol from "./thirdCol/ThirdCol";
import NotePad from "./secondCol/notepad/Notepad";
import NotePad1 from "./secondCol/notepad/NotePad1";
import "./Main.css";

const Main = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row g-4">
                    <Navbar />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row g-5 g-lg-3">
                    <div className="col-lg-6">
                        <Chat />
                    </div>
                    <div className="col-lg-3">
                        <AudioPlayer />
                        <NotePad1 />
                    </div>
                    <div className="col-lg-3 ">
                        <ThirdCol />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
