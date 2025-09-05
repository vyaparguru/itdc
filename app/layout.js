
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Jalandhar Institute of Drivers Traning ",
  description: "A government-approved driver training institution dedicated to providing high-quality driving education and skill development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
