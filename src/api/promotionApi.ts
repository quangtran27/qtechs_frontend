import { Banner } from '~/models/promotion'
import axiosClient from './axiosClient'

const promotionApi = {
  getAllBanners: () => {
    const url = 'promotions/banners'
    return axiosClient.get<Banner[]>(url)
  },
}

export default promotionApi
