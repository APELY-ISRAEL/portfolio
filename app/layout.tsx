import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "@/components/ui/theme-provider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
        <StairTransition/>
        <PageTransition>
            {children} 
          </PageTransition>
            </ThemeProvider>
      </body>
    </html>
  );
}
