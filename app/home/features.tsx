const list = [
  {
    key: '1',
    src: "/img/home/features/1.png",
    title: "Direct access to markets",
  },
  {
    key: '2',
    src: "/img/home/features/2.png",
    title: "Buy & Sell",
  },
  {
    key: '3',
    src: "/img/home/features/3.png",
    title: "Order Management",
  },
  {
    key: '4',
    src: "/img/home/features/4.png",
    title: "Analytics",
  },
  {
    key: '5',
    src: "/img/home/features/5.png",
    title: "Real time market data",
  },
  {
    key: '6',
    src: "/img/home/features/6.png",
    title: "Secure payment",
  },
]

function Features() {
  return (
    <div className="p-6 md:pt-10 md:pb-16 relative overflow-hidden">
      <div className=" max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto">
        <h1 className='text-sm xs:text-base sm:text-lg md:text-[22px] lg:text-[25px] xl:text-3xl font-bold text-[#0F0450] text-center'>
          Features
        </h1>

        <div className='mb-4 text-[4px] xs:text-[6px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-base text-center text-[#0F0450]'>
          our features are designed to streamline your shopping experience and help you find the products you need with ease.
        </div>

        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {
            list.map(l => (
              <div
                key={l.key}
                className='df px-2.5 py-2 bg-[#84FF90] border-t rounded-[5px]'
              >
                <img src={l.src} alt="" className="w-6 md:w-7 lg:w-10 xl:w-12" />

                <p className='text-[9px] lg:text-xs xl:text-[15px] font-bold'>
                  {l.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>

      <img
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 2xl:translate-x-0 w-28 xs:w-48 lg:w-64 xl:w-72"
        src="/img/home/features/circle.png"
        alt=""
      />
    </div>
  )
}

export default Features