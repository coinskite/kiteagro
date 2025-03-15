import { useState } from "react";

import { commodities, states, tamilNaduDistricts } from "@/utils/enums";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type props = {
  filteredData: any
  updateFilters: (params: any) => void
}

function Header({ filteredData, updateFilters }: props) {
  const [filters, setFilters] = useState({
    commodity: "Paddy",
    state: "Tamil Nadu",
    district: "Theni",
  })

  return (
    <div className="p-6">
      <h1 className="mb-4 text-sm xs:text-lg md:text-xl xl:text-2xl font-medium">
        Mandi Prices
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <Select
          value={filters.commodity}
          onValueChange={val => setFilters({ ...filters, commodity: val })}
        >
          <SelectTrigger className="border border-[#22C954] shadow-[0_4px_4px_0_#00000040]">
            <SelectValue placeholder="Select Commodity" />
          </SelectTrigger>

          <SelectContent>
            {commodities.map(c => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.state}
          onValueChange={val => setFilters({ ...filters, state: val })}
        >
          <SelectTrigger className="border border-[#22C954] shadow-[0_4px_4px_0_#00000040]">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>

          <SelectContent>
            {states.map(s => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.district}
          onValueChange={val => setFilters({ ...filters, district: val })}
        >
          <SelectTrigger className="border border-[#22C954] shadow-[0_4px_4px_0_#00000040]">
            <SelectValue placeholder="Select District" />
          </SelectTrigger>

          <SelectContent className="max-h-80">
            {tamilNaduDistricts.map(d => (
              <SelectItem key={d} value={d}>{d}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          className="w-full bg-[#22C954] text-white hover:bg-green-600"
          onClick={() => updateFilters(filters)}
        >
          Search
        </Button>
      </div>

      {
        filteredData &&
        <div className="df gap-0 my-6 shadow-[1px_2px_7px_5px_#0000001A]">
          <img
            className="hidden md:block w-44"
            src="/img/price/paddy.webp"
            alt=""
          />

          <div className="flex-1 text-[8px] md:text-[10px] lg:text-xs xl:text-sm font-medium text-center">
            <div className="df flex-col gap-1 justify-around px-2 py-3 relative">
              <p className="text-[7px] xs:text-[10px] lg:text-sm xl:text-lg font-medium md:absolute md:top-2 md:left-1/2 md:-translate-x-1/2">Market price summary In Theni</p>
              <p className="md:ml-auto text-[3px] xs:text-[4px] md:text-[6px] xl:text-[8px] font-medium">Last price updated : 08 Feb 23,12:00 am</p>
            </div>

            <div className="df justify-around p-2 bg-[#B1FCC8]">
              <p>Best Market Price</p>
              <p>{filteredData?.maxPrice}/Quintal</p>
            </div>

            <div className="df justify-around p-2">
              <p>Average Price</p>
              <p>{filteredData?.avgPrice}/Quintal</p>
            </div>

            <div className="df justify-around p-2 bg-[#B1FCC8]">
              <p>Lowest Market Price</p>
              <p>{filteredData?.minPrice}/Quintal</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Header