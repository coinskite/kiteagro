const list = [
  {
    key: '1',
    title: 'COMPANY',
    list: [
      "About coinskite",
      "Career",
      "Contact",
      "Work",
      "Insights",
    ]
  },
]

function Address() {
  return (
    <div className="p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <div className="text-[#0F0450]">
          <h5 className="text-[#0F0450]">
            Our Offices
          </h5>

          <p>
            Although we’re a remote-first
            company, we also have office at
          </p>

          <p>
            6th Floor, Nizara Bonanza, Door No:813, Anna Salai, Chennai,India
          </p>
        </div>

        <img src="/img/home/address.png" alt="" className="" />

        <div>
          {
            list.map(l => (
              <div key={l.key}>
                <p className="text-[#0F0450]">
                  {l.title}
                </p>

                <ul>
                  {
                    l.list.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Address