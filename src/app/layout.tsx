import type { Metadata } from "next";
import { Inter, Poppins, Advent_Pro } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "./_components/ui/announcementbar/page";
import NavBar from "./_components/ui/navbar/page";

const inter = Inter({ subsets: ["latin"] });
const adventure = Advent_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ArchoInfra Website",
  description: "Realestate Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnnouncementBar />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
