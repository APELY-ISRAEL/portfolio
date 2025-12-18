import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "@/components/ui/theme-provider"
import I18nProvider from "@/locales/I18nProvider";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${jetbrainsMono.variable} min-h-screen flex flex-col bg-slate-900`}>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            {/* Transitions visuelles (ne doivent pas impacter la hauteur) */}
            <StairTransition />

            <main className="flex-1 overflow-hidden">
              <PageTransition>
                {children}
              </PageTransition>
            </main>

          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}


