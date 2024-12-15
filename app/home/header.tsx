function Header() {
  return (
    <div className='p-6 pl-0 md:py-8 relative'>
      <div className="md:flex md:items-center md:flex-row-reverse md:gap-4 max-w-7xl mx-auto text-center md:text-left">
        <div className="pl-6">
          <h1 className='text-sm xs:text-lg sm:text-[22px] lg:text-3xl xl:text-4xl text-[#0F0450] font-bold'>
            Blockchain Powered <br /> Marketplace for Paddy
          </h1>

          <p className='mt-1 mb-2 text-[6px] sm:text-[8px] lg:text-[10px] xl:text-sm text-[#0F0450] font-medium'>
            Our marketplace makes it easy for farmers to sell their produce directly to consumers
            and businesses, while providing access to real-time market data and access to a wide market of
            buyers/business people in Tamilnadu.
          </p>

          <button className='mb-4 px-3 py-1.5 text-[10px] md:text-xs sm:text-[10px] xs:text-xs lg:text-base text-[#ffff] bg-[#22C954] font-medium rounded'>
            Know more
          </button>
        </div>

        <img
          className="w-[192px] xs:w-[236] sm:w-[323px] md:w-[281px] lg:w-[371px] xl:w-[509px]"
          src="/img/home/header.png"
          alt=""
        />
      </div>

      <img
        className="absolute inset-x-0 bottom-0 -z-[1]"
        src="/img/home/header-wave.png"
        alt=""
      />
    </div>
  )
}

export default Header