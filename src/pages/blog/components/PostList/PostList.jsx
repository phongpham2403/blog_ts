import React from 'react'
import PostItem from '../PostItem'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, editPost } from '../../blog.reducer'

export default function PostList() {
  const postList = useSelector((state) => state.blog.postList)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deletePost(id))
  }
  const handleEdit = (id) => {
    dispatch(editPost(id))
  }
  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {postList.map((post, index) =>
            <PostItem post={post} key={post.id} handleDelete={handleDelete} handleEdit={handleEdit} />
          )}
        </div>
      </div>
    </div>
  )
}
