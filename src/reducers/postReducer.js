import * as types from "../constants/actionTypes";
import { dummyData } from "../data";

const initialState = {
  posts: dummyData,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          posts: [
            ...state.posts,
            ...action.payload.map((post) => ({
              ...post,
              comments: [],
              likes: 0,
              shares: 0,
              saves: 0,
            })),
          ],
        };
      } else {
        return {
          ...state,
          posts: [
            ...state.posts,
            { ...action.payload, comments: [], likes: 0, shares: 0, saves: 0 },
          ],
        };
      }
    case types.ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        ),
      };
    case types.LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
        ),
      };
    case types.SHARE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload
            ? { ...post, shares: post.shares + 1 }
            : post
        ),
      };
    case types.SAVE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload ? { ...post, saves: post.saves + 1 } : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
