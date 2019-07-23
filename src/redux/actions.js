import { SET_FILTER, FETCH_TRACKS, ADD_TRACK, TOGGLE_PAGE, DELETE_TRACK, FETCH_LYRICS_TRACK, CLEAR_FETCH_TRACKS } from "./actionTypes";


export const fetchTracks = (name) => ({
  type: FETCH_TRACKS,
  payload: { name }
});

export const clearFetchTracks = () => ({
  type: CLEAR_FETCH_TRACKS
})

export const addTrack = (track) => ({
  type: ADD_TRACK,
  payload: { track }
});

export const deleteTrack = (index_track) => ({
  type: DELETE_TRACK,
  payload: index_track
});

export const openPage = () => ({
  type: TOGGLE_PAGE
});

export const setFilter = (filter) => ({
   type: SET_FILTER, 
   payload: { filter } 
});

export const getLyrics = (track_id) => ({
  type: FETCH_LYRICS_TRACK,
  payload: {track_id}
})