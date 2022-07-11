import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { IPost } from 'hooks/api/interface'
import API_URL from 'hooks/api/urls'
import usePost from 'hooks/usePost'
import { usePrefetchQuery } from 'hooks/useReactQuery'
import { GetServerSideProps } from 'next'

interface IProps {
  id: number
}

const post: NextPage<IProps> = ({ id }) => {
  const { getPost } = usePost()
  const { data: postData } = getPost(id)

  return <div>{postData?.body}</div>
}

export default post

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id

  usePrefetchQuery<IPost>(API_URL.POSTS, { id })
  return {
    props: { id },
  }
}
