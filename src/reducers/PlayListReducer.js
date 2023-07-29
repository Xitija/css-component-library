import { v4 as uuid } from "uuid";
export const initialPlayList = [
  {
    _id: uuid(),
    title: "To Do",
    description: "Art ",
    image: "https://picsum.photos/200",
    videos: [
      {
        _id: 20,
        title: "Kirigami Flower Bouquet - Beautiful Handmade Gift",
        views: 1756,
        chips: ["kirigami", "flower bouquet", "paper", "gift"],
        thumbnail: "https://picsum.photos/300/175",
        src: "https://www.youtube.com/embed/GBIIQ0kP15E",
        category: "Kirigami",
        creator: "Crafty Delights",
      },
      {
        _id: 21,
        title: "Sculpting Animals from Polymer Clay - Step by Step Guide",
        views: 2251,
        chips: ["sculpture", "polymer clay", "animals", "crafts"],
        thumbnail: "https://picsum.photos/300/176",
        src: "https://www.youtube.com/embed/GBIIQ0kP15E",
        category: "Clay Modeling",
        creator: "CraftyCritters",
      },
      {
        _id: 22,
        title: "Stop Motion Short Film - Adventure in Toyland",
        views: 3172,
        chips: ["stop motion", "short film", "toyland", "adventure"],
        thumbnail: "https://picsum.photos/300/177",
        src: "https://www.youtube.com/embed/GBIIQ0kP15E",
        category: "Stop Motion",
        creator: "ToyStoryMakers",
      },
    ],
  },
];

export const playListReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_PLAYLIST":

    case "REMOVE_FROM_PLAYLIST":

    case "ADD_NEW_PLAYLIST":
      const newPlaylist = {
        _id: uuid(),
        title: action.payload.title,
        description: action.payload.description,
        image: "https://picsum.photos/200",
        videos: [],
      };
      return [...state, newPlaylist];

    case "DELETE_PLAYLIST":
      return state.filter((playlist) => playlist?._id !== action.payload);

    default:
      return [...state];
  }
};
