import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restaurancy - Hello World",
  description: "Os melhores restaurantes do mundo",
  keywords: ["restaurante", "comida", "comer", "jantar", "almoço"],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-2xl font-bold leading-[3rem]">
          <Link href="/">Restaurancy</Link>
        </header>
        <main className="py-8">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Restaurancy
        </footer>
      </body>
    </html>
  );
}
