
const list = Array(15).fill("").map((d, i) => ({
  key: i,
  commodity: "Paddy",
  variety: "Hybrid",
  arrivalDate: "18-03-2023",
  state: "Tamil Nadu",
  district: "Theni",
  market: "Theni",
  maxPrice: "2270 / Quintal",
  avgPrice: "2270 / Quintal",
  minPrice: "2270 / Quintal",
}))

function Table() {
  return (
    <div className="p-6 overflow-scroll">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-[#22C954] text-[4px] xs:text-[6px] sm:text-[8px] md:text-[10px] xl:text-sm text-white">
            <td className="w-32 px-4 py-2">Commodity</td>
            <td className="w-32 px-4 py-2">Variety</td>
            <td className="w-36 px-4 py-2">Arrival Date</td>
            <td className="w-36 px-4 py-2">State</td>
            <td className="w-28 px-4 py-2">District</td>
            <td className="w-28 px-4 py-2">Market</td>
            <td className="w-36 px-4 py-2">Max Price</td>
            <td className="w-36 px-4 py-2">Avg Price</td>
            <td className="w-36 px-4 py-2">Min Price</td>
          </tr>
        </thead>

        <tbody>
          {
            list.map(l => (
              <tr key={l.key} className="odd:bg-[#F8F8F8] text-[4px] xs:text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs font-medium">
                <td className="px-4 py-2 text-[#32A071]">{l.commodity}</td>
                <td className="px-4 py-2 text-[#32A071]">{l.variety}</td>
                <td className="px-4 py-2">{l.arrivalDate}</td>
                <td className="px-4 py-2">{l.state}</td>
                <td className="px-4 py-2">{l.district}</td>
                <td className="px-4 py-2">{l.market}</td>
                <td className="px-4 py-2">₹ {l.maxPrice}</td>
                <td className="px-4 py-2">₹ {l.avgPrice}</td>
                <td className="px-4 py-2">₹ {l.minPrice}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table