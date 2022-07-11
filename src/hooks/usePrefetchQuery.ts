import { dehydrate, QueryFunction } from 'react-query'
import queryClient from 'utils/reactQuery'
import { TQueryKey } from './useReactQuery'

const usePrefetchQuery = async <T>(
  url: string,
  params: object,
  queryFn: QueryFunction<T, TQueryKey>,
) => {
  await queryClient.prefetchQuery([url, params], queryFn)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default usePrefetchQuery
