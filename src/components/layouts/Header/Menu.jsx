import { BsCart } from "react-icons/bs";

export default function NavbarMenu() {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
  ];
  const currentPath = window.location.pathname;

  return (
    <ul className=" font-medium flex flex-col md:items-center p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white md:bg-transparent">
      {menuLinks.map((link) => (
        <li key={link.name} className="">
          <a
            href={link.path}
            className={`${
              currentPath === link.path
                ? "bg-slate-900 text-slate-200 md:font-semibold md:underline md:underline-offset-4"
                : "text-slate-800 md:text-slate-200 relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            } block py-2 px-3 decoration-2 rounded md:bg-transparent md:p-0 `}
            aria-current="page"
          >
            {link.name}
          </a>
        </li>
      ))}
      {/* <li>
        <button className="block py-2 px-3 rounded md:px-2 md:py-1 text-slate-800 md:text-white text-xl font-bold">
          <BsCart />
        </button>
      </li> */}
    </ul>
  );
}
