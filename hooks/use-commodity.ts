import { toast } from "sonner";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllCommodidies, getCommodityById, createCommodity, updateCommodity, deleteCommodity } from "../actions/commodities";

export function useCommodity(query: any) {
  return useQuery({
    queryKey: ["commodities", query],
    queryFn: () => getAllCommodidies(query),
  })
}

export function useCommodityById(id: string) {
  return useQuery({
    queryKey: ["commodity", id],
    queryFn: () => getCommodityById(id),
  })
}

export function useCreateCommodity() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: any) => createCommodity(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commodities"] })
      toast("Commodity created successfully")
    },
    onError: () => {
      toast("Failed to create commodity")
    }
  })
}

export function useUpdateCommodity() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: any) => updateCommodity(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commodities"] })
      toast("Commodity updated successfully")
    },
    onError: () => {
      toast("Failed to update commodity")
    }
  })
}

export function useDeleteCommodity() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deleteCommodity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commodities"] })
      toast("Commodity deleted successfully")
    },
    onError: () => {
      toast("Failed to delete commodity")
    }
  })
}
