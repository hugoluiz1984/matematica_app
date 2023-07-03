import NavBar from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { navLinks } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matemática",
  description: "Aplicativo para testar seus conhecimentos em matemática",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>
          <header className="bg-white-800 text-black py-4">
            <div className=" flex container mx-auto px-4 items-center justify-between">
              <a href="/">
                <Image
                  src="/logo.png"
                  alt="Matemática Logo"
                  width={100}
                  height={24}
                />
              </a>
              <NavBar navLinks={navLinks} />
            </div>
          </header>
          <div className="container mx-auto px-4">{children}</div>
          <footer className="bg-white-800 text-black py-4">
            <div className="container mx-auto px-4">
              <a className="flex place-items-center gap-2 p-8  lg:p-0 items-end justify-center">
                By{" Hugo Gama in "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
