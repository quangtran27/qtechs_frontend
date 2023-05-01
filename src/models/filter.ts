export interface Filter {
  id: string
  name?: string
  choices?: FilterChoice[]
}

export interface FilterChoice {
  display: string
  value: string
}
