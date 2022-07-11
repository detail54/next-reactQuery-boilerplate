import { IPost } from 'hooks/api/interface'
import API_URL from 'hooks/api/urls'
import usePost from 'hooks/usePost'
import { usePrefetchQuery } from 'hooks/useReactQuery'
import { NextPage } from 'next'
import React, { useId } from 'react'

const post: NextPage = () => {
  const { getPosts } = usePost()
  const { data: postsData } = getPosts()

  return (
    <>
      {postsData?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  )
}

export default post

usePrefetchQuery<IPost>(API_URL.POSTS)
