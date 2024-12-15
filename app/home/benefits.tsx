const list = [
  {
    id: 1,
    src: "/img/home/benefits/1.png",
    title: 'Benefits for farmers',
    para: [
      "Direct access to a larger market",
      "Real-time market data and price tracking",
      "Elimination of middleman and transparent payment processing",
      "Access to analytics and insights",
    ]
  },
  {
    id: 2,
    src: "/img/home/benefits/2.png",
    title: 'Benefits for Buyers',
    para: [
      "Access to a wide range of high-quality agricultural products.",
      "Connect directly with farmers & Elimination of middleman",
      "Increased efficiency",
      "Streamlined procurement process",
    ]
  },
]

function Benefits() {
  return (
    <div className="py-8 text-[#0F0450] bg-[#97FCA1]">
      <div className="max-w-7xl mx-auto">
        {
          list.map(l => (
            <div className={`df sm:gap-4 md:gap-8 ${l.id === 2 ? "flex-row-reverse" : ""}`} key={l.id}>
              <img src={l.src} alt="" className="w-[142px] xs:w-[166px] sm:w-[227px] md:w-[290px] lg:w-[397px]" />

              <div>
                <p className="mb-2 text-sm xs:text-base sm:text-xl md:text-2xl lg:text-[32px] xl:text-[40px] font-bold">
                  {l.title}
                </p>

                <ul className="list-disc list-inside">
                  {
                    l.para.map((p, i) => (
                      <li key={i} className="text-[5px] xs:text-[7px] sm:text-[10px] md:text-xs lg:text-base xl:text-[22px] font-medium">
                        {p}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Benefits