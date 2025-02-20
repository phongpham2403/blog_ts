import { createAction, createReducer } from "@reduxjs/toolkit";
import { initialPostList } from "../../constants/blog";
import { Post } from "../../types";

interface BlogState {
    postList: Post[]
}
export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')

const initState: BlogState = {
    postList: initialPostList
}

const blogReducer = createReducer(initState, (builder) => {
    builder.addCase(addPost, (state: BlogState, action) => {
        state.postList.push(action.payload)
    })
    builder.addCase(deletePost, (state, action) => {
        const postIndex = state.postList.findIndex(post => post.id === action.payload)
        postIndex !== -1 && state.postList.splice(postIndex, 1)
    })
})


export default blogReducer