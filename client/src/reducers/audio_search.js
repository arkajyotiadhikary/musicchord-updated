import { AUDIO_SEARCH } from "../actions/types";
const iniState = {
    song_id: "",
    thumbnail: "",
    title: "",
};

export const audio_search = (state = iniState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AUDIO_SEARCH: {
            return {
                ...state,
                song_id: payload.song_id,
                thumbnail: payload.thumbnail,
                title: payload.title,
            };
        }
        default:
            return state;
    }
};
