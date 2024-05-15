import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const FontMain = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Raphael AI",
  description: "An AI-Powered Image Editing SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#dc2626" },
      }}>
      <html lang="en">
        <body className={cn("font-main antialiased", FontMain.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
