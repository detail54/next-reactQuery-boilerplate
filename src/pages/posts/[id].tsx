import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { IPost } from 'hooks/api/interface'
import API_URL from 'hooks/api/urls'
import usePost from 'hooks/usePost'
import { usePrefetchQuery } from 'hooks/useReactQuery'

interface IProps {
  id: number
}

const post: NextPage = () => {
  const router = useRouter()
  const id = Number(router.query.id)
  const { getPost } = usePost()
  const { data: postData, isLoading, error, isError } = getPost(id)

  return <div>{postData?.body}</div>
}

export default post

// export const getStaticProps: GetStaticProps<IProps> = async (ctx) => {
//   const router = useRouter()
//   const id = Number(router.query.id)
//   console.log(id)

//   usePrefetchQuery<IPost>(API_URL.POSTS, { id })
//   return {
//     props: { id },
//   }
// }
