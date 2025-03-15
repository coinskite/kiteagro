import { endPoints, sendApiReq } from '@/utils/send-api-req';

export function getAllCommodidies(params: any) {
  return sendApiReq({
    url: endPoints.commodity,
    params,
  })
}

export function getCommodityById(id: string) {
  return sendApiReq({
    url: `${endPoints.commodity}/${id}`,
  })
}

export function createCommodity(data: any) {
  return sendApiReq({
    method: "post",
    url: endPoints.commodity,
    data,
  })
}

export function updateCommodity(data: any) {
  return sendApiReq({
    method: "put",
    url: endPoints.commodity,
    data,
  })
}

export function deleteCommodity(id: string) {
  return sendApiReq({
    method: "delete",
    url: `${endPoints.commodity}/${id}`,
  })
}
