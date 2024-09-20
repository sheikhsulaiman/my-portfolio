import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainNav from "../components/main-nav";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Sheet } from "@/components/ui/sheet";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SONY Ed-Tech",
  description:
    "A freelance web & app developer. A student of Educational Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sheet>
            <MainNav />
          </Sheet>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
