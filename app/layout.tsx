import type { Metadata } from "next";

import "./globals.css";
import Navigation from "./ui/navigation/navigation";
import TabProvider from "./ui/tabProvider";
import Body from "./ui/components/Body/Body";

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
      <Body>
        <TabProvider>
          <Navigation />
          {children}
        </TabProvider>
      </Body>
    </html>
  );
}
