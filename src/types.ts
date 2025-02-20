import store from "./store";

export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch

export interface Post {
    title: string,
    description: string,
    publishDate: string,
    id: string,
    featuredImage: string,
    published: boolean
}   