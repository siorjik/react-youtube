export default function getVideos(state = [], action) {
  switch(action.type) {
    case "INIT_STATE":
      state = action.payload;
      return [...state];

    default: return state;
  }
}