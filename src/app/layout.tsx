import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/providers/RQProvider";
import Header from "@/components/ui/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";

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
  title: "리그 오브 레전드 정보 앱",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <div className="w-full min-h-screen flex justify-center bg-background">
          <div className="w-full">
            <ThemeProvider>
              <Header />
              <main className="flex justify-center mt-16 max-w-[1600px] mx-auto px-6 text-white">
                <Providers>{children}</Providers>
              </main>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
