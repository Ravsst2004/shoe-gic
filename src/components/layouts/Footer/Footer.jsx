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
    <footer className="bg-slate-100 text-center text-surface/75 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
        <div className="me-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              ShoeGic.
            </h6>
            <p>PT. Jro Datuk Nusantara Jl. LoL No. 27, Blok B5 IShowSpeed</p>
          </div>

          {/* <div className="grid grid-cols-2 lg:grid-cols-3"> */}
          {sitemap.map((item, index) => (
            <div key={index}>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                {item.title}
              </h6>
              {item.links.map((link, index) => (
                <p key={index} className="mb-4 hover:underline">
                  <a href="#!">{link}</a>
                </p>
              ))}
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>

      <div className="bg-black/5 p-6 text-center">
        <span className="block text-sm px-4 text-gray-500 sm:text-center">
          © {new Date().getFullYear()}
          <a href="#" className="hover:underline">
            ShoeGic™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
