import { AxiosError, AxiosResponse } from 'axios'
import {
  useQuery as useQueryOrigin,
  UseQueryOptions,
  UseQueryResult,
  useMutation as useMutationOrigin,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query'
import api from '../utils/axios'
import useApiError, { TErrorHandlers } from './useApiError'

type TQueryKey = [string, object | undefined]
export type TQueryErr = (err: AxiosError) => void
export type TMutationErr = (
  error: AxiosError,
  variables: unknown,
  context: unknown,
) => void | Promise<unknown>

export const useQuery = <T>(
  url: string,
  params?: object,
  onError?: TQueryErr,
  errorHandlers?: TErrorHandlers,
  options?: Omit<
    UseQueryOptions<T, AxiosError, T, TQueryKey>,
    'queryKey' | 'onError'
  >,
): UseQueryResult<T, AxiosError> => {
  const { handleQueryError } = useApiError(errorHandlers)

  return useQueryOrigin<T, AxiosError, T, TQueryKey>(
    [url, params],
    async () => {
      const { data } = await api.get<T>(url, { ...params })
      return data
    },
    {
      enabled: !!url,
      onError: onError || handleQueryError,
      useErrorBoundary: !onError,
      ...options,
    },
  )
}

export const useMutation = <T, S>(
  url: string,
  mutationFn: (data: T | S) => Promise<AxiosResponse<S>>,
  params?: object,
  errorHandlers?: TErrorHandlers,
  updater?: (oldData: T, newData: S) => T,
  onError?: TMutationErr,
  options?: Omit<
    UseMutationOptions<AxiosResponse, AxiosError, T | S>,
    'mutationFn' | 'onMutate' | 'onSettled' | 'onError'
  >,
): UseMutationResult<AxiosResponse, AxiosError, T | S> => {
  const { handleMutationError } = useApiError(errorHandlers)

  const queryClient = useQueryClient()

  return useMutationOrigin<AxiosResponse, AxiosError, T | S>(mutationFn, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url, params])

      const previousData = queryClient.getQueriesData([url, params])

      queryClient.setQueriesData<T>([url, params], (oldData) => {
        return updater && oldData ? updater(oldData, data as S) : (data as T)
      })

      return previousData
    },
    onError: onError || handleMutationError,
    onSettled: () => {
      queryClient.invalidateQueries([url, params])
    },
    ...options,
  })
}

export const usePostMutation = <T, S>(
  url: string,
  params?: object,
  updater?: (oldData: T, newData: S) => T,
  onError?: TMutationErr,
  errorHandlers?: TErrorHandlers,
  options?: Omit<
    UseMutationOptions<AxiosResponse, AxiosError, T | S>,
    'mutationFn' | 'onMutate' | 'onSettled' | 'onError'
  >,
): UseMutationResult<AxiosResponse, AxiosError, T | S> => {
  return useMutation<T, S>(
    url,
    (data) => api.post<S>(url, { data, params }),
    params,
    errorHandlers,
    updater,
    onError,
    options,
  )
}
