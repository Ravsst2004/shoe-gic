import React from "react";

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
      <footer className="bg-gray-800 text-center text-surface/75 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left text-slate-100">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:ml-16 ">
              <h6 className="mb-4 text-3xl flex items-center justify-center font-semibold md:justify-start">
                ShoeGic.
              </h6>
              <p>PT. Jro Datuk Nusantara Jl. LoL No. 27, Blok B5 IShowSpeed</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sitemap.map((item, index) => (
                <div key={index}>
                  <h6 className="mb-4 text-lg flex justify-center uppercase md:justify-start">
                    {item.title}
                  </h6>
                  {item.links.map((link, index) => (
                    <p key={index} className="mb-2 text-sm hover:underline">
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

      {/* Mobile */}
      <footer className="lg:hidden"></footer>
    </>
  );
}
