import { Link } from "react-router-dom";

export default function DesktopMenu({ linkMenu }) {
  const currentUrl = window.location.pathname;

  return (
    <div className="flex justify-center items-center bg-red-600 rounded-t-md mt-6 gap-x-3 py-1">
      {linkMenu.map((link, index) => (
        <Link key={index} to={link.link}>
          <div
            className={`${
              currentUrl === link.link
                ? "underline font-semibold"
                : "font-normal"
            } p-2 text-slate-50  cursor-pointer hover:underline underline-offset-4`}
          >
            {link.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
