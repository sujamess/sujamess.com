import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Navbar = dynamic(() => import("@/core/components/layouts/Navbar"));
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sujamess",
  description:
    "Creative space of Sujames. Writing anything that comes to mind.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={`${inter.className} overflow-y-auto no-scrollbar`}>
        <div className="w-full min-h-screen flex justify-center bg-base-100">
          <div className="max-w-7xl w-full flex justify-center">
            <div className="flex flex-col gap-y-8 w-full h-full">
              <Navbar />
              <main className="min-h-[calc(100vh-6rem)] h-full max-w-5xl w-full self-center px-8">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
