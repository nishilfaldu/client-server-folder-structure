import { Nunito } from "next/font/google";

import { FiltersButton } from "@/components/Category/FiltersButton";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

import "@/styles/index.scss";



const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "7west Marketplace Web Application",
  description: "Welcome to 7west Marketplace Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Navbar />
        <div className="flex flex-col items-center fixed bottom-0 z-10 w-full gap-y-8">
          <FiltersButton/>
          <Footer/>
        </div>
        {children}
      </body>
    </html>
  );
}
