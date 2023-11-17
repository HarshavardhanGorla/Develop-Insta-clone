// postActions.js
import * as types from "../constants/actionTypes";

export const addPost = (post) => ({
  type: types.ADD_POST,
  payload: post,
});

export const addComment = (postId, comment) => ({
  type: types.ADD_COMMENT,
  payload: { postId, comment },
});

export const likePost = (postId) => ({
  type: types.LIKE_POST,
  payload: postId,
});

export const sharePost = (postId) => ({
  type: types.SHARE_POST,
  payload: postId,
});

export const savePost = (postId) => ({
  type: types.SAVE_POST,
  payload: postId,
});
