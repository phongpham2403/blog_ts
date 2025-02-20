import { createAction, createReducer } from "@reduxjs/toolkit";
import { initialPostList } from "../../constants/blog";
import { Post } from "../../types";

interface BlogState {
    postList: Post[],
    editForm: Post | null
}
export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const editPost = createAction<string>('blog/editPost')

const initState: BlogState = {
    postList: initialPostList,
    editForm: null
}

const blogReducer = createReducer(initState, (builder) => {
    builder.addCase(addPost, (state: BlogState, action) => {
        state.postList.push(action.payload)
    })
    builder.addCase(deletePost, (state, action) => {
        const postIndex = state.postList.findIndex(post => post.id === action.payload)
        postIndex !== -1 && state.postList.splice(postIndex, 1)
    })

    builder.addCase(editPost, (state, action) => {
        const postIndex = state.postList.find(post => post.id === action.payload)
        if (postIndex) {
            state.editForm = postIndex
        }
    })
})

export default blogReducer