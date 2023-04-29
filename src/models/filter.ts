export interface IFilter {
  id: string
  name?: string
  choices?: IFilterChoice[]
}

export interface IFilterChoice {
  display: string
  value: string
}
