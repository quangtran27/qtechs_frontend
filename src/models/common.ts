export interface PaginationParams {
  page: number
  pageSize: number
  total: number
}

export interface LimitParams {
  limit: number
  offset: number
  total: number
}

export interface ListResponse<T, ParamsT> {
  data: T[]
  paging: ParamsT
}
