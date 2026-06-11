import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaswanth Mallampati — Senior Software Engineer",
  description:
    "Senior Software Engineer in Test with 4+ years in the payments industry. Specialising in test automation, CI/CD, and quality engineering.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
