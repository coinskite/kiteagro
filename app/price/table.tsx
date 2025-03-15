import { Loader } from "lucide-react";

type props = {
  list: any[]
  isLoading: boolean
}

function Table({ list, isLoading }: props) {
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
            isLoading && (
              <tr>
                <td className="w-full text-center" colSpan={9}>
                  <div className="dc h-80">
                    <Loader className="animate-spin" />
                  </div>
                </td>
              </tr>
            )
          }

          {
            !isLoading && list.length === 0 && (
              <tr>
                <td className="w-full text-center" colSpan={9}>
                  <div className="dc h-80">
                    No Data Available
                  </div>
                </td>
              </tr>
            )
          }

          {
            !isLoading && list?.map(l => (
              <tr key={l?._id} className="odd:bg-[#F8F8F8] text-[4px] xs:text-[6px] sm:text-[7px] md:text-[8px] lg:text-[10px] xl:text-xs font-medium">
                <td className="px-4 py-2 text-[#32A071]">{l?.commodity}</td>
                <td className="px-4 py-2 text-[#32A071]">{l?.variety}</td>
                <td className="px-4 py-2">{new Date(l?.arrivalDate).toLocaleDateString()}</td>
                <td className="px-4 py-2">{l?.state}</td>
                <td className="px-4 py-2">{l?.district}</td>
                <td className="px-4 py-2">{l?.market}</td>
                <td className="px-4 py-2">₹ {l?.maxPrice}</td>
                <td className="px-4 py-2">₹ {l?.avgPrice}</td>
                <td className="px-4 py-2">₹ {l?.minPrice}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table