import { Link } from "react-router-dom";

export default function DesktopMenu({ linkMenu }) {
  const currentUrl = window.location.pathname;

  return (
    <div className="flex justify-center items-center bg-red-600 rounded-t-md mt-6 py-1">
      {linkMenu.map((link, index) => (
        <Link key={index} to={link.link}>
          <div
            className={`${
              currentUrl === link.link ? "underline underline-offset-4" : ""
            } p-2 text-slate-100 font-light cursor-pointer`}
          >
            {link.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
