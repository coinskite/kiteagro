"use client";

import { useState } from "react";

import { useCommodity } from "@/hooks/use-commodity";

import Header from "./header";
import Table from "./table";

function Commodity() {
  const [filters, setFilters] = useState({
    state: "",
    district: "",
    market: "",
    variety: "",
    commodity: ""
  })

  const { data, isLoading } = useCommodity(filters)

  function updateFilters(params: any) {
    setFilters({
      ...filters,
      ...params
    })
  }

  return (
    <>
      <Header updateFilters={updateFilters} />
      <Table list={data || []} isLoading={isLoading} />
    </>
  )
}

export default Commodity
