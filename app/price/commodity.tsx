"use client";

import { useState } from "react";

import { useCommodity } from "@/hooks/use-commodity";

import Header from "./header";
import Table from "./table";

function Commodity() {
  const [filters, setFilters] = useState({
    commodity: "Paddy",
    state: "Tamil Nadu",
    district: "Theni",
  })

  const { data, isLoading } = useCommodity(filters)

  const filteredData = isLoading ? [] : data?.[0]

  function updateFilters(params: any) {
    setFilters({
      ...filters,
      ...params
    })
  }

  return (
    <>
      <Header filteredData={filteredData} updateFilters={updateFilters} />
      <Table list={data || []} isLoading={isLoading} />
    </>
  )
}

export default Commodity
