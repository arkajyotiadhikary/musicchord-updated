import { AUDIO_SEARCH } from "./types";

const audio_search = (details) => {
    return {
        type: AUDIO_SEARCH,
        payload: details,
    };
};

export default audio_search;
