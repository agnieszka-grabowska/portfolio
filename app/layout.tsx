import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";
import Navigation from "./ui/navigation/navigation";
import TabProvider from "./ui/tabProvider";

export const metadata: Metadata = {
  title: "Agnieszka Grabowska",
  description:
    "Portfolio of an aspiring React developer showcasing projects, expertise in JavaScript, React, and modern web development. Explore my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TabProvider>
          <Navigation />
          {children}
        </TabProvider>
      </body>
    </html>
  );
}
