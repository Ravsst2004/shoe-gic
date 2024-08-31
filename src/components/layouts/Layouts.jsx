import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

export default function Layouts({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
