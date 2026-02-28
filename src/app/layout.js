import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./styles/globals.css";
import { ShopProvider } from "./context/ShopContext";

export const metadata = {
  title: "OSKAR MOBILE",
  description: "Магазин мобильных телефонов и аксессуаров",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <ShopProvider>
          <Navbar />
          {children}
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
};