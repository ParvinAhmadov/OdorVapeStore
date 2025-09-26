import HeroSlide from "@/components/HeroSlide/HeroSlide";
import Header from "@/featured/Header";
import Navbar from "@/components/Navbar/Navbar";
import "../../app/global.scss";
import NeonCursor from "@/components/NeonCursor";
import Footer from "../Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col">
        <NeonCursor />
        <HeroSlide />
        <div className="relative z-10">
          <Header />
          <Navbar />
        </div>
        <main className="flex-1 z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
