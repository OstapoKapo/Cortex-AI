import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "CortexAI",
  description: "Your AI-powered assistant for smarter work and life.",
  keywords: ["AI", "productivity", "assistant"],
  authors: [{ name: "Prodaniuk Ostap", url: "https://cortexai.com" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
