import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
    icon: "/profile.webp",
    shortcut: "/profile.webp",
    apple: "/profile.webp",
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
      className={`${jetbrainsMono.variable} h-full antialiased scanlines`}
    >
      <body className="min-h-full bg-background text-foreground font-mono">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
