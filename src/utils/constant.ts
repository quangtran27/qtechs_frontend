import { FilterChoice } from '~/models/filter'

export const PAGE_SIZE = 3

export const laptopPriceChoices: FilterChoice[] = [
  {
    display: 'Duới 15 triệu',
    value: '0-15',
  },
  {
    display: 'Từ 15-25 triệu',
    value: '15-25',
  },
  {
    display: 'Từ 25-35 triệu',
    value: '25-35',
  },
  {
    display: 'Trên 35 triệu',
    value: '35-999',
  },
]

export const laptopRamChoices: FilterChoice[] = [
  {
    display: '4GB',
    value: '4',
  },
  {
    display: '8GB',
    value: '8',
  },
  {
    display: '16GB',
    value: '16',
  },
  {
    display: '32GB',
    value: '32',
  },
  {
    display: '64GB',
    value: '64',
  },
]

export const laptopCpuChoices: FilterChoice[] = [
  {
    display: 'Intel Core i3',
    value: 'i3',
  },
  {
    display: 'Intel Core i5',
    value: 'i5',
  },
  {
    display: 'Intel Core i7',
    value: 'i7',
  },
  {
    display: 'Intel Core i9',
    value: 'i9',
  },
  {
    display: 'AMD',
    value: 'amd',
  },
  {
    display: 'Apple',
    value: 'apple',
  },
]
