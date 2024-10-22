import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/core/providers/ThemeProvider";
import { cn } from "@/core/functions/cn";

const Navbar = dynamic(() => import("@/core/components/layouts/Navbar"));
const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sujamess",
  description:
    "Creative space of Sujames. Writing anything that comes to mind.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body
        className={cn(
          font.className,
          "overflow-y-auto no-scrollbar flex justify-center",
        )}
      >
        {/* <body>
        <Navbar /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-7xl w-full flex justify-center">
            <div className="flex flex-col gap-y-8 w-full h-full">
              <Navbar />
              <main className="min-h-[calc(100vh-6rem)] h-full max-w-5xl w-full self-center px-8">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
