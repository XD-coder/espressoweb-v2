import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "Espresso Hosting",
  description: "Your go-to for reliable and high-performance game server hosting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black`}
      >
        <ClerkProvider>{children}</ClerkProvider>
        
      </body>
    </html>
  );
}
