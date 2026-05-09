import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jether Omictin — Full Stack Developer",
  description:
    "Full Stack Developer & AI enthusiast based in Cebu, Philippines. Building scalable web and mobile apps end-to-end.",
  keywords: [
    "Jether Omictin",
    "Full Stack Developer",
    "Next.js",
    "NestJS",
    "React Native",
    "Cebu",
    "Philippines",
    "AI",
  ],
  authors: [{ name: "Jether Omictin", url: "https://jeth.me" }],
  creator: "Jether Omictin",
  icons: {
    icon: "/2x2.jpg",
    shortcut: "/2x2.jpg",
    apple: "/2x2.jpg",
  },
  metadataBase: new URL("https://jeth.me"),
  openGraph: {
    title: "Jether Omictin — Full Stack Developer",
    description:
      "Full-stack developer & AI enthusiast. Building scalable web and mobile applications from concept to deployment.",
    url: "https://jeth.me",
    siteName: "Jether Omictin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jether Omictin — Full Stack Developer",
    description:
      "Full-stack developer & AI enthusiast based in Cebu, Philippines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-amber-300/30 selection:text-amber-50">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
