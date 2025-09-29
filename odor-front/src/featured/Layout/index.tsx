import "../../app/global.scss";
import NeonCursor from "@/components/NeonCursor";
import Header from "../Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "../Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen flex flex-col overflow-x-hidden font-[Montserrat]">
        <NeonCursor />

        <header className="absolute top-0 left-0 w-full z-30">
          <Header />
          <Navbar />
        </header>

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
