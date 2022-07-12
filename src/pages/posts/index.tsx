import { IPost } from 'hooks/api/interface'
import API_URL from 'hooks/api/urls'
import usePost from 'hooks/usePost'
import { usePrefetchQuery } from 'hooks/useReactQuery'
import { NextPage } from 'next'
import Link from 'next/link'

const posts: NextPage = () => {
  const { getPosts } = usePost()
  const { data: postsData } = getPosts()

  return (
    <>
      {postsData?.map((post) => (
        <Link key={post.id} href={`${API_URL.POSTS}/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </>
  )
}

export default posts

usePrefetchQuery<IPost[]>(API_URL.POSTS)
