import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryInstantBox from "./components/CategoryInstantBox";
import Footer from "./components/Footer";

const openSans_init = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BannerBuzz",
  description: "Buy large custom banners online with grommets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans_init.variable}>
        <Header />
        <Banner />
        <CategoryInstantBox />
        {children}
        <Footer />
      </body>
    </html>
  );
}
