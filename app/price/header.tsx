import { useState } from "react"

type props = {
  updateFilters: (params: any) => void
}

function Header({ updateFilters }: props) {
  const [filters, setFilters] = useState({
    commodity: "",
    state: "",
    market: "",
    variety: "",
    district: ""
  })

  return (
    <div className="p-6">
      <h1 className="mb-4 text-sm xs:text-lg md:text-xl xl:text-2xl font-medium">
        Mandi Prices
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <select
          value={filters.commodity}
          onChange={(e) => setFilters({ ...filters, commodity: e.target.value })}
          className="text-[7px] xs:text-[8px] lg:text-xs xl:text-sm font-medium border border-[#22C954] shadow-[0_4px_4px_0_#00000040]"
        >
          <option value="" disabled>Select Commodity</option>
          <option value="Paddy">Paddy</option>
          <option value="Maize">Maize</option>
        </select>

        <select
          value={filters.state}
          onChange={(e) => setFilters({ ...filters, state: e.target.value })}
          className="text-[7px] xs:text-[8px] lg:text-xs xl:text-sm font-medium border border-[#22C954] shadow-[0_4px_4px_0_#00000040]"
        >
          <option value="" disabled>Select State</option>
          <option value="Tamilnadu">Tamilnadu</option>
        </select>

        <select
          value={filters.market}
          onChange={(e) => setFilters({ ...filters, market: e.target.value })}
          className="text-[7px] xs:text-[8px] lg:text-xs xl:text-sm font-medium border border-[#22C954] shadow-[0_4px_4px_0_#00000040]"
        >
          <option value="" disabled>Select Market</option>
          <option value="Alangeyam">Alangeyam</option>
          <option value="Andimadom">Andimadom</option>
          <option value="Annur">Annur</option>
          <option value="Anthiyur">Anthiyur</option>
        </select>

        <button
          className="w-full text-[10px] xs:text-xs xl:text-sm font-medium bg-[#22C954] text-white"
          onClick={() => updateFilters(filters)}
        >
          Search
        </button>
      </div>

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
            <p>2380.00/Quintal</p>
          </div>

          <div className="df justify-around p-2">
            <p>Average Price</p>
            <p>2320/Quintal</p>
          </div>

          <div className="df justify-around p-2 bg-[#B1FCC8]">
            <p>Lowest Market Price</p>
            <p>2260.00/Quintal</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header