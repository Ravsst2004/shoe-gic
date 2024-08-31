export default function Footer() {
  const sitemap = [
    {
      title: "Services",
      links: ["Shoes", "Customer Service", "Shipping", "Returns"],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Terms of Service",
        "Contact Us",
        "Privacy Policy",
      ],
    },
    {
      title: "Social Media",
      links: ["Facebook", "Twitter", "Instagram", "Discord"],
    },
  ];

  return (
    <>
      {/* Desktop */}
      <footer className=" bg-gray-800 text-center text-surface/75 lg:text-left">
        <div className="max-w-7xl mx-auto py-10 text-center md:text-left text-slate-100">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col gap-y-2">
              <h1 className="mb-4 text-3xl flex items-center justify-center font-semibold md:justify-start">
                ShoeGic.
              </h1>
              <p className="text-sm">
                PT. Jro Datuk Nusantara Jl. LoL No. 27, Blok B5 IShowSpeed
              </p>
              <p className="md:mr-20 text-sm">
                At ShoeGic, we offer quality shoes for your comfort and style.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sitemap.map((item, index) => (
                <div key={index}>
                  <h1 className="mb-4 text-xl flex justify-center uppercase md:justify-start">
                    {item.title}
                  </h1>
                  {item.links.map((link, index) => (
                    <p key={index} className="mb-4 text-sm hover:underline">
                      <a href="#!">{link}</a>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-6 text-center">
          <span className="block text-sm px-4 text-slate-100 sm:text-center">
            © {new Date().getFullYear()}
            <a href="#" className="hover:underline">
              ShoeGic™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
